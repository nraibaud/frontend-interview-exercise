import styled from 'styled-components';
import { neutrals, spacings, fonts } from '../theme';

// TODO: This component needs some more styles
export const StyledRanking = styled.ol`
  max-width: 613px;
  margin: 0 auto;
  padding: 0;
  background-color: ${neutrals.lightest};
  box-shadow: 0 1px 8px 0 rgba(50,103,132,0.13);

  > li {
    counter-increment: item;
    display: flex;
    flex-direction: row;
    padding: 18px 32px;
    align-items: center;
    font-size: 13px;
    font-family:  ${fonts.bold};
    color: ${neutrals.darkest};

    ::before {
      content: counter(item);
      margin-right: ${spacings.m}px;
      font-family:  ${fonts.semibold};
    }

    :nth-child(1)::after,
    :nth-child(2)::after,
    :nth-child(3)::after {
      font-size: 16px;
      margin-left: ${spacings.s}px;
    }

    :nth-child(1)::after {
      content: '🥇';
    }

    :nth-child(2)::after {
      content: '🥈';
    }

    :nth-child(3)::after {
      content: '🥉';
    }
  }
  
  > li:nth-child(odd) {
    background: ${neutrals.lighter};
  }
`;

export const StyledPoints = styled.span`
  margin-left: auto;
`;

export const StyledImg = styled.div`
  margin-right: ${spacings.m + spacings.s}px;
`;


export const StyledContainer = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const StyledHeader = styled.header`
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  background-color: rgba(245, 247, 250, 0.95);
  display: flex;
  padding: ${spacings.m}px;
  justify-content: space-between;
  font-size: 19px;
  line-height: 30px;
  margin-left: ${spacings.s}px;
  color: ${neutrals.darkest};

  > h1 {
    font-weight: 500;
    display: flex;
    margin-right: ${spacings.m}px;
  }
`;

export const StyledContent = styled.main`
  padding: 16px;
  background-color: rgb(245, 247 ,250);
  padding-top: 106px;
`;
