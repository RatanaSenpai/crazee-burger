import { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../../theme"
import { formatPrice } from "../../../../../utils/maths"
import Card from "../../../../reusable-ui/Card"
import OrderContext from "../../../../../context/OrderContext"
import EmptyMenuAdmin from "./EmptyMenuAdmin"
import EmptyMenuClient from "./EmptyMenuClient"

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {
    // state
    const {menu, isModeAdmin, handleDelete, resetMenu, setProductSelected}= useContext(OrderContext)
    // comportements
    
    // affichage
    if (menu.length === 0) {
        if (!isModeAdmin) return <EmptyMenuClient />
        return <EmptyMenuAdmin onReset={resetMenu}/>
    }
    
    const handleClick = (idProductClicked) => {
            const productSelected = menu.find((product) => product.id === idProductClicked)
            setProductSelected(productSelected)
        }

    return (
        <MenuStyled className="menu">            
        {menu.map(({ id, title, imageSource, price }) => {
            return (
            <Card
                key={id}
                title={title}
                imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
                leftDescription={formatPrice(price)}
                hasDeleteButton={isModeAdmin}
                onDelete={() => handleDelete(id)}
                onClick={() => handleClick(id)}
            />
            )
        })}
        </MenuStyled>
    )
}

    const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: ${theme.shadows.strong};
    overflow-y: scroll;
`
