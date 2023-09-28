import styled from "styled-components"
import Tab from "../../../../reusable-ui/Tab"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { theme } from "../../../../../theme"
import OrderContext from "../../../../../context/OrderContext"
import { useContext } from "react"
import { getTabsConfig } from "./getTabsConfig"

export default function AdminTabs() {

    const {
        isCollapsed, 
        setIsCollapsed, 
        currentTabSelected,
        setCurrentTabSelected
    } = useContext(OrderContext)

    const selectTab = (tabSelected) => {
        // ouvre le panel dans tous les cas
        setIsCollapsed(false)
        // réactualise l'onglet séléctionné
        setCurrentTabSelected(tabSelected)
    }

    const tabs = getTabsConfig(currentTabSelected)

    return (
        <AdminTabsStyled>
            <Tab
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={isCollapsed ? "is-active" : ""}
            />
            {tabs.map((tab) => (
                <Tab 
                label={tab.label}
                Icon={tab.Icon} 
                onClick={() => selectTab(tab.index)}
                className={tab.className}
            />
            ))}
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
    display: flex;
    padding: 0 20px;

    .is-active {
        background: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
        color: ${theme.colors.white}
    }

    button {
        margin-left: 1px;
    }
`