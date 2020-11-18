// import Event from './Components/Event'
// import Evento from './Components/Evento'
// import ListaInterna from './Components/ListaInterna'
import CountClick from './Components/CountClick'
// import Counter from './Components/Counter'
// import Tick from './Components/Tick'
// import Repositories from './Components/Repositories'
// import Repos from './Components/Repos'
import { useState } from 'react'

function App() {
  const [visible, setVisible] = useState(true)
  setTimeout(()=> {
    setVisible(false)
  }, 5000)
  return (
    <div>
      {visible && <CountClick/>}
    </div>
    
    )
    
      {/* <h1>Vambora codar!</h1>
      <Event/>
      <Evento/>
      <ListaInterna/>      
      <Counter/> */}
      {/* <Tick/> */}
      {/* <Repositories/> */}
      {/* <Repos/> */} 
}

export default App;
