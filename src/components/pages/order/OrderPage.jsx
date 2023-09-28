import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx"


export default function OrderPage() {

    const { username } = useParams()
    const [isModeAdmin, setisModeAdmin] = useState(true)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isAddSelected, setIsAddSelected] = useState(true)
    const [isEditSelected, setIsEditSelected] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")

    const orderContextValue = {
        isModeAdmin, 
        setisModeAdmin,
        isCollapsed,
        setIsCollapsed,
        isAddSelected,
        setIsAddSelected,
        isEditSelected,
        setIsEditSelected,
        currentTabSelected, 
        setCurrentTabSelected
    }
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

