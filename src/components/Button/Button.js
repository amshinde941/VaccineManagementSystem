import React from "react";

const Button = ({ children, onClick, className, ...otherProps }) => {
  return (
    <div>
      <button
        className={`py-2 px-4 text-white rounded-md bg-blue-400 hover:bg-blue-500 transform hover:scale-110 z-0 ${className}`} 
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
