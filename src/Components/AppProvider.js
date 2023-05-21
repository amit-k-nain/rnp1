import React, { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';

export const AppContext = createContext();

export default function(props){
    const [amit, setAmit] = useState('Amit Nain');
    return(
        <AppContext.Provider value={{
            amit, setAmit
        }}>
            { props.children }
        </AppContext.Provider>
    )
}