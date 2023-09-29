import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"

export const getTabsConfig = () => [
    // { 
    //     index:"chevronUpDown",
    //     label:"",
    //     Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
    //     onClick: () => setIsCollapsed(!isCollapsed),
    //     className: isCollapsed ? "is-active" : "",
    // },
    { 
        index:"add",
        label:"Ajouter un produit",
        Icon: <AiOutlinePlus />,            
    },
    { 
        index:"edit",
        label:"Modifier un produit",
        Icon: <MdModeEditOutline />,            
    }
]

export const getTabSelected = (tabs, currentTabSelected) => tabs.find((tab) => tab.index === currentTabSelected)