import React from "react";
import Input from "../layout/ui/Input";
import Validation from "../layout/validation/Validation";

import "./Compras.css";

function Compras() {
  

  return (
    <div className="main-content">
      <h1 className="title">Tela de Pagamento</h1>
      <h3 className="subtitle">Só aceitamos cartão de crédito!</h3>
      <form className="formulario">
        <Input type="number" label="Número do cartão:" />

        <Input type="text" label="Nome Impresso no cartão:" />

        <Input type="text" label="Validade:" />

        <Input type="number" label="CVV:" />

        <Input type="text" label="CEP + Informações endereço:" />

        <Input type="text" label="Cidade:" />

        <Input type="text" label="Bairro:" />

        <Input type="text" label="Complemento:" />

        <Validation path="/finalizar-compra" msg="Finalizar compra"/>
      </form>
    </div>
  );
}

export default Compras;
