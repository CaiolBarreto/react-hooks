import { useCounter } from "../../../context/Count";

export const Mirror = () => {
  const { count } = useCounter();

  return (
    <span>
      <b>Mirror: {count}</b>
    </span>
  );
}