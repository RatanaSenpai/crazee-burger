import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { useContext } from "react"
import OrderContext from "../../../../../../context/OrderContext"
import { getTabSelected, tabsConfig } from "../tabsConfig"

export default function AdminPanel() {

    const { currentTabSelected } = useContext(OrderContext)

    const tabs = tabsConfig
    const tabSelected = getTabSelected(tabs, currentTabSelected)

    return (
        <AdminPanelStyled className="panel-admin">
            {tabSelected.Content}
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    padding: 30px 5%;
`