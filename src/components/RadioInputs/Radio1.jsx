import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="radio-input">
        <label className="label">
          <input type="radio" id="value-1" name="value-radio" defaultValue="value-1" />
          <span className="text">Play</span>
        </label>
        <label className="label">
          <input type="radio" id="value-1" name="value-radio" defaultValue="value-1" />
          <span className="text">Stop</span>
        </label>
        <label className="label">
          <input type="radio" id="value-1" name="value-radio" defaultValue="value-1" />
          <span className="text">Reset</span>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .radio-input {
    display: flex;
    align-items: center;
    gap: 2px;
    background-color: black;
    padding: 4px;
    border-radius: 10px;
    z-index: -1;
  }

  .radio-input input {
    display: none;
  }

  .radio-input .label {
    width: 90px;
    height: 60px;
    background: linear-gradient(to bottom, #333333, rgb(36, 35, 35));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    transition: all 0.1s linear;
    border-top: 1px solid #4e4d4d;
    background-color: #333333;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 17px 5px 1px rgba(0, 0, 0, 0.2);
  }

  .label:has(input[type="radio"]:checked) {
    box-shadow: 0px 17px 5px 1px rgba(0, 0, 0, 0);
    background: linear-gradient(to bottom, #1d1d1d, #1d1d1d);
    border-top: none;
  }

  .label:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .label:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .label::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 103%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(
      to bottom,
      transparent 10%,
      transparent,
      transparent 90%
    );
    transition: all 0.1s linear;
    z-index: -1;
  }

  .label:has(input[type="radio"]:checked)::before {
    background: linear-gradient(
      to bottom,
      transparent 10%,
      #cae2fd63,
      transparent 90%
    );
  }

  .label .text {
    color: white;
    font-size: 15px;
    line-height: 12px;
    padding: 0px;
    font-weight: 800;
    text-transform: uppercase;
    transition: all 0.1s linear;
    text-shadow:
      -1px -1px 1px rgb(224, 224, 224, 0.1),
      0px 2px 3px rgb(0, 0, 0, 0.3);
  }

  .label input[type="radio"]:checked + .text {
    color: rgb(202, 226, 253);
    text-shadow: 0px 0px 12px #cae2fd;
  }`;

export default Radio;
