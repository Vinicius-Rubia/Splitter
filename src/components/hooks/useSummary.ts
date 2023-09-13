import { useContext } from "react";
import { SummaryContext } from "../../contexts/SummaryContext";

export function useSummary() {
  const context = useContext(SummaryContext);
  if (!context) {
    throw new Error('useMyContext deve ser usado dentro de um MyContextProvider');
  }
  return context;
}