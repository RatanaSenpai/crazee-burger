import { css, styled } from "styled-components";
import { theme } from "../../theme";

export default function Button({label, Icon, className, version = "normal" }) {
    return (
        <ButtonsStyled className={className} version={version}>
                <span>{label}</span>
                <div className="icon">{Icon && Icon}</div>
        </ButtonsStyled>
    )
}

const ButtonsStyled = styled.button`
        ${(props) => props.version === "normal" && extraStylePrimary}
        ${(props) => props.version === "success" && extraStyleSuccess}
        ${({version}) => extraStyle[version]}

        
`

const extraStylePrimary = css`
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
            cursor: not-allowed;
        }

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
        }
`

const extraStyleSuccess = css`
    cursor: pointer;
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.round};
    height: 35px;
    padding: 0 1.5em;
    font-weight: ${theme.fonts.weights.semiBold};
    &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
    }
    &:active {
        color: ${theme.colors.white};
        background: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
    }
`

const extraStyle = {
    primary: extraStylePrimary,
    sucess: extraStyleSuccess,
}