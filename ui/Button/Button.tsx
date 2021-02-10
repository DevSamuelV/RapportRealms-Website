type props = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

export function Button({ text, disabled, onClick }: props) {
  return (
    <div>
      <span className="inline-flex rounded-lg shadow-sm">
        <button
          onClick={onClick}
          disabled={disabled}
          type="button"
          className={`inline-flex disabled:opacity-50 items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 ${
            !disabled && `hover:bg-indigo-500`
          } focus:outline-none ${
            !disabled && `focus:border-indigo-700 focus:shadow-outline-indigo`
          } active:bg-indigo-700 transition ease-in-out duration-150`}
        >
          {text}
        </button>
      </span>
    </div>
  );
}

export function RedButton({ text }: props) {
  return (
    <div>
      <span className="inline-flex rounded-lg shadow-sm">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150"
        >
          {text}
        </button>
      </span>
    </div>
  );
}
