import { createContext } from "react";

export default createContext({
    isModeAdmin: false,
    setisModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    isAddSelected: false,
    setIsAddSelected: () => {},
    
    isEditSelected: false,
    setIsEditSelected: () => {},

    
})