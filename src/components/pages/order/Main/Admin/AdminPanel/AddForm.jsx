import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

const EMPTY_PRODUCT = {
    id: "",
    title: "Nouveau produit",
    imageSource: "",
    price: 14,
}

export default function AddForm() {
    // state
    const {handleAdd} = useContext(OrderContext)

    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    

    // comportements
    const handleSubmit = (event) => {
        event.preventDefault()
        
        const newProductToAdd = {
            ...newProduct,
            id: new Date().getTime(),
        }
        handleAdd(newProductToAdd)
    }
    
    const handleChange = (event) => {
        const newValue = event.target.value
        const name = event.target.name
        setNewProduct({...newProduct, [name]: newValue })
    }

    // affichage
    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">Image preview</div>
            <div className="input-fields">
                <input  name='title'
                    value={newProduct.title} 
                    type="text"
                    placeholder="Nom" 
                    onChange={handleChange}
                />
                <input  name='imageSource'
                    value={newProduct.imageSource} 
                    type="text"
                    placeholder="Image URL" 
                    onChange={handleChange}
                />
                <input  name='price'
                    value={newProduct.price ? newProduct.price : ""} 
                    type="text"
                    placeholder="Prix" 
                    onChange={handleChange}
                />
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