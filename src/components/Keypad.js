// Code Keypad Component Here
import React from "react";

function Keypad(){

    function showText() {
        console.log("Entering password...")
    }

return (
    <form>
        <label htmlFor="keypad">Keypad</label>
        <input type="password" onChange={showText} placeholder="Enter Passcode" />
        <input type="submit" />
    </form>
) 
}

export default Keypad