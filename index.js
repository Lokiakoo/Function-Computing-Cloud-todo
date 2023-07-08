'use strict'

var getRawBody = require('raw-body');
const todo = require('./todo.js')

exports.handler = (req, resp, context) => {
  resp.setHeader('content-type', 'application/json')
  var uri = (req.url).split('/')
  if (uri.length == 0) {
    resp.send(JSON.stringify({ 'code': 400, 'body': 'Bad request' }))
  } else {
    var route = uri[uri.length - 1]
    switch (req.method) {
      //GET - endpoint = url/list
      case 'GET':
        switch (route) {
          case "list":
            resp.send(JSON.stringify(todo.list()))
            break
          default:
            //Any unfriendly access to the API should return suitable JSON message.
            resp.send(JSON.stringify({ 'code': 400, 'body': 'Bad request' }))
            break
        }
        break
      //POST - endpoint = url/add
      case 'POST':
        switch (route) {
          case "add":
            getRawBody(req, (err, body) => {
              resp.send(JSON.stringify(todo.add(body)))
            })
            break
          default:
            //Any unfriendly access to the API should return suitable JSON message.
            resp.send(JSON.stringify({ 'code': 400, 'body': 'Bad request' }))
            break
        }
        break
      //PUT - endpoint = url/remove
      case 'PUT':
        switch (route) {
          case "remove":
            getRawBody(req, (err, body) => {
              resp.send(JSON.stringify(todo.remove(body)))
            })
            break
          default:
            //Any unfriendly access to the API should return suitable JSON message.
            resp.send(JSON.stringify({ 'code': 400, 'body': 'Bad request' }))
            break
        }
      default:
        //Any unfriendly access to the API should return suitable JSON message.
        resp.send(JSON.stringify({ 'code': 400, 'body': 'Bad requset' }))
    }
  }
}