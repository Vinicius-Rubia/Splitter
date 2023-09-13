import tw from "tailwind-styled-components";

export const Container = tw.div`
  grid
  place-items-center
  min-h-screen
  bg-conic-gradient
`;

export const Logo = tw.img`
  my-12
  sm:m-0
`;

export const Content = tw.form`
  bg-white
  rounded-[25px]
  grid
  grid-cols-1
  gap-12
  sm:grid-cols-2
  sm:gap-0
  sm:mx-10
  min-[900px]:max-w-[1200px]
  lg:gap-3
`;

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