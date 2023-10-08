
import {pruebaAddInQueue,  pruebaAddInStack, pruebaEliminarInQueue, pruebaEliminarInStack}  from './dataEstructures/createEvent'
function App() {
  // pruebaAddInQueue()
  
  return (
    <div>
      <div>Helo word</div>
      <button className='p-8' onClick={pruebaAddInQueue} >pruebaAddInQueue</button> 
      <button className='p-8' onClick={pruebaEliminarInQueue} >pruebaEliminarInQueue</button> 
      <button className='p-8' onClick={pruebaAddInStack} >pruebaAddInStack</button> 
      <button className='p-8' onClick={pruebaEliminarInStack} >pruebaEliminarInStack</button> 
      
      
    </div>
    
  )
}

export default App