type Props = {
  text: string;
  size:
    | "text-6xl"
    | "text-5xl"
    | "text-4xl"
    | "text-3xl"
    | "text-2xl"
    | "text-xl"
    | "text-sm"
    | "text-xs"
    | "text-base"
    | "text-lg";
  center?: boolean;
  onClick: () => void;
};

export function Title({ text, center, size, onClick }: Props) {
  return (
    <div>
      <h2
        onClick={onClick}
        className={`cursor-pointer select-none ${
          center && `text-center`
        } ${size} text-xs leading-9 font-extrabold text-gray-900 hover:text-gray-500 transition-colors ease-in-out`}
      >
        {text}
      </h2>
    </div>
  );
}
