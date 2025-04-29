import './App.css'
import RandomComp from './Random';
function App() {
  let rollNum = '208T1A0560';

  const fullName = () => {
    return 'Shaik Afreed';
  }

  const styleObj = {
      backgroundColor : "red",
      color : 'white',
    }


  return(
    <>
    <h1 style = {styleObj}>Hi, EveryOne I'm {fullName()}</h1>
    <h5 style={{'background-color' :'rgb(39, 124, 158)'}}>{rollNum}</h5>
    <RandomComp></RandomComp>
    <RandomComp></RandomComp>
    <RandomComp/>
    <RandomComp/>
    <RandomComp/>
    </>
  )
}

export default App
