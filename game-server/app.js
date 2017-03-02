const pomelo = require('pomelo')

const app = pomelo.createApp()

app.set('name', 'pomelo-demo')

app.configure('production|development', 'connector', () => {
  app.set('connectorConfig',
    {
      connector: pomelo.connectors.hybridconnector,
      heartbeat: 3,
      useDict: true,
      useProtobuf: true
    })
})

app.start()

process.on('uncaughtException', (err) => {
  console.error(' Caught exception: ' + err.stack)
})
