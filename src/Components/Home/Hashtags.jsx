import styled from "styled-components";

export default function Hashtags({hashtags}){
    // function handleClick(){
    //     e.preventDefault()
    // }

    return(
        <Container>
            <Trending>trending</Trending>
            <Hashtag>
                {hashtags.map((hashtag, index) => (
                    <HashtagsList key={index}># {hashtag}</HashtagsList>
                ))}
            </Hashtag>
        </Container>
    )
}

const Container = styled.div`
    width: 301px;
    height: 406px;
    background-color: #171717;
    display: flex;
    flex-direction: column;
    margin-top: 15.7%;
    border-radius: 16px;
    box-sizing: border-box;
`

const Trending = styled.h1`
    border-bottom: 1px solid #484848;
    font-family: "Oswald", sans-serif;
    font-size: 27px;
    font-weight: 700;
    color: #FFFFFF;
    box-sizing: border-box;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
`

const Hashtag = styled.ul`
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 19px;
    color: #FFFFFF;
    box-sizing: border-box;
    padding-left: 20px;
    padding-top: 20px;
`
const HashtagsList = styled.li`
    margin-bottom: 10px;
`