import React, { createContext, useState } from "react";

interface TransactionContextType {
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
  totalValue: number;
  setTotalValue: React.Dispatch<React.SetStateAction<number>>;
  clearContext: () => void;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const SummaryContext = createContext({} as TransactionContextType);

export function MyContextProvider({ children }: TransactionsProviderProps) {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);

  const clearContext = () => {
    setTotalAmount(0);
    setTotalValue(0);
  };

  return (
    <SummaryContext.Provider
      value={{
        totalAmount,
        setTotalAmount,
        totalValue,
        setTotalValue,
        clearContext,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
}
