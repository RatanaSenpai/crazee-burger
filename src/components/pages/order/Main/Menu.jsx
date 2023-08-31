import { useState } from "react";
import { styled } from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"
import { theme } from "../../../../theme";

export default function Menu() {
    const [menu, setmenu] = useState(fakeMenu2)

    return (
        <MenuStyled className="menu">
            {menu.map((produit) => {
                return <div className="produit">{produit.title}</div>
            })}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    justify-items: center;
    padding: 50px 50px 150px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    

    .produit {
        background: red;
        width: 240px;
        height: 330px;
    }
`;

