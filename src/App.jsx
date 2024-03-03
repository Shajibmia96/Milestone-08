import './App.css'
import DeisyUI from './Component/DeisyUI/DeisyUI'
import LineChart from './Component/LineChart/LineChart'
import Phones from './Component/Phones/Phones'

function App() {
  
  return (
    <>
        <DeisyUI><p>
          
          </p></DeisyUI>
      <h1 className='text-4xl font-bold pl-4'>Prices prediction </h1>

      <LineChart></LineChart>
      <Phones></Phones>
      
    </>
  )
}

export default App
