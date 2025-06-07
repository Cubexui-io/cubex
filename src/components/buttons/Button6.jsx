const Button = ({ bgColor = "#4b48ff", textColor = "white", shadowColor = "#714da6",arrowColor = "#7b52b9", buttonText = "Get started", onClick }) => {
  return (
    <button
      className={`relative font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer group`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        boxShadow: `inset 0 0 1.6em -0.6em ${shadowColor}`,
      }}
      onClick={onClick} 
    >
      <span className="mr-10">{buttonText}</span>
      <div
        className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] active:scale-95"
        style={{ boxShadow: `0.1em 0.1em 0.6em 0.2em ${shadowColor}` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          className="w-[1.1em] transition-transform duration-300  group-hover:translate-x-[0.1em]"
          style={{ color: arrowColor }}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
        </svg>
      </div>
    </button>
  );
};

export default Button;
