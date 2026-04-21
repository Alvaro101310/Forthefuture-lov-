

// // // // // // import React from "react";

// // // // // // interface HeartProps {
// // // // // //   className?: string;
// // // // // //   size?: string;
// // // // // //   style?: React.CSSProperties;
// // // // // //   variant?: "desktop-frame" | "mobile-decor";
// // // // // // }

// // // // // // const Heart: React.FC<HeartProps> = ({ 
// // // // // //   className = "", 
// // // // // //   size = "w-24 h-24", 
// // // // // //   style, 
// // // // // //   variant = "mobile-decor" 
// // // // // // }) => (
// // // // // //   <div className={`${className} pointer-events-none`} style={style}>
// // // // // //     <svg
// // // // // //       viewBox="0 0 24 24"
// // // // // //       className={`${size} drop-shadow-sm ${variant === 'desktop-frame' ? 'animate-heart-pulse' : 'animate-gentle-pulse'}`}
// // // // // //       xmlns="http://www.w3.org/2000/svg"
// // // // // //     >
// // // // // //       <defs>
// // // // // //         {/* REVISI GRADASI WARNA AGAR SELARAS (COOL PINK) */}
// // // // // //         <linearGradient id={variant === "desktop-frame" ? "gradBold" : "gradSoft"} x1="0%" y1="0%" x2="0%" y2="100%">
// // // // // //           {/* Desktop Frame: Warna Pink Magenta yang Lembut tapi Jelas */}
// // // // // //           <stop offset="0%" stopColor={variant === "desktop-frame" ? "#fdf2f8" : "#fdf2f8"} /> {/* pink-50 */}
// // // // // //           <stop offset="100%" stopColor={variant === "desktop-frame" ? "#fbcfe8" : "#fce7f3"} /> {/* pink-300 / pink-100 */}
// // // // // //         </linearGradient>
// // // // // //       </defs>
// // // // // //       <path
// // // // // //         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
// // // // // //         fill={`url(#${variant === "desktop-frame" ? "gradBold" : "gradSoft"})`}
// // // // // //       />
// // // // // //     </svg>
// // // // // //   </div>
// // // // // // );

// // // // // // export default Heart;


// // // // // import React from "react";

// // // // // interface HeartProps {
// // // // //   className?: string;
// // // // //   size?: string;
// // // // //   style?: React.CSSProperties;
// // // // //   variant?: "desktop-frame" | "mobile-decor";
// // // // // }

// // // // // const Heart: React.FC<HeartProps> = ({ 
// // // // //   className = "", 
// // // // //   size = "w-24 h-24", 
// // // // //   style, 
// // // // //   variant = "mobile-decor" 
// // // // // }) => (
// // // // //   <div className={`${className} pointer-events-none`} style={style}>
// // // // //     <svg
// // // // //       viewBox="0 0 24 24"
// // // // //       className={`${size} drop-shadow-sm ${variant === 'desktop-frame' ? 'animate-heart-pulse' : 'animate-gentle-pulse'}`}
// // // // //       xmlns="http://www.w3.org/2000/svg"
// // // // //     >
// // // // //       <defs>
// // // // //         {/* GRADASI DESKTOP: LEBIH TEGAS (BINGKAI) */}
// // // // //         <linearGradient id="gradDesktop" x1="0%" y1="0%" x2="0%" y2="100%">
// // // // //           <stop offset="0%" stopColor="#fda4af" /> {/* pink-300 */}
// // // // //           <stop offset="100%" stopColor="#fb7185" /> {/* pink-400 */}
// // // // //         </linearGradient>

// // // // //         {/* GRADASI MOBILE: SUPER SOFT (DEKORASI) */}
// // // // //         <linearGradient id="gradMobile" x1="0%" y1="0%" x2="0%" y2="100%">
// // // // //           <stop offset="0%" stopColor="#fff1f2" /> {/* rose-50 */}
// // // // //           <stop offset="100%" stopColor="#fecdd3" /> {/* rose-200 */}
// // // // //         </linearGradient>
// // // // //       </defs>
// // // // //       <path
// // // // //         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
// // // // //         fill={`url(#${variant === "desktop-frame" ? "gradDesktop" : "gradMobile"})`}
// // // // //       />
// // // // //     </svg>
// // // // //   </div>
// // // // // );

// // // // // export default Heart;



// // // // import React from "react";

// // // // interface HeartProps {
// // // //   className?: string;
// // // //   size?: string;
// // // //   style?: React.CSSProperties;
// // // //   variant?: "desktop-frame" | "mobile-decor";
// // // // }

// // // // const Heart: React.FC<HeartProps> = ({ 
// // // //   className = "", 
// // // //   size = "w-24 h-24", 
// // // //   style, 
// // // //   variant = "mobile-decor" 
// // // // }) => (
// // // //   <div className={`${className} pointer-events-none`} style={style}>
// // // //     <svg
// // // //       viewBox="0 0 24 24"
// // // //       className={`${size} drop-shadow-sm ${variant === 'desktop-frame' ? 'animate-heart-pulse' : 'animate-gentle-pulse'}`}
// // // //       xmlns="http://www.w3.org/2000/svg"
// // // //       preserveAspectRatio="xMidYMid meet"
// // // //     >
// // // //       <defs>
// // // //         <linearGradient id={variant === "desktop-frame" ? "gradDesktop" : "gradMobile"} x1="0%" y1="0%" x2="0%" y2="100%">
// // // //           {/* Desktop: Pink tegas untuk bingkai | Mobile: Pink pastel sangat lembut */}
// // // //           <stop offset="0%" stopColor={variant === "desktop-frame" ? "#fda4af" : "#fff1f2"} />
// // // //           <stop offset="100%" stopColor={variant === "desktop-frame" ? "#fb7185" : "#fecdd3"} />
// // // //         </linearGradient>
// // // //       </defs>
// // // //       <path
// // // //         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
// // // //         fill={`url(#${variant === "desktop-frame" ? "gradDesktop" : "gradMobile"})`}
// // // //       />
// // // //     </svg>
// // // //   </div>
// // // // );

