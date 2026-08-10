import React, { forwardRef } from 'react';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, options, error, className = '', id, ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={id} className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          {label}
        </label>
        <div className="relative">
          <select
            id={id}
            ref={ref}
            className={`w-full bg-slate-900 border ${
              error ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:ring-blue-500'
            } rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 appearance-none ${className}`}
            {...props}
          >
            {options.map((opt, index) => (
              <option key={index} value={opt.value} className="bg-slate-900 text-white">
                {opt.label}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        {error && (
          <p className="mt-1.5 text-xs text-red-500 font-medium" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';
export default FormSelect;
