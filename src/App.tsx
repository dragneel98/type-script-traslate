import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'

function App () {
  const { fromLanguage, setFromLanguage } = useStore()
  return (
    <div className='app'>
      <h1>translate</h1>
      <button onClick={() => { setFromLanguage('es') }}>traducir español</button>
    </div>
  )
}

export default App
