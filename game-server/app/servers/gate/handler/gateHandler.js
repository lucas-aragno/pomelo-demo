const dispatcher = require('../../../util/dispatcher')

module.exports = (app) => (
  new Handler(app)
)

const Handler = (app) => {
  console.log('HANDLER')
  this.app = app
}

const handler = Handler.prototype

handler.queryEntry = (msg, session, next) => {
  console.log('================= ACA', next)
}
