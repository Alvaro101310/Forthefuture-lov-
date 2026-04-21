// // "use client";

// // import React, { useState, useEffect } from "react";
// // import LayoutPad from "./components/layoutpad";
// // import Button from "./components/Button";
// // import Heart from "./components/Heart";

// // export default function Home() {
// //   const [showSecret, setShowSecret] = useState<boolean>(false);
// //   const [decorHearts, setDecorHearts] = useState<any[]>([]);

// //   useEffect(() => {
// //     // Hiasan love mobile (dibuat pekat biar nggak kalah ama BG)
// //     const hearts = Array.from({ length: 8 }).map((_, i) => ({
// //       id: i,
// //       top: `${15 + Math.random() * 70}%`,
// //       left: `${10 + Math.random() * 80}%`,
// //       size: 35 + Math.random() * 15,
// //       delay: `${Math.random() * 2}s`,
// //       opacity: 0.8,
// //     }));
// //     setDecorHearts(hearts);
// //   }, []);

// //   return (
// //     <LayoutPad id="top">
// //       {/* --- BAGIAN DEPAN --- */}
// //       <div className="flex items-center justify-center min-h-[85vh] px-4">
// //         <div className="bg-white/70 backdrop-blur-md border border-rose-200 p-10 rounded-[2.5rem] shadow-xl text-center max-w-sm">
// //           <h1 className="text-3xl font-black text-gray-800 mb-4">Halo! ✨</h1>
// //           <p className="text-gray-600 font-medium mb-8">
// //             Aku langsung to the point aja ya. Kamu mungkin bingung ini siapa? 
// //             Tenang, aku bukan orang asing kok, aku punya sesuatu nih.. penasaran ga?
// //           </p>
// //           <Button 
// //             onClick={() => setShowSecret(true)} 
// //             className="bg-rose-500 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
// //           >
// //             Klik aku
// //           </Button>
// //         </div>
// //       </div>

// //       {/* --- BAGIAN SECRET (FULL COLOR REVISION) --- */}
// //       <section
// //         className={`fixed inset-0 z-[100] w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${
// //           showSecret ? "opacity-100 visible" : "opacity-0 invisible"
// //         } bg-[#feb8bd] md:bg-[#ffb9be]`} // BACKGROUND PINK SOFT MURNI (Rose-100)
// //       >
// //         <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          
// //           {/* MOBILE DECOR: Love Pekat & Nyebar */}
// //           <div className="absolute inset-0 block md:hidden z-0">
// //             {decorHearts.map((h) => (
// //               <Heart
// //                 key={h.id}
// //                 fill="#fba3ae" // Warna Love Mobile (Rose-300)
// //                 className="absolute"
// //                 style={{
// //                   top: h.top,
// //                   left: h.left,
// //                   width: `${h.size}px`,
// //                   height: `${h.size}px`,
// //                   opacity: h.opacity,
// //                   animationDelay: h.delay,
// //                 }}
// //               />
// //             ))}
// //           </div>

// //           {/* DESKTOP FRAME: Love Bold biar menang lawan BG */}
// //           <div className="absolute inset-0 hidden md:flex items-center justify-center z-0">
// //             <Heart 
// //               fill="#fda4af" // Warna Love Desktop Utama (Rose-400) - TEGAS!
// //               size="w-[680px] h-[680px]" 
// //               animate="pulse"
// //               className="drop-shadow-2xl"
// //             />
// //           </div>

// //           {/* KONTEN TEKS: Pas di tengah Love Desktop */}
// //           <div className="relative z-50 text-center px-4 flex flex-col items-center justify-center w-full max-w-xl">
// //             <h2 className="font-black leading-tight mb-2 text-[26px] md:text-[36px] text-white md:text-white drop-shadow-sm">
// //               Rasanya kamu keliatan beda, kayak lebih menarik gituu, <br className="hidden md:block" /> 
// //               aku jujur tertarik sama kamu
// //             </h2>
            
// //             <p className="font-bold mb-12 text-[20px] md:text-[20px] leading-relaxed text-white md:text-white/90">
// //               aku gatau apakah ini beneran rasa suka atau enggak,<br /> 
// //               tapi yahh aku cuman mau bilang itu aja
// //             </p>

// //             <Button
// //               className="bg-white text-rose-300 rounded-full px-6 py-3 font-black shadow-2xl hover:bg-rose-50 transition-all active:scale-90"
// //               onClick={() => setShowSecret(false)}
// //             >
// //               Back
// //             </Button>
// //           </div>
// //         </div>

