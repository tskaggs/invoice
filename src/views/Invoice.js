var m = require("mithril")

module.exports = {
  view: function() {
    return m(".invBody", [
      m(".invSectionHeader", [
        m(".invHeaderItemTitle", [
          m("p.invTitle", "INVOICE"),
          m("p#invByName.invByName[placeholder=by Your Company]")
        ]),
        m(".invHeaderItemDate", [
          m("p#invDateTop.invDate", "Jun 28, 2017")
        ])
      ])
    ])
  }
}
