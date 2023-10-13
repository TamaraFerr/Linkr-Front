import styled from "styled-components"


export default function Twittes() {
    return (
        <CardTwitte>
            <div className="likeCount">
                <img src="https://i.pinimg.com/originals/7b/f4/f8/7bf4f8f11c22478d098c089c5d386cc7.jpg" alt=""/>
                <ion-icon name="heart-outline"></ion-icon>
            </div>
            <div className="text">
                <h1>Juvenal Juvenico</h1>
                <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</p>

                <CardUrl>

                </CardUrl>
            </div>
        </CardTwitte>
    )
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
        }
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