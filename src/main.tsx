import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./assets/styles/main.css";
import { MyContextProvider } from "./contexts/SummaryContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
