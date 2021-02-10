type Props = {
  text: string;
  onClick: () => void;
};

export function BigRedButton({ text, onClick }: Props) {
  const rounding = "rounded-2xl";

  return (
    <div>
      <span className={`inline-flex ${rounding} shadow-sm`}>
        <button
          onClick={onClick}
          type="button"
          className={`inline-flex items-center px-8 py-4 border border-transparent text-xl leading-5 font-semibold ${rounding} text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150`}
        >
          {text}
        </button>
      </span>
    </div>
  );
}
