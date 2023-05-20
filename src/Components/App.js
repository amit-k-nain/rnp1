import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledApp = styled.div`

`;

function App() {
    return(
        <StyledApp>
            Hello Amit Nain...
        </StyledApp>
    )
}

if(document.getElementById('react_root')){
    ReactDOM.render(<App />,document.getElementById('react_root'));
}