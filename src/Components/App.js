import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import AppProvider, { AppContext } from "./AppProvider";
import { State } from "./State";

const StyledApp = styled.div`

`;

function App() {
    return(
        <AppProvider>
            <AppContext.Consumer>
                {({ amit, setAmit }) => (
                    <StyledApp>
                        Hello { amit }
                        <State />
                    </StyledApp>
                )}
            </AppContext.Consumer>
        </AppProvider>
    )
}

if(document.getElementById('react_root')){
    ReactDOM.render(<App />,document.getElementById('react_root'));
}