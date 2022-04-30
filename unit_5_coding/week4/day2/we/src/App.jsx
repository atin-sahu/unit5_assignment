import { useContext } from 'react'
import { Counter } from './components/Counter'
import { StoreContext } from './redux/StoreContext'

function App() {
  const {getState} = useContext(StoreContext);
  const {counter} = getState();

  return (
    <div className="App">
      <Counter></Counter>
      <p>number:{counter}</p>
    </div>
  )
}

export default App
