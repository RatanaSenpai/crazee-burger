import { styled } from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({label, Icon, className }) {
    return (
        <PrimaryButtonsStyled className={className}>
                <span>{label}</span>
                <div className="icon">{Icon && Icon}</div>
        </PrimaryButtonsStyled>
    )
}

const PrimaryButtonsStyled = styled.button`
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
            margin-left: 10px;
        }
`;