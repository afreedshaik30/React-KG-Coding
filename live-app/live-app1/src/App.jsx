import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Room from "./components/Room";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </>
  );
};

export default App;
