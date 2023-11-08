

import {pruebaAddInQueue}  from './dataEstructures/createEvent'
import { pruebaAvl } from './noLinealDtEstructures/AvlPrueba'
import {MaxRanking, insertMaxHeap}  from './noLinealDtEstructures/ranking'
import { insertAvlObj, printLevelOrder, pruebaAvlConObjetos, searchtAvlObj } from './pruebasConObjetos/avlConObjeto'
import { InserUnionEvents, findEvents } from './pruebasConObjetos/disjoinSetConObjetos'

function App() {
  // pruebaAddInQueue()
  
  return (
    <div>
      <div>Helo word</div>
      <button className='p-8' onClick={insertMaxHeap} >insertMaxHeap</button> 
      {/* <button className='p-8' onClick={pruebaAddInQueue} >eliminar evento</button>  */}
      <button className='p-8' onClick={MaxRanking} >MaxRanking</button> 
      <button className='p-8' onClick={insertAvlObj} >insertAvlObj</button> 
      <button className='p-8' onClick={searchtAvlObj} >searchtAvlObj</button> 
      <button className='p-8' onClick={InserUnionEvents} >InserUnionEvents</button> 
      <button className='p-8' onClick={findEvents} >findEvents</button> 
    
      {/* <button className='p-8' onClick={pruebaAddInQueue} >pruebaAddInQueue</button> 
      <button className='p-8' onClick={pruebaAddInStack} >pruebaAddInStack</button>  */}
      {/* <button className='p-8' onClick={pruebaAddInQueueArray} >pruebaAddInQueue</button> 
      <button className='p-8' onClick={pruebaAddInStackArray} >pruebaAddInStack</button> 
      <button className='p-8' onClick={pruebaEliminarInQueue} >pruebaEliminarInQueue</button> 
      <button className='p-8' onClick={pruebaEliminarInStack} >pruebaEliminarInStack</button> 
      <button className='p-8' onClick={pruebaEliminarInQueueArray} >pruebaEliminarInQueue</button> 
      <button className='p-8' onClick={pruebaEliminarInStackArray} >pruebaEliminarInStack</button>  */}
      
      
    </div>
    
  )
}

export default App