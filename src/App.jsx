import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Container/Container'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Container></Container>
    </div>
  )
}

export default App
