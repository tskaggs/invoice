var m = require("mithril")

var UserList = require("./views/UserList")
var UserForm = require("./views/UserForm")

var Invoice = require("./views/Invoice")

var Layout = require("./views/Layout")

m.route(document.body, "/invoice", {
  "/invoice": {
    render: function() {
      return m(Layout, m(Invoice))
    }
  },
  "/edit/:id": {
    render: function(vnode) {
      return m(Layout, m(UserForm, vnode.attrs))
    }
  },
})
