

import {pruebaAddInQueue}  from './dataEstructures/createEvent'
import { insertNoti, showNotis } from './dataEstructures/final'
import { pruebaAvl } from './noLinealDtEstructures/AvlPrueba'
import { insertEvent, pruebHashT } from './noLinealDtEstructures/hashTable'
import {MaxRanking, insertMaxHeap}  from './noLinealDtEstructures/ranking'
import { insertAvlObj, printLevelOrder, pruebaAvlConObjetos, searchtAvlObj } from './pruebasConObjetos/avlConObjeto'
import { InserUnionEvents, findEvents } from './pruebasConObjetos/disjoinSetConObjetos'

function App() {
  // pruebaAddInQueue()
  
  return (
    <div>
      <div>Helo word</div>
      <button  className='p-8' onClick={insertMaxHeap} >insertMaxHeap and show</button> 
      <button className='p-8' onClick={insertNoti} >insert and show notis gen</button> 
      <button className='p-8' onClick={showNotis} >show notis</button> 





      {/* <button className='p-8' onClick={MaxRanking} >MaxRanking</button>  */}
      <button className='p-8' onClick={insertAvlObj} >insertAvlObj</button> 
      <button className='p-8' onClick={searchtAvlObj} >searchtAvlObj</button> 
      <button className='p-8' onClick={insertEvent} >hash table </button> 
      {/* <button className='p-8' onClick={InserUnionEvents} >InserUnionEvents</button>  */}
      {/* <button className='p-8' onClick={findEvents} >findEvents</button>  */}

 
      
      
    </div>
    
  )
}

export default App