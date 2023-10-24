import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import HintMessage from "./HintMessage";

export default function EditForm() {
    const { productSelected } = useContext(OrderContext)
    return (
            <div>
                <HintMessage />
                <span>{productSelected && productSelected.title}</span>
            </div>
        )
    }
