import styled from "styled-components"
import Menu from "./Menu.jsx"
import InputPost from "../Components/Home/InputPost.jsx"
import { useEffect, useState } from "react"
import axios from "axios"
import Twittes from "../Components/Home/Twittes.jsx"

export default function Home() {

    const [twittes, setTwittes] = useState()

    useEffect(() => {

        /* 
     const config = {
         headers: {
             Authorization: `Bearer ${token.token}`
         }
     } 

        axios.get(`${import.meta.env.VITE_API_URL}/home`)

            .then((res) => {
                setTwittes(res.data)
            })
            .catch((err) => {

                alert(err.message)
            })
            */
    }, [])

    return (
        <Container>
            <Menu />

            <div className="timeLine">

                <p className="title">TimeLine</p>

                <CreatePost>
                    <img src="https://i.pinimg.com/originals/7b/f4/f8/7bf4f8f11c22478d098c089c5d386cc7.jpg" />
                    <InputPost />
                </CreatePost>

                <Twittes />

            </div>

        </Container>
    )
}

const Container = styled.div`

    display: flex;
    justify-content: center;
    
    .timeLine{
        width: 611px;
        position: relative;
        top: 140px;
    }

    .title{
        font-family: 'Passion One', sans-serif;
        font-size: 43px;
        color: #FFFFFF;
            
        margin-bottom: 30px;
    }

`

const CreatePost = styled.div`
    display: flex;

    width: 611px;
    height: 209px;

    border-radius: 16px;

    background-color:#FFFFFF;

    img{

        width: 50px;
        height: 50px;

        border-radius: 26.5px;

        margin-top: 15px;
        margin-left: 20px;
    }

   
`

