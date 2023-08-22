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
                <br />
                <h2>Connectez vous</h2>
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
`