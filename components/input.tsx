type InputFieldProps = {
    type: string;
    name: string;
    label?: string;
    pattern?: string;
    required?: boolean;
    value?: string;
};

export const InputField: React.FC<InputFieldProps> = ({ type, name, label, pattern, required = true, value }) => (
    <div className="relative z-0 w-full mb-5 group">
        <input
            type={type}
            name={name}
            id={name}
            pattern={pattern}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required={required}
            value={value}
        />
        <label
            htmlFor={name}
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
            {label}
        </label>
    </div>
);
