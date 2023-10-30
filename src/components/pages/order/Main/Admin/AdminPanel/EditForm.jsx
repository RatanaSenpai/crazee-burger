import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import HintMessage from "./HintMessage";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function EditForm() {
    const { productSelected } = useContext(OrderContext)
    const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT)
    
    const inputTexts = getInputTextsConfig(productSelected)

    const handleChange = (event) => { 
        const {name, value} = event.target
        setProductBeingEdited({
            ...productBeingEdited,
            [name]: value,
        })
    }
    return (
        <EditFormStyled >
        <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title}/>
        <div className="input-fields">
            {inputTexts.map((input) => (
                <TextInput {...input} key={input.id} onChange={handleChange} version="minimalist" />
            ))}
            
        </div>
        <div className="submit">
        </div>
    </EditFormStyled>
        )
}

const EditFormStyled = styled.form`
    /* border: 2px solid black; */
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;
    grid-column-gap: 20px;
    grid-row-gap: 8px;

    .input-fields {
        grid-area: 1 / 2 / -2 / 3;
        display: grid;
        grid-row-gap: 8px;
    }

    .submit {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;
    
        .submit-button {
            /* width: 50%; */
            height: 100%;
        }
    
        .submit-message {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 5px;

            .icon {
                color: ${theme.colors.success};
                margin-left: 10px;
                width: 1em;
                height: 1em;
                border: 1px solid ${theme.colors.success};
                border-radius: 50%;
                vertical-align: middle;
            }
            .message {
                margin-left: 5px;
                font-size: ${theme.fonts.size.SM};
                color: ${theme.colors.success};
            }
        }
    }
`