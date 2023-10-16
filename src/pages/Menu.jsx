import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"


export default function Menu() {

    const [status, setStatus] = useState("disabled")
    const [form, setForm] = useState({ search: "" })
    const [user, setUser] = useState()
    const navigate = useNavigate()


    function Logout(i) {

        i === 1 ? setStatus("click") : setStatus("disabled")

    }
    if (status === "disabled") {
        return (
            <Container>
                <p onClick={() => navigate("/timeline")}>Linkr</p>
                <form>
                    <input
                        placeholder="   Search for people"
                        type="text"
                        value={form.search}
                        onChange={(e) => setForm({ ...form, search: e.target.value })}
                        required
                    />
                </form>
                <div>
                    <ion-icon onClick={() => Logout(1)} name="chevron-down-outline"></ion-icon>
                    <img src="https://i.pinimg.com/originals/7b/f4/f8/7bf4f8f11c22478d098c089c5d386cc7.jpg" alt="" />
                </div>

            </Container>
        )
    } else {

        return (
            <Container>

                <p onClick={() => navigate("/timeline")}>Linkr</p>

                <form>
                    <input
                        placeholder="   Search for people"
                        type="text"
                        value={form.search}
                        onChange={(e) => setForm({ ...form, serch: e.target.value })}
                        required
                    />
                </form>

                <div>
                    <ion-icon onClick={() => Logout()} name="chevron-up-outline"></ion-icon>
                    <img src="https://i.pinimg.com/originals/7b/f4/f8/7bf4f8f11c22478d098c089c5d386cc7.jpg" alt="" />
                </div>
                <button> Logout</button>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;

    width: 100%;
    height: 72px;
    background: #151515;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);

    align-items: center;
    justify-content: space-between;
    
    position: fixed;
    z-index: 1;

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
        width: 53px;
        height: 53px;

        border-radius: 26.5px;

        margin-right: 35px;
    }

    ion-icon{
        
        color: #FFFFFF;
        width: 40px;
        height: 30px;
       
        margin: 10px;
    }

    button{
        position: fixed;
        top: 72px;
        right: 0px;

        width: 150px;
        height: 47px;

        border-radius:0px, 0px, 20px, 20px;
        border: 1px solid #171717;

        background-color: #171717;

        color: #FFFFFF;
        font-family: 'Lato';
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0.05em;
    }

    input{
        width: 563px;
        height: 45px;
        border-radius: 8px;

        border: 1px solid #FFFFFF;
        background-color: #FFFFFF;

        font-family: Lato;
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;

    }

`