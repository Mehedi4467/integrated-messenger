import React from 'react';
const CardPlusIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className ? `h-6 w-6 ${className}` : 'h-6 w-6'}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default CardPlusIcon;
