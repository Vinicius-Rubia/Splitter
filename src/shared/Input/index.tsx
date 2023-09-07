import React, { InputHTMLAttributes, ElementType, useState } from 'react'
import { twMerge } from 'tailwind-merge';
import { FieldError } from 'react-hook-form';
import { Tooltip } from 'antd';
import { HelperTextError } from '..';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: ElementType | undefined;
  error: FieldError | undefined;
  tip: string | undefined;
};

export const Input: React.FC<InputProps> = ({ Icon, error, tip, ...rest }) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(!isFocus);

  return (
    <>
      <div onFocus={handleFocus} onBlur={handleFocus} className={`relative flex items-center overflow-hidden w-full h-12 rounded-md border-2 hover:border-[#00B6B6] ${isFocus && !error ? "border-[#00B6B6]" : "border-transparent"} ${error ? "border-secundary hover:border-secundary" : "border-transparent"}`}>
        {Icon && (
          <Tooltip title={tip} color={"red"} placement='left'>
            <Icon className={`absolute left-0 ${error ? "text-secundary" : 'text-[#B2BEBF]'} ml-2`} />
          </Tooltip>
        )}
        <input {...rest} className={twMerge("outline-none w-full pr-3 pl-7 h-full text-2xl font-bold text-primary text-end bg-field placeholder:text-primary/[35%]", rest.className)} />
      </div>
      <HelperTextError validation={error} />
    </>
  )
}