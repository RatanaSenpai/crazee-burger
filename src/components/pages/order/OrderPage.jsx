import { styled } from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx";
import { fakeMenu } from "../../../fakeData/fakeMenu"

export default function OrderPage() {

    const [isModeAdmin, setisModeAdmin] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [menu, setMenu] = useState(fakeMenu.MEDIUM)

    
    
    const handleAdd = (newProduct) => { 
        // 1 . copie du tableau
        const menuCopy = [...menu]
        // 2 . manipulation de la copie du tableau
        const menuUpdated = [newProduct, ...menuCopy]
        // 3 . update du state
        setMenu(menuUpdated)
    }

    const handleDelete = (idOfProductToDelete) => {
        // 1.copie du state
        const menuCopy = [...menu]

        // 2. manip du state
        const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)
        console.log(menuUpdated);

        // 3. update du state
        setMenu(menuUpdated)
    }

    const resetMenu = () => { setMenu(fakeMenu.MEDIUM) }

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

