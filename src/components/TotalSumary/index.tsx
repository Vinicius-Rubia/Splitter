import React from "react";
import { PriceFormatter } from "../../utils/Formatter";
import { useSummary } from "../hooks/useSummary";
import * as C from "./styles";

export const TotalSumary: React.FC<any> = ({ reset }) => {
  const { totalValue, totalAmount, clearContext } = useSummary();

  const handleClear = () => {
    clearContext;
    reset();
  }

  return (
    <C.Container>
      <C.BoxTotal>
        <C.BoxTitle>
          <C.Title>Valor médio</C.Title>
          <C.SubTitle>/ pessoa</C.SubTitle>
        </C.BoxTitle>
        <C.TotalAmount>${PriceFormatter(totalAmount)}</C.TotalAmount>
      </C.BoxTotal>

      <C.BoxTotal>
        <C.BoxTitle>
          <C.Title>Valor total</C.Title>
          <C.SubTitle>/ pessoa</C.SubTitle>
        </C.BoxTitle>
        <C.TotalValue>${PriceFormatter(totalValue)}</C.TotalValue>
      </C.BoxTotal>

      <C.BoxButton>
        <C.ButtonReset type="reset" onClick={handleClear}>
          Limpar
        </C.ButtonReset>
      </C.BoxButton>
    </C.Container>
  );
};
