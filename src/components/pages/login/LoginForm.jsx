import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { styled } from "styled-components";
import { BsPersonCircle } from "react-icons/bs"

import { IoChevronForwardOutline } from "react-icons/io5"
import Input from './Input';


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
                <Input 
                value={inputValue} 
                onChange={handleChange} 
                placeholder={"Entrez votre prénom"}
                required
                Icon={<BsPersonCircle className="icon" />}
                />
                
                <button className="button-with-icon">
                <span>Accédez à votre espace</span>
                    <IoChevronForwardOutline className='icon' />
                </button>
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

    

    .button-with-icon {
        width: 100%;
        border: 1px solid red;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        white-space: nowrap;
        text-decoration: none;
        line-height: 1;

        padding: 18px 24px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 800;
        color: white;
        background-color: #ff9f1b;
        border: 1px solid #ff9f1b;

        &:hover:not(:disabled) {
            background-color: white;
            color: #ff9f1b;
            border: 1px solid #ff9f1b;
            transition: all 200ms ease-in-out;
        }

        &:active {
            color: white;
            background-color: #ff9f1b;
            border: 1px solid #ff9f1b;
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed:
        }

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
            margin-left: 10px;
        }
    }

`