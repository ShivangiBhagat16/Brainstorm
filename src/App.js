import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvitesSent from "./Components/InvitesSent";
import Notes from "./Components/Notes";

function App() {
  return (
    <div className="notes relative flex">
      <div className="main-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes />} />
            {/* <Route path="/invites-sent" element={<InvitesSent />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
