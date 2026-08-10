import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md focus:ring-blue-500 focus:ring-offset-slate-900',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white shadow-sm hover:shadow-md focus:ring-slate-500 focus:ring-offset-slate-900',
    outline: 'border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white bg-transparent focus:ring-slate-500',
    ghost: 'text-slate-400 hover:text-white bg-transparent hover:bg-slate-800 focus:ring-slate-800'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4.5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base'
  };

  const buttonClass = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
