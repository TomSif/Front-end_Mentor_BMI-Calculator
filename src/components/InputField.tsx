interface InputFieldProps {
  name: string;
  value: number;
  unit: string; // "kg", "cm", "%", etc.
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ name, value, unit, onChange }: InputFieldProps) {
  return (
    <div className="flex items-center w-full relative">
      <input
        aria-label={`input zone for ${name}`}
        className="bg-white flex-1 px-6 py-6 lg:py-4 border-2 border-grey-500  focus:border-blue-500 hover:border-blue-500 active:border-blue-500 hover:cursor-pointer focus:outline-none text-preset-4 rounded-2xl text-grey-500"
        type="number"
        min="0"
        max="300"
        id={`${name}`}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={(e) => e.target.select()}
      />
      <span
        id={`${name}-unit`}
        aria-describedby={`${name}-unit`}
        className="absolute text-blue-500 text-preset-4 right-6 top-1/2 -translate-y-1/2"
      >
        {unit}
      </span>
    </div>
  );
}
export default InputField;
