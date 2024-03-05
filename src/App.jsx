import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Start from "./pages/Start";

function App() {
  return (
    <> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/start' element={<Start />} />
        <Route path='/new' element={<>New Route</>} />
      </Routes>
    </>
  );
}

export default App;
