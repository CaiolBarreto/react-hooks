import { useRef } from "react";

import {
  Container,
  Infos,
} from './style';

export const UseRefExample: React.ElementType = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <Infos ref={backgroundRef}>
        <p>Clique no botão para adicionar uma string no input</p>
        <input type="text" ref={inputRef} />
        <button onClick={() => {
          inputRef.current?.focus()
          console.log(inputRef.current?.value);
        }}>
          Clique aqui
        </button>
      </Infos>
    </Container>
  );
};
