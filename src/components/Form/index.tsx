import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IForm } from "../../interfaces/Form";
import { HelperTextError, Input } from "../../shared";
import { BiErrorCircle } from "react-icons/bi";
import { TbBrandCashapp } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { Radio, RadioGroup } from "@mui/material";
import * as C from "./styles";

interface IDefaultCheckbox {
  className: string;
  value?: string;
}

export const Form: React.FC = () => {
  const [custom] = useState<boolean>(false);
  
  const {
    control,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      bill: undefined,
      numbersPeople: undefined,
      percent: "5",
    },
    mode: "onChange",
  });

  

  const DefaultCheckbox: React.FC<IDefaultCheckbox> = ({ className, value }) => {
    return (
      <C.DefaultCheckboxButton disabled={custom} className={className}>
        {value}
      </C.DefaultCheckboxButton>
    )
  }

  return (
    <C.Form>
      <Controller
        name="bill"
        control={control}
        rules={{ required: "Esse campo é obrigatório" }}
        render={({ field: { onChange } }) => (
          <div>
            <C.Label htmlFor="bill">
              Valor total da conta
            </C.Label>
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

      <Controller
        name="percent"
        control={control}
        rules={{ required: "Escolha uma das opções" }}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            value={value}
            onChange={(value) => onChange(value)}
          >
            <C.Label htmlFor="percent">Escolha uma opção %</C.Label>
            <C.BoxOption className="mb-2">
              <Radio value={5} checked={custom ? false : undefined} icon={<DefaultCheckbox className="bg-primary hover:bg-terciary/[46%] hover:text-primary text-white disabled:bg-primary/20" value="5%" />} checkedIcon={<DefaultCheckbox className="bg-terciary text-primary" value="5%" />} />
              <Radio value={10} checked={custom ? false : undefined} icon={<DefaultCheckbox className="bg-primary hover:bg-terciary/[46%] hover:text-primary text-white disabled:bg-primary/20" value="10%" />} checkedIcon={<DefaultCheckbox className="bg-terciary text-primary" value="10%" />} />
              <Radio value={15} checked={custom ? false : undefined} icon={<DefaultCheckbox className="bg-primary hover:bg-terciary/[46%] hover:text-primary text-white disabled:bg-primary/20" value="15%" />} checkedIcon={<DefaultCheckbox className="bg-terciary text-primary" value="15%" />} />
              <Radio value={25} checked={custom ? false : undefined} icon={<DefaultCheckbox className="bg-primary hover:bg-terciary/[46%] hover:text-primary text-white disabled:bg-primary/20" value="25%" />} checkedIcon={<DefaultCheckbox className="bg-terciary text-primary" value="25%" />} />
              <Radio value={50} checked={custom ? false : undefined} icon={<DefaultCheckbox className="bg-primary hover:bg-terciary/[46%] hover:text-primary text-white disabled:bg-primary/20" value="50%" />} checkedIcon={<DefaultCheckbox className="bg-terciary text-primary" value="50%" />} />
              <Input
                id="percent"
                type="text"
                onChange={onChange}
                placeholder="Outro"
                className="placeholder:text-primary text-xl text-center sm:text-base lg:text-xl m-0 px-2 focus:placeholder:text-primary/50 cursor-pointer focus:cursor-text"
                error={undefined}
                tip={undefined}
                Icon={undefined}
              />
            </C.BoxOption>
            <HelperTextError validation={errors.percent}  />
          </RadioGroup>
          )}
        />

      <Controller
        name="numbersPeople"
        control={control}
        rules={{ required: "Esse campo é obrigatório" }}
        render={({ field: { onChange } }) => (
          <div>
            <C.Label htmlFor="numbersPeople">
              Número de pessoas
            </C.Label>
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
    </C.Form>
  );
};
