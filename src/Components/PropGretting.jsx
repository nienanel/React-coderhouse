import React from "react";

const Greeting = () => {
    const name = "profe de coder!"
    return (
        <div className="greetings" style={{marginTop: "20px", color: "white", padding:"20px", border: "1px solid white", backgroundColor: "black"}}>
            <h1>hola, {name}!!</h1>
            <p>Bienvenidos a K2 ski</p>
        </div>
    );
}

export default Greeting;