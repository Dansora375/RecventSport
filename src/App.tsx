
import {pruebaAddInQueue,  pruebaAddInQueueArray,  pruebaAddInStack, pruebaAddInStackArray, pruebaEliminarInQueue, pruebaEliminarInQueueArray, pruebaEliminarInStack, pruebaEliminarInStackArray}  from './dataEstructures/createEvent'
function App() {
  // pruebaAddInQueue()
  
  return (
    <div>
      <div>Helo word</div>
      <button className='p-8' onClick={pruebaAddInQueue} >pruebaAddInQueue</button> 
      <button className='p-8' onClick={pruebaAddInStack} >pruebaAddInStack</button> 
      <button className='p-8' onClick={pruebaAddInQueueArray} >pruebaAddInQueue</button> 
      <button className='p-8' onClick={pruebaAddInStackArray} >pruebaAddInStack</button> 
      <button className='p-8' onClick={pruebaEliminarInQueue} >pruebaEliminarInQueue</button> 
      <button className='p-8' onClick={pruebaEliminarInStack} >pruebaEliminarInStack</button> 
      <button className='p-8' onClick={pruebaEliminarInQueueArray} >pruebaEliminarInQueue</button> 
      <button className='p-8' onClick={pruebaEliminarInStackArray} >pruebaEliminarInStack</button> 
      
      
    </div>
    
  )
}

export default App