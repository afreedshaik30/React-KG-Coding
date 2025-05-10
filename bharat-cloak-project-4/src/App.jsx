import './App.css';
import Heading from "./Components/Heading.jsx";
import Slogan  from "./Components/Slogan.jsx";
import CurrentTime from "./Components/CurrentTime.jsx";
const App = () => {
  console.log("app Component painted");
  return (
    <center>
      <Heading/>
      <Slogan/>
      <CurrentTime/>
    </center>
  )
}

export default App