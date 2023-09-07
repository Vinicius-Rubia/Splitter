import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IForm } from "../../interfaces/Form";
import { Input } from "../../shared";
import { BiErrorCircle } from "react-icons/bi";
import { TbBrandCashapp } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { Radio, RadioGroup } from "@mui/material";

{
  /* 150 x 0.15 -> 22.50 / 3 = 7.50 */
}

interface IDefaultCheckbox {
  className: string;
  value?: string;
}

export const Form: React.FC = () => {
  const [custom, setCustom] = useState<boolean>(false);
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    console.log(data);
  };

  const DefaultCheckbox: React.FC<IDefaultCheckbox> = ({ className, value }) => {
    return (
      <button disabled={custom && true} className={`h-12 grid place-items-center w-full rounded-md ${className} font-bold text-xl md:text-2xl`}>
        {value}
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10 px-6 text-sm pt-6 sm:pb-6 lg:p-8 lg:text-lg">
      <Controller
        name="bill"
        control={control}
        rules={{ required: "Esse campo é obrigatório" }}
        render={({ field: { onChange } }) => (
          <div>
            <label htmlFor="bill" className="text-primary font-bold block mb-2">
              Valor total da conta
            </label>
            <Input
              id="bill"
              type="text"
              placeholder="0"
              error={errors.bill}
              tip={errors.numbersPeople && "Informe o valor da conta"}
              onChange={onChange}
              Icon={errors.bill ? BiErrorCircle : TbBrandCashapp}
              autoFocus
              className="text-base lg:text-2xl"
            />
          </div>
        )}
      />

      <RadioGroup>
        <label htmlFor="custom" className="text-primary font-bold mb-4">
          Escolha uma opção %
        </label>
        <div className="grid grid-cols-3 gap-[14px]">
          <Radio value="1" checked={custom ? false : undefined} icon={<DefaultCheckbox className="bg-primary hover:bg-terciary/[46%] hover:text-primary text-white disabled:bg-primary/20" value="5%" />} checkedIcon={<DefaultCheckbox className="bg-terciary text-primary" value="5%" />} />
          <Radio value="2" checked={custom ? false : undefined} icon={<DefaultCheckbox className="bg-primary hover:bg-terciary/[46%] hover:text-primary text-white disabled:bg-primary/20" value="10%" />} checkedIcon={<DefaultCheckbox className="bg-terciary text-primary" value="10%" />} />
          <Radio value="3" checked={custom ? false : undefined} icon={<DefaultCheckbox className="bg-primary hover:bg-terciary/[46%] hover:text-primary text-white disabled:bg-primary/20" value="15%" />} checkedIcon={<DefaultCheckbox className="bg-terciary text-primary" value="15%" />} />
          <Radio value="4" checked={custom ? false : undefined} icon={<DefaultCheckbox className="bg-primary hover:bg-terciary/[46%] hover:text-primary text-white disabled:bg-primary/20" value="25%" />} checkedIcon={<DefaultCheckbox className="bg-terciary text-primary" value="25%" />} />
          <Radio value="5" checked={custom ? false : undefined} icon={<DefaultCheckbox className="bg-primary hover:bg-terciary/[46%] hover:text-primary text-white disabled:bg-primary/20" value="50%" />} checkedIcon={<DefaultCheckbox className="bg-terciary text-primary" value="50%" />} />
          <Controller
            name="custom"
            control={control}
            render={() => (
              <Input
                id="custom"
                type="text"
                onChange={(e) => e.target.value !== "" ? setCustom(true) : setCustom(false)}
                placeholder="Outro"
                className="placeholder:text-primary text-xl text-center sm:text-base lg:text-xl m-0 px-2 focus:placeholder:text-primary/50 cursor-pointer focus:cursor-text"
                error={undefined}
                tip={undefined}
                Icon={undefined}
              />    
            )}
          />
        </div>
      </RadioGroup>

      <Controller
        name="numbersPeople"
        control={control}
        rules={{ required: "Esse campo é obrigatório" }}
        render={({ field: { onChange } }) => (
          <div>
            <label
              htmlFor="numbersPeople"
              className="text-primary font-bold block mb-2"
            >
              Número de pessoas
            </label>
            <Input
              id="numbersPeople"
              type="text"
              placeholder="0"
              error={errors.numbersPeople}
              tip={errors.numbersPeople && "Informe o número de pessoas"}
              onChange={onChange}
              Icon={errors.numbersPeople ? BiErrorCircle : BsPeopleFill}
              className="text-base lg:text-2xl"
            />
          </div>
        )}
      />
    </form>
  );
};
