import tw from "tailwind-styled-components";

export const Form = tw.div`
  grid
  gap-10
  px-6
  pt-6
  text-sm
  sm:pb-6
  lg:p-8
  lg:text-lg
`;

export const Label = tw.label`
  text-primary
  font-bold
  block
  mb-2
`;

export const BoxOption = tw.div`
  grid
  grid-cols-3
  gap-[14px]
`;

export const DefaultCheckboxButton = tw.button`
  h-12
  grid
  place-items-center
  w-full
  rounded-md
  font-bold
  text-xl
  md:text-2xl
`;