import { useCounter } from "../../../context/Count";

export const Counter = () => {
  const { count, setCount } = useCounter();

  return (
    <div>
      <span>
        <b>Count: </b>
        {count}
      </span>

      <br />

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}