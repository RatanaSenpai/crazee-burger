import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import AddForm from "./AdminPanel/AddForm"
import EditForm from "./AdminPanel/EditForm"
import HintMessage from "./AdminPanel/HintMessage"
import Form from "./AdminPanel/Form"
import { EMPTY_PRODUCT } from "../../../../../enums/product"
import Button from "../../../../reusable-ui/Button"
import { FiSettings } from "react-icons/fi"

export const getTabsConfig = (hasAlreadyBeenClicked) =>  [
    { 
        index:"add",
        label:"Ajouter un produit",
        Icon: <AiOutlinePlus />,
        Content: <AddForm />,            
    },
    { 
        index:"edit",
        label:"Modifier un produit",
        Icon: <MdModeEditOutline />,  
        Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />                     
    },
    {
        index: "manger",
        label: "Autre onglet",
        Icon: <FiSettings />,
        Content: <UnComposant />,
    },
]

export const getTabSelected = (tabs, currentTabSelected) => {
        return tabs.find((tab) => tab.index === currentTabSelected)
    }

    export function UnComposant() {
        return (
            <Form
                product={{
                    id: "1",
                    imageSource: "/images/burger1.png",
                    title: "Burger 1",
                    price: 5.297,
                    quantity: 0,
                    isAvailable: true,
                    isAdvertised: false,
                }}
            >
                <div style={{ width: "50%" }}>
                    <Button version="normal" label={"Bonjour"} />
                </div>
            </Form>
        )
    }