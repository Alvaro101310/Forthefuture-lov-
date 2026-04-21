import React from "react";

// type LayoutProps = {
//   children: React.ReactNode;
// };

// export default function Layout({ children }: LayoutProps) {
//   return (
//     <div className="bg-white max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-6 ${props.className}">
//       {children}
//     </div>
//   );
// }

type LayoutProps = {
  children: React.ReactNode;
  className?: string; // opsional
  id?: string;        // opsional
};

export default function Layout({ children, className = "", id }: LayoutProps) {
  return (
    <div
      id={id}
      className={`bg-white max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-6 ${className}`}
    >
      {children}
    </div>
  );
}