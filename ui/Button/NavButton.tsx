type Props = {
  text: string;
  onClick: () => void;
};

export function NavButton({ text, onClick }: Props) {
  return (
    <div className="hidden md:ml-6 md:flex md:items-center">
      <a
        onClick={onClick}
        className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        {text}
      </a>
    </div>
  );
}
