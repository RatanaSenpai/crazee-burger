import { styled } from "styled-components";
import Profile from "./Profile";


export default function NavbarRightSide({username}) {
    return (
        <NavbarRightSideStyle className="right-side">
            {/* <div className="admin-button">Admin Button</div> */}
            <Profile />
            <div className="picture"></div>
        </NavbarRightSideStyle>
    )
}

const NavbarRightSideStyle = styled.div`
    display: flex;
    align-items: center;

    /* .admin-button {
        background: lightgray;
    } */

    .profile {
        background: yellow
    }
`;