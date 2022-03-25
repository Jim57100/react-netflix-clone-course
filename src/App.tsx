import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignIn from "./screens/SignIn";
import Details from "./screens/Details";
import WhosWatching from "./screens/WhosWatching";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/whoswatching" element={<WhosWatching />} />
        <Route path="/browse" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
