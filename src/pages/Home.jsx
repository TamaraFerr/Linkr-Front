import styled from "styled-components"
import Menu from "./Menu.jsx"
import InputPost from "../Components/Home/InputPost.jsx"
import { useEffect, useState } from "react"
import Twittes from "../Components/Home/Twittes.jsx"
import Hastags from "../Components/Home/Hashtags.jsx"
import axios from "axios"

export default function Home() {
    //lista de hashtags pra servir de exemplo até eu fazer a lista no banco de dados
    const hashtags = ['React', 'Javascript', 'Webdevelopment', 'Coding', 'Alura', 'Ariven', 'Ruby on Rails', 'Developer'];

    const [twittes, setTwittes] = useState()
    const [user, setUser] = useState()

    useEffect(() => {

        const token = "fff843d4-e2c6-4e3d-9cb0-81ee644e23d5"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(`${process.env.REACT_APP_API_URL}/timeline`, config)


            .then((res) => {

                setUser({ name: res.data.name, photo: res.data.photo })
                setTwittes(res.data.twittes)
            })
            .catch(() => {

                alert("An error occured while trying to fetch the posts, please refresh the page")
            })
    }, [])

    return (
        <Container>
            <Menu

            />

            <div className="timeLine" >

                <p className="title">TimeLine</p>

                <CreatePost data-test="publish-box">

                    <img src={user && user.photo} alt="" />
                    <InputPost />

                </CreatePost>

                {twittes && twittes.map((tw) =>
                    <Twittes
                        id={tw.id}
                        name={tw.username}
                        photo={tw.photo}
                        link={tw.link}
                        description={tw.description}
                        likes={tw.likes}
                    />
                )}


            </div>

            <Hastags hashtags={hashtags} />

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
        margin-right: 25px;
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
    height: 230px;

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