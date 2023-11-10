import { styled } from "styled-components";
import { theme } from "../../../../theme";
import MainRightSide from "./MainRightSide/MainRightSide"
import Basket from "./Basket";

export default function Main() {
    return (
        <MainStyled>
            <Basket />
            <MainRightSide />
    </MainStyled>
    )
}

const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    height: calc(95vh - 10vh);

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.strong};

    display: grid;
    grid-template-columns: 25% 1fr;
`;