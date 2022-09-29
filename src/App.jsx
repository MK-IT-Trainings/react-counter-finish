import Counter from './components/Counter';
import './App.css'

function App() {
  return (
    <Counter 
      useIncrement
      useDecrement
      useMultiplyBy
      useDivideBy
      useCustomInput />
  )
}

export default App
