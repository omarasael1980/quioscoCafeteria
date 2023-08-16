import { useState, useEffect, createContext } from "react";

const QuioscoContext = createContext()
const QuioscoProvider =({children})=>{
    <QuioscoContext.Provider
    value={{}}
    >
        {children}
    </QuioscoContext.Provider>
}
export {QuioscoProvider}
export default QuioscoContext
