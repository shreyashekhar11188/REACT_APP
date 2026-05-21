import './App.css'
import Demo from './Component/Demo';
import Props from './Component/Props';
import UseState from './Component/Hooks/UseState';
import UseEffect from './Component/Hooks/UseEffect';
function App() {
  const name="React JS"

  return (
    <>
     <h2> Hello {name}</h2> 
     <Demo></Demo>
     <Props name= "Shreya" rollnumber= "2503201001122" course="B.Tech" />
     <UseState/>
     <UseEffect/>
      </>
  )
}

export default App
