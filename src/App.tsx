import { GlobalStyle } from './globalStyle';
import { CountProvider } from './context/Count';

import {
  UseStateExample,
  UseEffectExample,
  UseRefExample,
  UseCallbackExample,
} from './components';

import { Counter, Mirror } from './components/useContext';

export const App: React.FC = () => (
  <CountProvider>
    <GlobalStyle />
    <Counter />
    <Mirror />
  </CountProvider>
);
