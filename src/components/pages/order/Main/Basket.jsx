import styled from "styled-components"

export default function Basket() {
    return (
        <BasketStyled>
            <div className="head">Head</div>
            <div className="body">Body</div>
            <div className="footer">Footer</div>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: pink;
    display: flex;
    flex-direction: column;

    .head {
        background: red;
    }
    .body {
        background: blue;
    }
    .footer {
        background: green;
    }
`