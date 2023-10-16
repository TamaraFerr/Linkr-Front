import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import LinkrLogo from "../Components/Linkr"
import { useState} from "react"
import axios from "axios"


const URL = 'http://localhost:5000';

export default function SignInPage() {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function signInSuccess(answer) {
    localStorage.setItem("Token", answer.data);
    console.log("Signin Token: "+answer.data);
    navigate("/home");
  }

  function signInError(answer) {
    alert(answer.message);
}

  function signIn(event) {
    if (!password && !email) alert("Preencha todos os campos para entrar");
    else {
        event.preventDefault();
          const data = {
            email: email,
            password: password
        };
        const query = axios.post(URL+'/signin', data);
        query.then(signInSuccess); 
        query.catch(signInError);
    }
  } 


  return (
   <PagesContainer>
   <LogoContainer>
      <LinkrLogo />
   </LogoContainer>
    <SignContainer>
        <FormSign>
        <form onSubmit={signIn}>

          <input data-test="email" placeholder="e-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input data-test="password" placeholder="password" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} />
          <button data-test="sign-in-submit" >Log in</button>
        </form>

        <Link to="/signup">
          <h3>First time? Create an account!</h3>
        </Link>
        </FormSign>
      </SignContainer>
   </PagesContainer>
  )
}

export const PagesContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const LogoContainer = styled.section`
  height: 100vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SignContainer = styled.section`
  background-color: #333333;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormSign = styled.section`
  width: 429px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`