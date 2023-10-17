import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { styled } from "styled-components";
import { BsPersonCircle } from "react-icons/bs"

import { IoChevronForwardOutline } from "react-icons/io5"
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import { theme } from '../../../theme';


export default function LoginForm() {
    const [inputValue, setInputValue] = useState("Senpai")
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
                <TextInput 
                    value={inputValue} 
                    onChange={handleChange} 
                    placeholder={"Entrez votre prénom"}
                    required
                    Icon={<BsPersonCircle />}
                    className="input-login"
                />
                
                <PrimaryButton
                    label={"Accéder à mon espace"}
                    Icon={ <IoChevronForwardOutline /> }
                />
            </div>
        </LoginFormStyled>
    )
}

const  LoginFormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 2.5rem 2rem;
    border-radius: ${theme.borderRadius.round};
    font-family: "Amatic SC", cursive;

    hr {
        border: 1.5px solid ${theme.colors.loginLine};
        margin-bottom: ${theme.gridUnit * 5}px;
    }

    h1 {
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P5};
    }

    h2 {
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P4};
    }

    .input-login {
        margin: 18px 0;
    }
`