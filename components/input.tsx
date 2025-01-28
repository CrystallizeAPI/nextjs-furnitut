type InputFieldProps = React.ComponentPropsWithRef<'input'> & { label?: string };

export const InputField = ({ label, required = true, ...delegated }: InputFieldProps) => (
    <div className="relative z-0 w-full flex flex-col  group focus-within:bg-soft/30">
        <label
            htmlFor={delegated.name}
            className="px-6 text-xs pt-4 group-focus-within:text-dark text-dark/50 font-medium"
        >
            {label}
        </label>
        <input
            className="bg-transparent pb-4 outline-none px-6 font-bold text-dark"
            required={required}
            id={delegated.name}
            {...delegated}
        />
    </div>
);
