import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"


export default function InputPost() {

    const [form, setForm] = useState({ url: "", description: "" })
    const navigate = useNavigate()

    const token = localStorage.getItem("Token");

    function createPost(e) {
        e.preventDefault()


        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.post(`${process.env.REACT_APP_API_URL}/timeline`, form, config)
            .then(() => {

                navigate("/timeline")
            })
            .catch((err) => {

                alert("Houve um erro ao publicar seu link")
            })
    }
    return (
        <Container>
            <p> What are you going to share today?</p>
            <form onSubmit={createPost}>
                <input placeholder="  http://..."
                    type="url"
                    value={form.url}
                    onChange={(e) => setForm({ ...form, url: e.target.value })}
                    required

                />
                <input placeholder="  Awesome article about #javascript"
                    type="text"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="text"
                />
                <button type="submit">Publish</button>
            </form>

        </Container>
    )
}

const Container = styled.div`
    margin-left: 15px;


    input{
        width: 450px;
        height: 5px;
        border-radius: 5px;
        
        margin-right: 35px;
        background-color: #EFEFEF;
        border: #EFEFEF;
    }

    p{  
        margin-top: 20px;
        margin-bottom: 5px;
        color: #707070;
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;

    }

    .text{
        margin-top: -10px;
        height: 60px;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 112px;
        height: 31px;
        
        border-radius: 5px;
        background-color: #1877F2;
        border: 1px solid  #1877F2;

        color: #FFFFFF;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0em;

        text-align: center;
        position: relative;
        left: 165px;
        bottom:6px;
    }   
`