import { useState } from "react";
import { styled } from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"

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
    background: purple;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    justify-items: center;
    padding: 50px 50px 150px;
    

    .produit {
        background: red;
        width: 240px;
        height: 330px;
    }
`;

