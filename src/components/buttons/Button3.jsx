import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="button">
        <button name="checkbox" type="button" />
        <span />
        <span />
        <span />
        <span />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    --stone-50: #fafaf9;
    --stone-800: #292524;
    --yellow-300: #fde047;
    --yellow-400: #facc15;
    --yellow-500: #eab308;
    --black-25: rgba(0, 0, 0, 0.25);

    position: relative;
    display: block;
    width: 4rem;
    height: 4rem;
    cursor: pointer;

    & > button {
      cursor: pointer;
      display: inline-block;
      height: 100%;
      width: 100%;
      appearance: none;
      border: 2px solid var(--stone-800);
      border-radius: 0.25rem;
      background-color: var(--yellow-400);
      outline: 2px solid transparent;
      outline-offset: 2px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: var(--yellow-300);
      }

      &:checked {
        background-color: var(--stone-800);
        border-color: var(--stone-800);

        &:hover {
          background-color: #44403c;
        }
      }

      &:active {
        outline-color: var(--stone-800);
      }

      &:focus-visible {
        outline-color: var(--stone-800);
        outline-style: dashed;
      }
    }

    & > span:nth-child(2) {
      position: absolute;
      inset: 3px;
      pointer-events: none;
      background-color: var(--yellow-400);
      border-bottom: 2px solid var(--black-25);
      transition: transform 75ms;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: radial-gradient(
            rgb(255 255 255 / 80%) 20%,
            transparent 20%
          ),
          radial-gradient(rgb(255 255 255 / 100%) 20%, transparent 20%);
        background-position:
          0 0,
          4px 4px;
        background-size: 8px 8px;
        mix-blend-mode: hard-light;
        opacity: 0.5;
        animation: dots 0.5s infinite linear;
      }
    }

    & > span:nth-child(3) {
      position: absolute;
      pointer-events: none;
      inset: 0;

      &::before {
        content: "";
        width: 0.375rem;
        height: 0.375rem;
        position: absolute;
        top: 0.25rem;
        left: 0.25rem;
        background-color: var(--stone-800);
        border-radius: 0.125rem;
        box-shadow:
          3.125em 0 var(--stone-800),
          0 3.125em var(--stone-800),
          3.125em 3.125em var(--stone-800);
      }
    }

    & > span:nth-child(4) {
      position: absolute;
      pointer-events: none;
      inset: 0;
      filter: drop-shadow(0.25em 0.25em 0 rgba(0, 0, 0, 0.2));
      transition: all 75ms;

      &::after {
        content: "";
        width: 0.25rem;
        height: 0.25rem;
        position: absolute;
        top: 0.875rem;
        left: 1rem;
        border-radius: 0.0625px;
        background-color: var(--stone-800);
        box-shadow:
          0.75em 2em var(--stone-800),
          1em 2em var(--stone-800),
          0.75em 1.75em var(--stone-800),
          1em 1.75em var(--stone-800),
          0.75em 1.25em var(--stone-800),
          1em 1.25em var(--stone-800),
          0.75em 1em var(--stone-800),
          1em 1em var(--stone-800),
          1em 0.75em var(--stone-800),
          1.5em 0.75em var(--stone-800),
          1.25em 0.75em var(--stone-800),
          1.25em -0.25em var(--stone-800),
          1.5em 0em var(--stone-800),
          1.25em 0.5em var(--stone-800),
          1.5em 0.5em var(--stone-800),
          1.25em 0.25em var(--stone-800),
          1.5em 0.25em var(--stone-800),
          1.25em 0 var(--stone-800),
          1em -0.25em var(--stone-800),
          0.75em -0.25em var(--stone-800),
          0.5em -0.25em var(--stone-800),
          0.25em -0.25em var(--stone-800),
          0.25em 0 var(--stone-800),
          0 0.25em var(--stone-800),
          0 0.5em var(--stone-800),
          0.25em 0.25em var(--stone-800),
          0.25em 0.5em var(--stone-800);
      }
    }

    & > span:nth-child(5) {
      position: absolute;
      background-color: var(--yellow-400);
      border: 2px solid var(--stone-800);
      border-radius: 0.75rem;
      pointer-events: none;
      z-index: -1;
      inset: 0.5rem 1.5rem;
      box-shadow:
        7px 0 0 0 var(--stone-800),
        inset 0 2px 0 0 var(--yellow-300),
        inset 0 -2px 0 0 var(--yellow-500);
      transition: all 0ms cubic-bezier(0, 0.5, 0.4, 1);
    }

    & button:active ~ span:nth-child(5) {
      transform: translateY(-200%);
      transition-duration: 200ms;
      opacity: 0;
    }

    & button:hover ~ span:nth-child(4) {
      filter: drop-shadow(0.125em 0.125em 0 rgba(0, 0, 0, 0.2));
    }
  }

  @keyframes dots {
    0% {
      background-position:
        0 0,
        4px 4px;
    }
    100% {
      background-position:
        8px 0,
        12px 4px;
    }
  }

  @media (prefers-color-scheme: dark) {
    .button {
      & button:active,
      & button:focus-visible {
        outline-color: var(--yellow-400);
      }
    }
  }`;

export default Button;
