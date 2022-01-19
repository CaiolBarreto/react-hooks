import { useCallback, useState } from "react";
import { NumberList } from './list';

import {
  Container,
  Infos,
} from './style';

export const UseCallbackExample: React.ElementType = () => {
  const [count, setCount] = useState<number>(0);
  const [isDark, setIsDark] = useState<boolean>(false);

  const theme = {
    backgroundColor: isDark ? '#333' : '#fff',
    color: isDark ? '#fff' : '#333'
  }

  const getItems = () => {
    return [count, count + 1, count + 2]
  }

  return (
    <Container>
      <Infos style={theme}>
        <p>Digite um número:</p>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))} 
        />
        <button onClick={() => setIsDark(!isDark)}>
          Mudar tema
        </button>
        <NumberList getItems={getItems} />
      </Infos>
    </Container>
  );
};
