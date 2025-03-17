import React from "react";
import Input from "../layout/ui/Input";
import Button from "../layout/ui/Button";

import "./Compras.css";

function validarform() {
  const input = document.getElementsByClassName("input-content").value

  if(input != null) {
    window.open()
  }
}

function Compras() {
  return (
    <div className="main-content">
      <h1 className="title">Tela de Pagamento</h1>
      <h3 className="subtitle">Só aceitamos cartão de crédito!</h3>
      <form className="formulario">
        <Input type="text" label="Número do cartão:" togg="togg-yes" />

        <Input type="text" label="Nome Impresso no cartão:" togg="togg-yes" />

        <Input type="text" label="Validade:" />

        <Input type="text" label="CVV:" />
       
        <Input type="text" label="CEP + Informações endereço:" />

        <Input type="text" label="Cidade:"/>

        <Input type="text" label="Bairro:" />
        
        <Input type="text" label="Complemento:" />

        <Button click={validarform()}>Concluir pedidos</Button>
      </form>
    </div>
  );
}

export default Compras;
