import { useContext } from "react"
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
    
    // comportements (gestionnaires d'événement ou "event handlers")
    const handleClick = (idProductClicked) => {
        const productClickOn = menu.find((product) => product.id === idProductClicked)
        setProductSelected(productClickOn)
    }
    
    // affichage
    if (menu.length === 0) {
        if (!isModeAdmin) return <EmptyMenuClient />
        return <EmptyMenuAdmin onReset={resetMenu}/>
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
                isHoverable={isModeAdmin}
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
