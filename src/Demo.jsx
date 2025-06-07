import { CloseButton } from "./index";

function Demo() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <CloseButton
      bgColor="rgba(100, 83, 200, 0.15)"
      hoverColor="#ff5733"
      activeColor="#a53f2d"
      textColor="white"
      hoverText="Exit"
      hoverTextColor="#ffdd44"
      onClick={handleClick}
    />
  );
}

export default Demo;
