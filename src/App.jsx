import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import Home from "./pages/Home";
import Hashtag from "./pages/Hashtag";
import UserPosts from "./pages/User";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {

  //const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("Token"));
  
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/timeline" element={<Home />} />
          <Route path="/hashtag:hashtag" element={<Hashtag />} />
          <Route path="/user/:id" element={<UserPosts />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider >
  )
}

//Test