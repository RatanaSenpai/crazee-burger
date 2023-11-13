import styled from "styled-components"
import { theme } from "../../../../../theme"
import Header from "../../../../reusable-ui/Header"

export default function Footer() {
    return (
    <Header>
        <FooterStyled>
            <span>Codé avec ❤️ et React.JS</span>
        </FooterStyled>
    </Header>
)
}

const FooterStyled = styled.span`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: ${theme.fonts.size.P2};
        font-family: ${theme.fonts.family.stylish};
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.white};
    }
`
