import React from "react";
const UnderlinedInput = ({
  name,
  placeholder,
  label,
  value,
  type,
  onChange,
  error,
  ...otherProps
}) => {
  return (
    <div className="flex flex-col gap-y">
      <p className="text-base font-bold text-gray-700 px-2 py-2">{label}</p>
      <div className={``}>
        <div className="Inputfield w-full">
          <input
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            {...otherProps}
            className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:shadow-lg px-2 w-full"
          />
        </div>
      </div>
      {error && (
        <div className={`flex items-center`}>
          <p className={`caption text-red-400 font-medium italic`}>{error}</p>
        </div>
      )}
    </div>
  );
};

export default UnderlinedInput;
