var m = require("mithril")

module.exports = {
  view: function(vnode) {
    return m(".container", [
      m("button#open-button.menu-button", "Open Menu"),
      m(".content-wrap", [
        m(".content", [
          m(".invContainer", vnode.children),
          m(".footer", [
            m("p", "Designed & coded with care in San Francisco and recoded in MithrilJS in Colorado")
          ])
        ])
      ])
    ])
  }
}
