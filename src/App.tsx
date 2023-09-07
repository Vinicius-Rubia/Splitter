import { Form, TotalSumary } from "./components";
import Logo from "./assets/SPLITTER.svg";

export const App: React.FC = () => {
  return (
    <div className="grid place-items-center min-h-screen bg-conic-gradient">
      <img src={Logo} alt="Logo" className="my-12 sm:m-0" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0 min-[900px]:max-w-[1200px] sm:mx-10 bg-white rounded-[25px] lg:gap-3">
        <Form />
        <TotalSumary />
      </div>
    </div>
  );
};
