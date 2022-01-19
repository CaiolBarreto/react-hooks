import { createContext, useContext, useState } from "react";

const DefaultValues = {
  count: 0,
  setCount: (arg: number) => {},
}

const CountContext = createContext(DefaultValues)

export const CountProvider: React.FunctionComponent = ({ children }) => {
  const [count, setCount] = useState(DefaultValues.count);

  return (
    <CountContext.Provider
      value={{
        count,
        setCount
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export const useCounter = () => {
  const { count, setCount } = useContext(CountContext);
  return { count, setCount };
}