// // // // export default Heart;


// // // import React from "react";

// // // interface HeartProps {
// // //   className?: string;
// // //   size?: string;
// // //   style?: React.CSSProperties;
// // //   variant?: "desktop-frame" | "mobile-decor";
// // // }

// // // const Heart: React.FC<HeartProps> = ({ 
// // //   className = "", 
// // //   size = "w-24 h-24", 
// // //   style, 
// // //   variant = "mobile-decor" 
// // // }) => (
// // //   <div className={`${className} pointer-events-none`} style={style}>
// // //     <svg
// // //       viewBox="0 0 24 24"
// // //       className={`${size} drop-shadow-sm ${variant === 'desktop-frame' ? 'animate-heart-pulse' : 'animate-gentle-pulse'}`}
// // //       xmlns="http://www.w3.org/2000/svg"
// // //     >
// // //       <defs>
// // //         <linearGradient id={variant === "desktop-frame" ? "gradDesktop" : "gradMobile"} x1="0%" y1="0%" x2="0%" y2="100%">
// // //           {/* Warna Pink Rose murni, dijamin nggak ungu */}
// // //           <stop offset="0%" stopColor={variant === "desktop-frame" ? "#fda4af" : "#fff1f2"} />
// // //           <stop offset="100%" stopColor={variant === "desktop-frame" ? "#fb7185" : "#fecdd3"} />
// // //         </linearGradient>
// // //       </defs>
// // //       <path
// // //         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
// // //         fill={`url(#${variant === "desktop-frame" ? "gradDesktop" : "gradMobile"})`}
// // //       />
// // //     </svg>
// // //   </div>
// // // );

// // // export default Heart;






// // import React from "react";

// // interface HeartProps {
// //   className?: string;
// //   size?: string;
// //   style?: React.CSSProperties;
// //   variant?: "desktop-frame" | "mobile-decor";
// // }

// // const Heart: React.FC<HeartProps> = ({ 
// //   className = "", 
// //   size = "w-24 h-24", 
// //   style, 
// //   variant = "mobile-decor" 
// // }) => (
// //   <div className={`${className} pointer-events-none`} style={style}>
// //     <svg
// //       viewBox="0 0 24 24"
// //       className={`${size} drop-shadow-sm ${variant === 'desktop-frame' ? 'animate-heart-pulse' : 'animate-gentle-pulse'}`}
// //       xmlns="http://www.w3.org/2000/svg"
// //     >
// //       <defs>
// //         <linearGradient id={variant === "desktop-frame" ? "gradDesktop" : "gradMobile"} x1="0%" y1="0%" x2="0%" y2="100%">
// //           {/* Desktop Frame: Pink Rose */}
// //           <stop offset="0%" stopColor={variant === "desktop-frame" ? "#fda4af" : "#fb7185"} /> 
// //           {/* Mobile Decor: Rose Pekat */}
// //           <stop offset="100%" stopColor={variant === "desktop-frame" ? "#fb7185" : "#e11d48"} />
// //         </linearGradient>
// //       </defs>
// //       <path
// //         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
// //         fill={`url(#${variant === "desktop-frame" ? "gradDesktop" : "gradMobile"})`}
// //       />
// //     </svg>
// //   </div>
// // );

// // export default Heart;

// import React from "react";

// interface HeartProps {
//   className?: string;
//   size?: string;
//   style?: React.CSSProperties;
//   variant?: "desktop-frame" | "mobile-decor";
// }

// const Heart: React.FC<HeartProps> = ({ 
//   className = "", 
//   size = "w-24 h-24", 
//   style, 
//   variant = "mobile-decor" 
// }) => (
//   <div className={`${className} pointer-events-none`} style={style}>
//     <svg
//       viewBox="0 0 24 24"
//       className={`${size} drop-shadow-sm ${variant === 'desktop-frame' ? 'animate-heart-pulse' : 'animate-gentle-pulse'}`}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <defs>
//         <linearGradient id={variant === "desktop-frame" ? "gradDesktop" : "gradMobile"} x1="0%" y1="0%" x2="0%" y2="100%">
//           {/* Warna Rose-Pink yang selaras dengan background pink-100 */}
//           <stop offset="0%" stopColor={variant === "desktop-frame" ? "#fb7185" : "#fda4af"} /> 
//           <stop offset="100%" stopColor={variant === "desktop-frame" ? "#e11d48" : "#fb7185"} />
//         </linearGradient>
//       </defs>
//       <path
//         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//         fill={`url(#${variant === "desktop-frame" ? "gradDesktop" : "gradMobile"})`}
//       />
//     </svg>
//   </div>
// );

// export default Heart;



import React from "react";

interface HeartProps {
  className?: string;
  size?: string;
  style?: React.CSSProperties;
  fill?: string; // Warna ditentukan dari Page
  animate?: "pulse" | "gentle";
}

const Heart: React.FC<HeartProps> = ({ 
  className = "", 
  size = "w-24 h-24", 
  style, 
  fill = "#fb7185", 
  animate = "gentle" 
}) => (
  <div className={`${className} pointer-events-none`} style={style}>
    <svg
      viewBox="0 0 24 24"
      className={`${size} drop-shadow-md ${animate === 'pulse' ? 'animate-heart-pulse' : 'animate-gentle-pulse'}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={fill}
      />
    </svg>
  </div>
);

export default Heart;