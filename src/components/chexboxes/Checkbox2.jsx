import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ strokeColor, onClick }) => {
  return (
    <StyledWrapper strokeColor={strokeColor}>
      <label className="hamburger" onClick={onClick}>
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            className="line line-top-bottom"
          />
          <path d="M7 16 27 16" className="line" />
        </svg>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    /* El tamaño del SVG define el tamaño total */
    height: 3em;
    /* Transición para la transformación del SVG */
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: ${({ strokeColor }) => strokeColor || "red"};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    /* Transiciones para stroke-dasharray y stroke-dashoffset */
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

export default Checkbox;
