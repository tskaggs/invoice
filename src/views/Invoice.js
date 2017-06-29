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
      ]),
      m(".invSectionSummary", [
        m(".invItemInvTo", [
          m("p.componentTitle", "INVOICE TO")
        ]),
        m(".invItemPaymentSummary", [
          m("p#invTotal.invTotal", "$0.00"),
          m("p.invDue", "Due on ", [
            m("span#dueDateTop", "Jul 12, 2017")
          ]),
          m("#stripeButtons", [
            m("#connectButtonSpan", [
              m("button#connectButton.invButtonConnect", "Connect with Stripe")
            ])
          ])
        ])
      ])
    ])
  }
}
