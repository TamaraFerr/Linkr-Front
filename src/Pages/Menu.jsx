import styled from "styled-components"


export default function Menu() {
    return (
        <Container>
            <p>Linkr</p>
            <img src=""/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;

    height: 72px;
    background: #151515;

    align-items: center;
    justify-content: space-between;
    
    p{  
        display: flex;
        
        font-weight: 700;
        font-size: 49px;
        font-family: 'Passion One', sans-serif;
        color: #FFFFFF;

        align-items: center;

        margin-left: 28px;
    }

    img{
        width: 43px;
        height: 43px;

        border-radius: 26.5px;

        margin-right: 35px;
    }

`