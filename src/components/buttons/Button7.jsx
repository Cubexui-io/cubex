import styled from "styled-components";

const Button = ({
  bgColor = "rgba(180, 83, 107, 0.11)",
  hoverColor = "rgb(211, 21, 21)",
  activeColor = "rgb(130, 0, 0)",
  textColor = "rgb(187, 229, 236)",
  hoverText = "Close",
  hoverTextColor = "white",
  onClick,
}) => {
  return (
    <StyledWrapper bgColor={bgColor} hoverColor={hoverColor} activeColor={activeColor} hoverTextColor={hoverTextColor}>
      <button className="button" onClick={onClick}>
        <span className="X" />
        <span className="Y" />
        <div className="close">{hoverText}</div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: relative;
    width: 4em;
    height: 4em;
    border: none;
    background: ${({ bgColor }) => bgColor};
    border-radius: 5px;
    transition: background 0.5s;
  }

  .X,
  .Y {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2em;
    height: 1.5px;
    background-color: #fff;
    transform-origin: center;
  }

  .X {
    transform: translateX(-50%) rotate(45deg);
  }

  .Y {
    transform: translateX(-50%) rotate(-45deg);
  }

  .close {
    position: absolute;
    display: flex;
    padding: 0.8rem 1.5rem;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    top: -70%;
    left: 50%;
    width: 3em;
    height: 1.7em;
    font-size: 12px;
    background-color: rgb(19, 22, 24);
    color: ${({ hoverTextColor }) => hoverTextColor};
    border-radius: 3px;
    pointer-events: none;
    opacity: 0;
  }

  .button:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  .button:active {
    background-color: ${({ activeColor }) => activeColor};
  }

  .button:hover > .close {
    animation: close 0.2s forwards 0.25s;
  }

  @keyframes close {
    100% {
      opacity: 1;
    }
  }
`;

export default Button;
