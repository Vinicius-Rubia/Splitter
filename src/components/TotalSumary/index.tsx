import React from "react";

export const TotalSumary: React.FC = () => {
  return (
    <div className="flex flex-col gap-[53px] bg-primary text-white px-10 pt-14 pb-10 rounded-t-2xl sm:m-4 sm:rounded-2xl sm:gap-10 min-[900px]:gap-[53px] lg:m-8">
      <div className="flex justify-between items-center sm:flex-col sm:justify-center sm:text-center sm:gap-3 min-[900px]:flex-row min-[900px]:justify-between min-[900px]:text-start">
        <div className="font-bold">
          <p className="text-white text-sm lg:text-xl">Valor médio</p>
          <p className="text-[#FFECDB] text-xs">/ pessoa</p>
        </div>
        <p className="text-white text-3xl md:text-5xl font-bold">$4.27</p>
      </div>

      <div className="flex justify-between items-center sm:flex-col sm:justify-center sm:text-center sm:gap-3 min-[900px]:flex-row min-[900px]:justify-between min-[900px]:text-start">
        <div className="font-bold">
          <p className="text-white text-sm lg:text-xl">Valor total</p>
          <p className="text-[#FFECDB] text-xs">/ pessoa</p>
        </div>
        <p className="text-terciary text-3xl md:text-5xl font-bold">$132.79</p>
      </div>

      <div className="h-full flex items-end">
        <button className="bg-secundary h-12 w-full uppercase font-bold text-base md:text-xl rounded-md">Limpar</button>
      </div>
    </div>
  );
};
