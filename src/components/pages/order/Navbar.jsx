import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Navbar({username}) {
    return (
        <NavbarStyled>
                    Navbar
                    <h1>Bonjour {username}</h1>
                    <Link to="/">
                        <button>Déconnexion</button>
                    </Link>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    background: blue;

`;