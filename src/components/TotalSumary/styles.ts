import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex
  flex-col
  gap-[53px]
  bg-primary
  text-white
  px-10
  pt-14
  pb-10
  rounded-t-2xl
  sm:m-4
  sm:rounded-2xl
  sm:gap-10
  min-[900px]:gap-[53px]
  lg:m-8
`;

export const BoxTotal = tw.div`
  flex
  justify-between
  items-center
  sm:flex-col
  sm:justify-center
  sm:text-center
  sm:gap-3
  min-[900px]:flex-row
  min-[900px]:justify-between
  min-[900px]:text-start
`;

const valueProperties = tw.p`
  font-bold
  text-3xl
  md:text-5xl
`;

export const TotalAmount = tw(valueProperties)`
  text-white
`;

export const TotalValue = tw(valueProperties)`
  text-terciary
`;

export const BoxTitle = tw.div`
  font-bold
`;

export const Title = tw.h4`
  text-white
  text-sm
  lg:text-xl
`;

export const SubTitle = tw.p`
  text-[#FFECDB]
  text-xs
`;

export const BoxButton = tw.div`
  h-full
  flex
  items-end
`;

export const ButtonReset = tw.button`
  bg-secundary
  h-12
  w-full
  rounded-md
  uppercase
  font-bold
  text-base
  md:text-xl
`;