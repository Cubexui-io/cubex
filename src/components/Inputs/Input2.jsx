import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <div className="input-wrapper">
        <button className="icon">
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 22L20 20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <input type="text" name="text" className="input" placeholder="search.." />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: relative;
  }

  .input {
    border-style: none;
    height: 50px;
    width: 50px;
    padding: 10px;
    outline: none;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    background-color: #1557c0;
    box-shadow: 0px 0px 3px #1557c0;
    padding-right: 40px;
    color: #fff;
  }

  .input::placeholder,
  .input {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 17px;
  }

  .input::placeholder {
    color: #8f8f8f;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    outline: none;
    border-style: none;
    border-radius: 50%;
    pointer-events: painted;
    background-color: transparent;
    transition: 0.2s linear;
  }

  .icon:focus ~ .input,
  .input:focus {
    box-shadow: none;
    width: 250px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 3px solid #1557c0;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }`;

export default Input;
