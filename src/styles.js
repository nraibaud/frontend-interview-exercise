/* eslint no-unused-expressions: 0 */
/* eslint import/extensions: 0 */

import { injectGlobal } from 'styled-components';
import 'reset-css';
import 'lato-font';
import { neutrals, fonts } from './theme';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  button, input, textarea {
    &:focus {
      outline: none;
    }
  }

  input::placeholder,
  textarea::placeholder {
    color: ${neutrals.dark};
  }

  body {
    font-family:  ${fonts.regular};
    background-color: ${neutrals.lighter};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    image-rendering: -moz-crisp-edges;
    image-rendering:   -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
  }
`;
