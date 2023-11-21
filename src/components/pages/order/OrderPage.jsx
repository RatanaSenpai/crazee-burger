import { styled } from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../Hooks/useMenu.jsx";
import { useBasket } from "../../../Hooks/useBasket.jsx"


export default function OrderPage() {
    // state
    const [isModeAdmin, setisModeAdmin] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("edit")
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
    const titleEditRef = useRef()
    const { menu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu()
    const { basket } = useBasket()



    const orderContextValue = {
        isModeAdmin, 
        setisModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected, 
        setCurrentTabSelected,
        menu,
        handleAdd,
        handleDelete,
        resetMenu,
        newProduct,
        setNewProduct,
        productSelected,
        setProductSelected,
        handleEdit,
        titleEditRef,
        basket,
    }

    //affichage
    return (
        <OrderContext.Provider value={orderContextValue}>
            <OrderPageStyled>
                <div className="container">
                    <Navbar />
                    <Main/>
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
    )
}

const OrderPageStyled = styled.div`
    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        background: red;
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;      
        border-radius: ${theme.borderRadius.extraRound}
    }
`;

