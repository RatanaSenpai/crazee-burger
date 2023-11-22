import { createContext } from "react";

export default createContext({
    isModeAdmin: false,
    setisModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},

    menu: [],
    handleAdd: () => {},
    handleDelete: () => {}, 
    handleEdit: () => {},
    resetMenu: () => {}, 

    newProduct: {},
    setNewProduct: () => {},

    productSelected: {},
    setProductSelected: () => {},

    titleEditRef: {},

    basket: [],
    handleAddToBasket: () => {},
})