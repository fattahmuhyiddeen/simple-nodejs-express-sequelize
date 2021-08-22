const express = require('express');
const m = require('./model');
const app = express();
const port = 3000;

// http://localhost:3000/users
app.get('/users', function (req, res) {
  m.User.findAll()
    .then(data => res.send(data))
    .catch(e => res.send(e));
});

// http://localhost:3000/add-user?name=abu&phone=0125869350&email=abu@gmail.com.my
app.get('/add-user', function (req, res) {
  m.User.create(req.query)
    .then(data => res.send(data))
    .catch(e => res.send(e));
})

// http://localhost:3000/delete-user?id=3
app.get('/delete-user', function (req, res) {
  m.User.destroy({where: {id: req.query.id}})
    .then(() => res.send('Successfully deleted'))
    .catch(e => res.send(e));
})

// http://localhost:3000/update-user?name=aaaaa&id=3
app.get('/update-user', function (req, res) {
  m.User.update(
    {name: req.query.name, email: req.query.email, phone: req.query.phone},
    {where: {id: req.query.id}}
  )
    .then(() => res.send('data updated'))
    .catch(e => res.send(e));
})

app.listen(port);