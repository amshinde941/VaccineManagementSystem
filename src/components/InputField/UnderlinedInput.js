import { useFormikContext } from "formik";
import React from "react";
import "./Input.css";
const UnderlinedInput = ({
  name,
  placeholder,
  label,
  value,
  type,
  onChange,
  ...otherProps
}) => {
  const { errors, touched } = useFormikContext();
  return (
    <div className="flex flex-col gap-y">
      {type !== "checkbox" ? (
        <p className="text-base font-bold text-gray-700 px-2 ">{label}</p>
      ) : null}
      <div className={``}>
        {type === "checkbox" ? (
          <label class="container flex flex-row">
            {label}
            <input
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              checked={value}
              {...otherProps}
            />
            <span class="checkmark"></span>
          </label>
        ) : (
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
        )}
      </div>
      {touched[name] && errors[name] && (
        <div className={`flex items-center`}>
          <p className={`caption text-red-400 font-medium italic`}>
            {errors[name]}
          </p>
        </div>
      )}
    </div>
  );
};

export default UnderlinedInput;
