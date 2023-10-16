import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Twittes from "../Components/Home/Twittes"
import Menu from "./Menu"
import Hashtags from "../Components/Home/Hashtags"
import { useParams } from "react-router-dom"


export default function UserPosts() {

    const [user, setUser] = useState()
    const { id } = useParams()

    const hashtags = ['React', 'Javascript', 'Webdevelopment', 'Coding', 'Alura', 'Ariven', 'Ruby on Rails', 'Developer'];
    const token = "a46ef563-3254-4f43-861f-d5c52f894084"
    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(`${process.env.REACT_APP_API_URL}/user/:${id}`, config)

            .then((res) => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch((err) => {

                alert("An error occured while trying to fetch the posts, please refresh the page")
            })
    }, [])

    console.log(user)
    return (
        <Container>
            <Menu />

            <div className="timeLine">
                <div className="textImage">
                    <img src="https://i.pinimg.com/originals/7b/f4/f8/7bf4f8f11c22478d098c089c5d386cc7.jpg" alt="" />
                    <p className="title">TimeLine</p>
                </div>

                {user && user.map((u) =>
                    <Twittes
                        name={u.username}
                        photo={u.photo}
                        link={u.link}
                        description={u.description}
                        likes={u.likes}
                    />
                )}

            </div>

            <Hashtags hashtags={hashtags}/>
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

            img{
    
                width: 50px;
                height: 50px;

                border-radius: 26.5px;

            }

           
        }
    
        .title{
            font-family: 'Passion One', sans-serif;
            font-size: 43px;
            color: #FFFFFF;
                
           margin: 5px 15px;
        }
        
        .textImage{

            display: flex;
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