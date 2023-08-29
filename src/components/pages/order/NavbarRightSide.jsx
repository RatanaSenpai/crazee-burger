import { Link } from "react-router-dom";
import { styled } from "styled-components";


export default function NavbarRightSide({username}) {
    return (
        <NavbarRightSideStyle className="right-side">
            Right
            <h1>Bonjour {username}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </NavbarRightSideStyle>
    )
}

const NavbarRightSideStyle = styled.div`
    background: purple;
`;