import {Button, styled} from "@mui/material";
import React from "react";

const AppUnderlineTextButtonStyled = styled(Button)`
padding: 0px 10px;
text-decoration: underline;
font-size: 16px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: 28px;
letter-spacing: -0.6px;
color: var(--yellow-yellow, #F8F5E0); 

&:hover {
    background-color: #F8F5E0;
    color: var(--black-black, #000000);
    }
`;


const AppUnderlineTextButton: React.FC<any> = ({...props}) => {
    return (
        <AppUnderlineTextButtonStyled {...props}>
            {props.title}

        </AppUnderlineTextButtonStyled>
    );
};

export default AppUnderlineTextButton;