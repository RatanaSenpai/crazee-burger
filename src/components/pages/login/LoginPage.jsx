import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm"

export default function LoginPage() {
    //affichage (render)
    return (        
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
        
    )
}

const LoginPageStyled = styled.div`
    background: red;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;