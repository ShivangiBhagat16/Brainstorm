import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./Components/Notes";

function App() {
  return (
    <div className="notes relative flex">
      <div className="main-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
