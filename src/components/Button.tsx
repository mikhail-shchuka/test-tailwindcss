interface Props {
  text: string;
  clickHandler: () => {};
}

export const Button: React.FC<Props> = ({ text, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="w-full rounded-full bg-accentCyan p-3 px-6 hover:scale-95 md:w-56"
    >
      {text}
    </button>
  );
};
