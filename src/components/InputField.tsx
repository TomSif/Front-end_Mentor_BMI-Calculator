interface InputFieldProps {
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputField({ name, value, onChange }: InputFieldProps) {
  return (
    <div>
      <input
        aria-label={name}
        className="bg-white"
        type="number"
        min="0"
        max="300"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={(e) => e.target.select()}
      />
    </div>
  );
}

export default InputField;
