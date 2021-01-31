type props = {
  label: string;
  placeholder: string;
};

export function Input({ label, placeholder }: props) {
  return (
    <div>
      <div>
        <label htmlFor="email" className="sr-only">
          {label}
        </label>
        <div className="relative rounded-md shadow-sm border-black border border-opacity-10">
          <input
            id="email"
            className="form-input block w-full sm:text-sm sm:leading-5"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
}
