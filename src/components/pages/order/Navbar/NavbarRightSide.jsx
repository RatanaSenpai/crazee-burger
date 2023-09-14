import { styled } from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";


export default function NavbarRightSide({username}) {
    return (
        <NavbarRightSideStyle className="right-side">
            <ToggleButton labelIfUnchecked="ACTIVER LE MODE ADMIN" labelIfChecked="DÉSACTIVER LE MODE ADMIN" />
            <Profile username={username}/>
        </NavbarRightSideStyle>
    )
}

const NavbarRightSideStyle = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
`;