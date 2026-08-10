import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 xl:px-8 ${className}`} {...props}>
      {children}
    </div>
  );
}
export default Container;
