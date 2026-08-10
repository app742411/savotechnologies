'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';

const newsletterSchema = zod.object({
  email: zod.string().email('Please enter a valid email address'),
});

type NewsletterValues = zod.infer<typeof newsletterSchema>;

export function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterValues) => {
    setStatus('loading');
    console.log('Submitting newsletter subscription:', data);
    try {
      // Simulate API submit
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center space-x-3 text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 p-4.5 rounded-lg">
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm font-medium">Thank you! You have successfully subscribed to our newsletter.</span>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Mail className="w-4 h-4" />
          </div>
          <input
            type="email"
            placeholder="Enter your corporate email"
            className={`w-full bg-slate-900 border ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:ring-blue-500'
            } rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
            {...register('email')}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 flex-shrink-0"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <span>Subscribe</span>
          )}
        </button>
      </form>
      {errors.email && (
        <p className="mt-2 text-xs text-red-500 font-medium" role="alert">
          {errors.email.message}
        </p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-500 font-medium" role="alert">
          Subscription failed. Please try again.
        </p>
      )}
    </div>
  );
}

export default Newsletter;
