import React from "react";
import Input from "../layout/ui/Input";

import "./Compras.css";

function Compras() {
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

    window.open("/finalizar-compra", "_self");
  }

  return (
    <div className="main-content">
      <h1 className="title">Tela de Pagamento</h1>
      <h3 className="subtitle">Só aceitamos cartão de crédito!</h3>
      <form className="formulario">
        <Input type="text" label="Número do cartão:" />

        <Input type="text" label="Nome Impresso no cartão:" />

        <Input type="text" label="Validade:" />

        <Input type="text" label="CVV:" />

        <Input type="text" label="CEP + Informações endereço:" />

        <Input type="text" label="Cidade:" />

        <Input type="text" label="Bairro:" />

        <Input type="text" label="Complemento:" />

        <button type="button" className="btn" id="btn-compras" onClick={() => validarForm()}>Concluir pedidos</button>
        <h3 id="mensagem" className="campo-cheio">Preencha todos os campos!</h3>
      </form>
    </div>
  );
}

export default Compras;
