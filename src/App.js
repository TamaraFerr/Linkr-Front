import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/signup" element={""} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}


