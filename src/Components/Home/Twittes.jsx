import { useState } from "react"
import styled from "styled-components"


export default function Twittes({ name, photo, link, description, likes }) {

    const [status, setStatus] = useState("desliked")
    console.log(status)
    //embeded link, embeded bookmark,custom embeded link

    function click(i) {


        (i === 1) ? setStatus("desliked") : setStatus("like")

    }

    if (status === "desliked") {
        return (
            <CardTwitte>
                <div className="likeCount">
                    <img src={photo} alt="" />

                    <ion-icon
                        name="heart-outline"
                        onClick={() => click()}
                        status={status ? "desliked" : "like"}>
                    </ion-icon>
                    <p className="likes" >{likes} likes</p>
                </div>

                <div className="text">
                    <h1>{name}</h1>
                    <p>{description}</p>

                    <CardUrl>
                        <p><a href={link} target="_blank">{link}</a></p>
                    </CardUrl>
                </div>
            </CardTwitte>
        )
    } else {
        return (
            <CardTwitte>
                <div className="likeCount">
                    <img src={photo} alt="" />

                    <ion-icon name="heart" onClick={() => click(1)} status={status ? "desliked" : "like"}></ion-icon>
                    <p className="likes" >{likes} likes</p>
                </div>

                <div className="text">
                    <h1>{name}</h1>
                    <p>{description}</p>

                    <CardUrl>
                        <p><a href={link}>{link}</a></p>
                        <img src={link} alt="image link" />
                    </CardUrl>
                </div>
            </CardTwitte>
        )
    }
}

const CardTwitte = styled.div`
    display: flex;
    
    width: 611px;
    height: 276px;
    border-radius: 16px;

    margin-top: 40px;
    background-color: #171717;

    h1{
        font-family: 'Lato', sans-serif;
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;

        color: #FFFFFF;
    }

    p{  
        font-family: 'Lato',sans-serif;
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;

        color: #B7B7B7;
    }

    img{

        width: 50px;
        height: 50px;

        border-radius: 26.5px;

        margin-top: 15px;
        margin-left: 20px;
    }

    .text{
        margin-top: 25px;
        margin-right: 25px;
        width: 502px;
        height: 250px;

    }

    .likeCount{
        
        ion-icon{
            color: #FFFFFF;
            width: 30px;
            height: 25px;
            
            margin-top: 15px;
            margin-left: 25px;

            color:${props => props.status === "desliked" ? "#FFFFFF" : "#AC0000"};
            
        }
    }

    .likes{
        margin-left: 15px;
    }
`

const CardUrl = styled.div`

    width: 503px;
    height: 155px;

    border: 1px solid #4D4D4D;
    border-radius: 11px;

    color:  #C4C4C400;

    margin-top: 18px;
`