// //         <style jsx global>{`
// //           @keyframes heart-pulse {
// //             0%, 100% { transform: scale(1); }
// //             50% { transform: scale(1.03); }
// //           }
// //           @keyframes gentle-pulse {
// //             0%, 100% { transform: scale(1); }
// //             50% { transform: scale(1.1); }
// //           }
// //           .animate-heart-pulse {
// //             animation: heart-pulse 2s ease-in-out infinite;
// //           }
// //           .animate-gentle-pulse {
// //             animation: gentle-pulse 3s ease-in-out infinite;
// //           }
// //         `}</style>
// //       </section>
// //     </LayoutPad>
// //   );
// // }

// "use client";

// import React, { useState, useEffect } from "react";
// import LayoutPad from "./components/layoutpad";
// import Button from "./components/Button";
// import Heart from "./components/Heart";

// export default function Home() {
//   const [showSecret, setShowSecret] = useState<boolean>(false);
//   const [decorHearts, setDecorHearts] = useState<any[]>([]);

//   useEffect(() => {
//     // Hiasan love mobile
//     const hearts = Array.from({ length: 8 }).map((_, i) => ({
//       id: i,
//       top: `${15 + Math.random() * 70}%`,
//       left: `${10 + Math.random() * 80}%`,
//       size: 35 + Math.random() * 15,
//       delay: `${Math.random() * 2}s`,
//       opacity: 0.8,
//     }));
    
//     // PERBAIKAN: Gunakan functional update atau pastikan ini hanya running sekali
//     setDecorHearts(() => hearts);
    
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <LayoutPad id="top">
//       {/* --- BAGIAN DEPAN --- */}
//       <div className="flex items-center justify-center min-h-[85vh] px-4">
//         <div className="bg-white/70 backdrop-blur-md border border-rose-200 p-10 rounded-[2.5rem] shadow-xl text-center max-w-sm">
//           <h1 className="text-3xl font-black text-gray-800 mb-4">Halo! ✨</h1>
//           <p className="text-gray-600 font-medium mb-8">
//             Aku langsung to the point aja ya. Kamu mungkin bingung ini siapa? 
//             Tenang, aku bukan orang asing kok, aku punya sesuatu nih.. penasaran ga?
//           </p>
//           <Button 
//             onClick={() => setShowSecret(true)} 
//             className="bg-rose-500 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
//           >
//             Klik aku
//           </Button>
//         </div>
//       </div>

//       {/* --- BAGIAN SECRET --- */}
//       <section
//         className={`fixed inset-0 z-[100] w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${
//           showSecret ? "opacity-100 visible" : "opacity-0 invisible"
//         } bg-[#feb8bd] md:bg-[#ffb9be]`}
//       >
//         <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          
//           <div className="absolute inset-0 block md:hidden z-0">
//             {decorHearts.map((h) => (
//               <Heart
//                 key={h.id}
//                 fill="#fba3ae"
//                 className="absolute"
//                 style={{
//                   top: h.top,
//                   left: h.left,
//                   width: `${h.size}px`,
//                   height: `${h.size}px`,
//                   opacity: h.opacity,
//                   animationDelay: h.delay,
//                 }}
//               />
//             ))}
//           </div>

//           <div className="absolute inset-0 hidden md:flex items-center justify-center z-0">
//             <Heart 
//               fill="#fda4af" 
//               size="w-[680px] h-[680px]" 
//               animate="pulse"
//               className="drop-shadow-2xl"
//             />
//           </div>

//           <div className="relative z-50 text-center px-4 flex flex-col items-center justify-center w-full max-w-xl">
//             <h2 className="font-black leading-tight mb-2 text-[26px] md:text-[36px] text-white drop-shadow-sm">
//               Rasanya kamu keliatan beda, kayak lebih menarik gituu, <br className="hidden md:block" /> 
//               aku jujur tertarik sama kamu
//             </h2>
            
//             <p className="font-bold mb-12 text-[20px] md:text-[20px] leading-relaxed text-white">
//               aku gatau apakah ini beneran rasa suka atau enggak,<br /> 
//               tapi yahh aku cuman mau bilang itu aja
//             </p>

//             <Button
//               className="bg-white text-rose-300 rounded-full px-6 py-3 font-black shadow-2xl hover:bg-rose-50 transition-all active:scale-90"
//               onClick={() => setShowSecret(false)}
//             >
//               Back
//             </Button>
//           </div>
//         </div>

