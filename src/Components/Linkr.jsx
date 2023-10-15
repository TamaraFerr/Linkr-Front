import styled from "styled-components"

export default function LinkrLogo() {
    return (
        <div>
        <Text>Linkr</Text>
        <SubText>save, share and discover </SubText>
        <SubText>the best links on the web </SubText>
        </div>
    )
}



const Text = styled.h1`
    font-family: 'Passion One', sans-serif;
    font-weight: 700;
    font-size: 106px;
`
const SubText = styled.h2`
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 43px;
    color: #FFFFFF;

`

