import { h, render } from 'preact'
import App from './src/App'

document.addEventListener('DOMContentLoaded', event => (
 render(<App />, document.getElementById('root'))
))