//         {/* PERBAIKAN: Gunakan template literal (backticks) yang benar */}
//         <style jsx global>{`
//           @keyframes heart-pulse {
//             0%, 100% { transform: scale(1); }
//             50% { transform: scale(1.03); }
//           }
//           @keyframes gentle-pulse {
//             0%, 100% { transform: scale(1); }
//             50% { transform: scale(1.1); }
//           }
//           .animate-heart-pulse {
//             animation: heart-pulse 2s ease-in-out infinite;
//           }
//           .animate-gentle-pulse {
//             animation: gentle-pulse 3s ease-in-out infinite;
//           }
//         `}</style>
//       </section>
//     </LayoutPad>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import LayoutPad from "./components/layoutpad";
import Button from "./components/Button";
import Heart from "./components/Heart";

// 1. KITA BUAT DEFINISI TIPE DATANYA (BIAR ENGGAK PAKAI 'ANY')
interface HeartDecor {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: string;
  opacity: number;
}

export default function Home() {
  const [showSecret, setShowSecret] = useState<boolean>(false);
  // 2. PAKAI TIPE DATA YANG BARU DIBUAT TADI
  const [decorHearts, setDecorHearts] = useState<HeartDecor[]>([]);

  useEffect(() => {
    const hearts: HeartDecor[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: `${15 + Math.random() * 70}%`,
      left: `${10 + Math.random() * 80}%`,
      size: 35 + Math.random() * 15,
      delay: `${Math.random() * 2}s`,
      opacity: 0.8,
    }));
    
    setDecorHearts(hearts);
    
    // Hapus baris eslint-disable yang tadi bikin warning
  }, []);

  return (
    <LayoutPad id="top">
      {/* --- BAGIAN DEPAN --- */}
      <div className="flex items-center justify-center min-h-[85vh] px-4">
        <div className="bg-white/70 backdrop-blur-md border border-rose-200 p-10 rounded-[2.5rem] shadow-xl text-center max-w-sm">
          <h1 className="text-3xl font-black text-gray-800 mb-4">Halo! ✨</h1>
          <p className="text-gray-600 font-medium mb-8">
            Aku langsung to the point aja ya. Kamu mungkin bingung ini siapa? 
            Tenang, aku bukan orang asing kok, aku punya sesuatu nih.. penasaran ga?
          </p>
          <Button 
            onClick={() => setShowSecret(true)} 
            className="bg-rose-500 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
          >
            Klik aku
          </Button>
        </div>
      </div>

      {/* --- BAGIAN SECRET --- */}
      <section
        className={`fixed inset-0 z-[100] w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${
          showSecret ? "opacity-100 visible" : "opacity-0 invisible"
        } bg-[#feb8bd] md:bg-[#ffb9be]`}
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          
          <div className="absolute inset-0 block md:hidden z-0">
            {decorHearts.map((h) => (
              <Heart
                key={h.id}
                fill="#fba3ae"
                className="absolute"
                style={{
                  top: h.top,
                  left: h.left,
                  width: `${h.size}px`,
                  height: `${h.size}px`,
                  opacity: h.opacity,
                  animationDelay: h.delay,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 hidden md:flex items-center justify-center z-0">
            <Heart 
              fill="#fda4af" 
              size="w-[680px] h-[680px]" 
              animate="pulse"
              className="drop-shadow-2xl"
            />
          </div>

          <div className="relative z-50 text-center px-4 flex flex-col items-center justify-center w-full max-w-xl">
            <h2 className="font-black leading-tight mb-2 text-[26px] md:text-[36px] text-white drop-shadow-sm">
              Rasanya kamu keliatan beda, kayak lebih menarik gituu, <br className="hidden md:block" /> 
              aku jujur tertarik sama kamu
            </h2>
            
            <p className="font-bold mb-12 text-[20px] md:text-[20px] leading-relaxed text-white">
              aku gatau apakah ini beneran rasa suka atau enggak,<br /> 
              tapi yahh aku cuman mau bilang itu aja
            </p>

            <Button
              className="bg-white text-rose-300 rounded-full px-6 py-3 font-black shadow-2xl hover:bg-rose-50 transition-all active:scale-90"
              onClick={() => setShowSecret(false)}
            >
              Back
            </Button>
          </div>
        </div>

        <style jsx global>{`
          @keyframes heart-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
          @keyframes gentle-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .animate-heart-pulse {
            animation: heart-pulse 2s ease-in-out infinite;
          }
          .animate-gentle-pulse {
            animation: gentle-pulse 3s ease-in-out infinite;
          }
        `}</style>
      </section>
    </LayoutPad>
  );
}