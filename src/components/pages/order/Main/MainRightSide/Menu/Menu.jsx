import { useContext } from "react"
import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { formatPrice } from "../../../../../../utils/maths"
import Card from "../../../../../reusable-ui/Card"
import OrderContext from "../../../../../../context/OrderContext"
import EmptyMenuAdmin from "./EmptyMenuAdmin"
import EmptyMenuClient from "./EmptyMenuClient"
import { checkIfProductIsClicked } from "./helper"
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../../../enums/product"
import { isEmpty } from "../../../../../../utils/array"

export default function Menu() {
    const {
        menu,
        isModeAdmin,
        handleDelete,
        resetMenu,
        productSelected,
        setProductSelected,
        handleAddToBasket,
        handleDeleteBasketProduct,
        handleProductSelected,
    } = useContext(OrderContext)
    // state

    // comportements (gestionnaires d'événement ou "event handlers")
    const handleCardDelete = (event, idProductToDelete) => {
        event.stopPropagation()
        handleDelete(idProductToDelete)
        handleDeleteBasketProduct(idProductToDelete)
        idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
    }

    const handleAddButton = (event, idProductToAdd) => {
        event.stopPropagation()
        handleAddToBasket(idProductToAdd)
    }

    // affichage
    if (isEmpty(menu)) {
        if (!isModeAdmin) return <EmptyMenuClient />
        return <EmptyMenuAdmin onReset={resetMenu} />
    }

    return (
        <MenuStyled className="menu">
            {menu.map(({ id, title, imageSource, price }) => {
                return (
                    <Card
                        key={id}
                        title={title}
                        imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                        leftDescription={formatPrice(price)}
                        hasDeleteButton={isModeAdmin}
                        onDelete={(event) => handleCardDelete(event, id)}
                        onClick={isModeAdmin ? () => handleProductSelected(id) : null}
                        isHoverable={isModeAdmin}
                        isSelected={checkIfProductIsClicked(id, productSelected.id)}
                        onAdd={(event) => handleAddButton(event, id)}
                    />
                )
            })}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: ${theme.shadows.strong};
    overflow-y: scroll;
`
