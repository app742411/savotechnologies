// 'use client';

// import Link from 'next/link';
// import { ChevronRight } from 'lucide-react';

// interface CTAButtonProps {
//   href: string;
//   label: string;
//   className?: string;
//   variant?: 'primary' | 'secondary';
// }

// export default function CTAButton({
//   href,
//   label,
//   className = '',
//   variant = 'primary',
// }: CTAButtonProps) {
//   return (
//     <Link
//       href={href}
//       className={`group inline-flex items-center ${className}`}
//     >
//       {/* Left Icon Block */}
//       <span
//         className="
//           flex h-16 w-[72px] items-center justify-center
//           bg-gradient-to-b from-[#1E73E8] to-[#002550]
//           transition-all duration-300
//           group-hover:w-[78px]
//         "
//       >
//         <ChevronRight
//           className="h-7 w-7 text-white transition-transform duration-300 group-hover:translate-x-1"
//           strokeWidth={2.5}
//         />
//       </span>

//       {/* Gap */}
//       <span className="w-[8px] bg-transparent" />

//       {/* Text Block */}
//       <span
//         className="
//           flex h-16 min-w-[240px] items-center justify-center
//           bg-white
//           px-10
//           text-[16px]
//           font-semibold
//           text-[#002550]
//           transition-all duration-300
//           group-hover:bg-slate-50
//         "
//       >
//         {label}
//       </span>
//     </Link>
//   );
// }
'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  label: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function CTAButton({
  href,
  label,
  className = '',
  variant = 'secondary',
}: CTAButtonProps) {
  if (variant === 'primary') {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center justify-center border border-[#0970E6] bg-white h-10 min-w-[140px] px-6 text-[14px] font-semibold text-[#002550] transition-all duration-300 hover:bg-[#F8FAFC] hover:border-[#1E73E8] ${className}`}
      >
        {label}
      </Link>
    );
  }

  // Default: variant === 'secondary' (split button design)
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 ${className}`}
    >
      {/* Left Icon */}
      <span
        className="
          flex h-10 w-[44px] items-center justify-center
          bg-gradient-to-b from-[#1E73E8] to-[#002550]
          transition-all duration-300
          group-hover:scale-[1.02]
        "
      >
        <ChevronRight
          className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      </span>

      {/* Right Content */}
      <span
        className="
          flex h-10 min-w-[140px] items-center justify-center whitespace-nowrap
          border border-[#0970E6]
          bg-white
          px-6
          text-[14px]
          font-semibold
          text-[#002550]
          transition-all duration-300
          group-hover:bg-[#F8FAFC]
          group-hover:border-[#1E73E8]
        "
      >
        {label}
      </span>
    </Link>
  );
}