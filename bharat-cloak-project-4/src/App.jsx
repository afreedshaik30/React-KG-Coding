import './App.css';
import Heading from "./Components/Heading.jsx";
import Slogan  from "./Components/Slogan.jsx";
import CurrentTime from "./Components/CurrentTime.jsx";
const App = () => {
  return (
    <center>
      <Heading/>
      <Slogan/>
      <CurrentTime/>
    </center>
  )
}

export default App