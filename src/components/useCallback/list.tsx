import { useEffect, useState } from "react";

interface ArrayProps {
  getItems: () => number[],
}

export const NumberList: React.ElementType = ({ getItems }: ArrayProps) => {
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    setNumbers(getItems());
    console.log('Foi atualizado');
  }, [getItems])

  return (
    <>
      {numbers.map(number => <div key={number}>{number}</div>)}
    </>
  );
};
