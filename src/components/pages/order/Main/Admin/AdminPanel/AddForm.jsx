import styled from "styled-components";

export default function AddForm() {
    return (
        <AddFormStyled>
            <div className="image-preview">Image preview</div>
            <div className="input-fields">Input fields
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Image URL" />
                <input type="text" placeholder="Prix" />
            </div>
            <button className="submit-button">Submit button</button>
        </AddFormStyled>
    )
}

const AddFormStyled = styled.form`
    border: 2px solid black;
    height: 100%;
    height: 70%;

    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);

    .image-preview {
        background: red;
        grid-area: 1 / 1 / 4 / 2;
    }
    .input-fields {
        background: blue;
        grid-area: 1 / 2 / -2 / 3;

        display: grid;
    }
    .submit-button {
        background: green;
        grid-area: 4 / -2 / -1 / -1;

        width: 50%;
    }

    
`;