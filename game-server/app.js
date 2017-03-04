const pomelo = require('pomelo')

const app = pomelo.createApp()

app.set('name', 'pomelo-demo')

app.configure('production|development', 'connector', () => {
  app.set('connectorConfig',
    {
      connector: pomelo.connectors.sioconnector,
      transports: ['websocket', 'polling'],
      heartbeats: true,
      closeTimeout: 60 * 1000,
      heartbeatTimeout: 60 * 1000,
      heartbeatInterval: 25 * 1000
    })
  app.filter(pomelo.timeout())
})

app.start()

process.on('uncaughtException', (err) => {
  console.error(' Caught exception: ' + err.stack)
})
