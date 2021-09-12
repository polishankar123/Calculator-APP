import React from "react";

const Footer = () => {
    const appStyle = {
        height: '50px',
        display: 'flex',
        backgroundColor: '#008eff',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: '570px'
        };
    return(
        <div>
            <p style={appStyle}>Calculator poli@2021</p>
        </div>
    )
}

export default Footer;