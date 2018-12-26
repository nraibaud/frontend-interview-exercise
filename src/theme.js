import { css } from 'styled-components';

/**
 * Main colors
 */
export const colors = {
  primary: '#449aff',
  secondary: '#a973f4',
  third: '#f93987',
  success: '#7ABC31',
  warning: '#f6a623',
  danger: '#ed4141',
};

/**
 * Fonts and bg colors
 */
export const neutrals = {
  lightest: '#FFFFFF',
  lighter: '#F5F7FA',
  dark: '#999999',
  darkest: '#2C2D30',
  borderLighter: '#ecf0f6',
  borderLight: '#e1e1e1',
  buttonDefaultColor: '#575757',
};

/**
 * Incremental spacings
 */
export const spacings = {
  xs: 4,
  s: 8,
  m: 16,
  l: 32,
  xl: 64,
};

/**
 * Reset button styles
 */
export const resetButton = () => css`
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
`;


/**
 * Rotated square
 */
export const diamond = (size = 8) => css`
  width: ${size}px;
  height: ${size}px;
  transform: rotate(45deg);
`;

/**
 * Fonts
 * */
export const fonts = {
    regular: '"Lato", Arial, sans-serif;',
    semibold: '"Lato-SemiBold", Arial, sans-serif;',
    bold: '"Lato-Bold", Arial, sans-serif;',
};

