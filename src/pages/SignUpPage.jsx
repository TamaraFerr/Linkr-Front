import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import LinkrLogo from "../Components/Linkr"
import { useState } from "react"
import axios from "axios"
import { PagesContainer, LogoContainer, SignContainer, FormSign } from "./SignInPage"

const URL = 'http://localhost:5000';

export default function SignUpPage() {
  
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const navigate = useNavigate();
    
  function returnHome() {
    navigate("/");
  }

  function signUpError(answer) {
    if (answer.request.status == 409) alert("Esse email já foi cadastrado") 
    else alert(answer.message);
  }

  function signUp(event) {
        event.preventDefault();
          const data = {
            email: email,
            password: password,
            username: username,
            pictureurl: pictureUrl,
        };
        const query = axios.post(URL+'/signup', data);
        query.then(returnHome); 
        query.catch(signUpError);
  } 

  return (
    <PagesContainer>
   <LogoContainer>
      <LinkrLogo />
   </LogoContainer>
    <SignContainer>
        <FormSign>
          <form onSubmit={signUp}>
            <input placeholder="e-mail" value={email} type="text" onChange={e => setEmail(e.target.value)} />
            <input placeholder="password" value={password} type="password" onChange={e => setPassword(e.target.value)} />
            <input placeholder="username" value={username} type="text" onChange={e => setUsername(e.target.value)} />
            <input placeholder="picture url" value={pictureUrl} type="text" onChange={e => setPictureUrl(e.target.value)} />
            <button>Sign up</button>
          </form>

          <Link to="/">
            <h3>Switch back to log in</h3>
          </Link>
      </FormSign>
      </SignContainer>
   </PagesContainer>
  )
}

// const SingUpContainer = styled.section`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `