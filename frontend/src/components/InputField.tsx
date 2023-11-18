import { HTMLInputTypeAttribute } from "react";
import { AiFillWarning } from "react-icons/ai";

interface InputFieldProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  errorMessage?: string;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const InputField = ({ label, placeholder, type = 'text', errorMessage, inputValue, setInputValue }: InputFieldProps) => {
  return (
    <div>
      <h3 className="text-lg"><b>{label}</b></h3>
      <input
        className="bg-dark w-full p-1 px-3 border rounded-md"
        placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <div className="h-4">
        {errorMessage && <div className="flex gap-1 text-yellow-400 text-xs items-center">
          <AiFillWarning />
          <p className="">{errorMessage}</p>
        </div>}
      </div>
    </div>
  )
}

export default InputField