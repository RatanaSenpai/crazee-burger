import { styled } from "styled-components";
import { theme } from "../../../../theme";


export default function Product({ imageSource, title, price }) {
    return (
        <ProductStyled className="produit">
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="info-text">
                <div className="title">{title}</div>
                <div className="description">
                    <div className="price">{price}</div>
                    <button className="add-button">Ajouter</button>
                </div>
            </div>
        </ProductStyled>
    )
}

const ProductStyled = styled.div`
    background: red;
    width: 200px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;

    .image {
        border: 2px solid yellow;
        width: 100%;
        height: auto;
        margin-top: 30px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: contain
        }
    }

    .info-text {
        border: 2px solid blue;

        .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-weight: ${theme.fonts.weights.medium};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: ${theme.fonts.weights.medium};
            color: ${theme.colors.primary};
        }

        .right-description {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: ${theme.fonts.size.P1};

            .primary-button {
            font-size: ${theme.fonts.size.XS};
            cursor: pointer;
            padding: 12px;
            }
        }
    }
    }
    
`;