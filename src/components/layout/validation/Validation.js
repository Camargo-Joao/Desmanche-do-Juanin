import React from "react";

import "./Validation.css"

function Validation(props) {
    function validarForm() {
        const inputs = document.querySelectorAll(".inputs");
        for (let input of inputs) {
            if (input.value.trim() === "") {
                const msg = document.querySelector("#mensagem")
                msg.classList.remove("campo-cheio")
                msg.classList.add("campo-vazio")
                return;
            }
        }

        window.open(props.path, "_self");
    }

    return (
        <>
            <button type="button" className="btn" id="btn-compras" onClick={() => validarForm()}>{props.msg}</button>
            <h3 id="mensagem" className="campo-cheio">Preencha todos os campos!</h3>
        </>
    )
  }

  export default Validation