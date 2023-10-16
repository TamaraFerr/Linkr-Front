import styled from "styled-components";
import Twittes from "../Components/Home/Twittes";
import Menu from "./Menu";
import Hashtags from "../Components/Home/Hashtags";

export default function Hashtag(){
    return(
        <Container>
            <Menu />

            <div className="timeLine">

                <p className="title"># hashtag</p>

                <Twittes />

            </div>

            <Hashtags />

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