import React, { forwardRef } from 'react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={id} className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          className={`w-full bg-slate-900 border ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:ring-blue-500'
          } rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 min-h-[120px] resize-y ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-500 font-medium" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';
export default FormTextarea;
