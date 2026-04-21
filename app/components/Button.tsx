// import { ButtonHTMLAttributes, ReactNode } from "react";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: ReactNode;
// }

// export default function Button({ children, ...props }: ButtonProps) {
//   return (
//     <button {...props} className="cursor-pointer ${props.className}">
//       {children}
//     </button>
//   );
// } 


import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}