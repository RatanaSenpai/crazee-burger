import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { styled } from "styled-components";

export default function LoginForm() {
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue("")
        navigate(`order/${inputValue}`)
    }

    const handleChange = (e) => {   
            setInputValue(e.target.value)
        }

    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <hr />
                <h2>Connectez-vous</h2>
            </div>
            <div>
                <input
                    value={inputValue}
                    onChange={handleChange}
                    type="text"
                    placeholder="Entrez votre prénom..."
                    required />
                <button>Accédez à votre espace</button>
            </div>
        </LoginFormStyled>
    )
}

const  LoginFormStyled = styled.div`
    background: green;
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    font-family: "Amatic SC", cursive;

    hr {
        border: 1.5px solid #f56a2c;
        margin-bottom: 40px;
    }

    h1 {
        color: white;
        font-size: 48px;
    }

    h2 {
        color: #8e8b8b;
        margin: 20px 10px 10px;
        color: white;
        font-size: 36px;
    }
`