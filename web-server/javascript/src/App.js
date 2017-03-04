import { h, Component } from 'preact'

class App extends Component {

  constructor () {
    super()
    this.queryEntry = this.queryEntry.bind(this)
  }

  queryEntry (uid, callback) {
    const route = 'gate.gateHandler.queryEntry'
    pomelo.init({
      host: window.location.hostname,
      port: 3010,
      log: true
    }, () => {
      pomelo.request(route, {
        uid
      }, (data) => {
        pomelo.disconnect()
        if (data.code === 500) {
          console.log(data)
          console.error('ERROR')
          return
        }
        callback(data.host, data.port)
      })
    })
  }

  componentDidMount () {
    this.queryEntry('test', () => {
      console.warn('CALLBACK')
    })
  }

  render () {
    return (
      <div>
        hi
      </div>
    )
  }
}

export default App
