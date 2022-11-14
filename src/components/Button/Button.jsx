import React from "react";
import "./Button.css";
function Button({label, number = null, underline=false}){
    return(
        <button className={`btn-nav ${underline ? 'btn-active px-2 pl-8 pr-8' : ''}`}>
            {number && <span>{number}</span>}
            {label}
        </button >
    )
}

export default Button;