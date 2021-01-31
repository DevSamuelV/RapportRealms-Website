type Props = {
  placeholder: string;
  label: string;
};

export function InputWithLabel({ label, placeholder }: Props) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id="email"
          className="form-input block w-full sm:text-sm sm:leading-5"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
