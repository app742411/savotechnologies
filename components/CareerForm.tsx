'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { FormSelect } from './FormSelect';
import { Button } from './Button';
import { Loader2, CheckCircle } from 'lucide-react';

const careerSchema = zod.object({
  name: zod.string().min(2, 'Name must be at least 2 characters'),
  email: zod.string().email('Please enter a valid email address'),
  phone: zod.string().min(6, 'Phone number is required'),
  experience: zod.string().min(1, 'Please select your years of experience'),
  portfolio: zod.string().url('Please enter a valid URL').or(zod.literal('')),
  coverLetter: zod.string().min(20, 'Cover letter must be at least 20 characters'),
});

type CareerValues = zod.infer<typeof careerSchema>;

export function CareerForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerValues>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      experience: '3-5',
      portfolio: ''
    }
  });

  const onSubmit = async (data: CareerValues) => {
    setStatus('loading');
    console.log('Submitting career application data:', data);
    try {
      // Simulate API Submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const experienceOptions = [
    { value: '1-3', label: '1 - 3 Years' },
    { value: '3-5', label: '3 - 5 Years' },
    { value: '5-8', label: '5 - 8 Years' },
    { value: '8+', label: '8+ Years' },
  ];

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-900 border border-slate-800 rounded-xl text-center">
        <CheckCircle className="w-12 h-12 text-emerald-500 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Application Submitted!</h3>
        <p className="text-slate-400 text-sm max-w-md">
          Thank you for applying to SavoTech. Our recruitment team will review your application details and contact you if your profile matches the role requirements.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-blue-500 hover:text-blue-400 font-semibold"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput
          id="career-name"
          label="Full Name"
          placeholder="e.g. Alice Smith"
          error={errors.name?.message}
          {...register('name')}
        />
        <FormInput
          id="career-email"
          label="Email Address"
          placeholder="e.g. asmith@gmail.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput
          id="career-phone"
          label="Phone Number"
          placeholder="e.g. +1 (555) 000-0000"
          error={errors.phone?.message}
          {...register('phone')}
        />
        <FormSelect
          id="career-experience"
          label="Years of Experience"
          options={experienceOptions}
          error={errors.experience?.message}
          {...register('experience')}
        />
      </div>

      <FormInput
        id="career-portfolio"
        label="Portfolio or LinkedIn URL (Optional)"
        placeholder="e.g. https://linkedin.com/in/alicesmith"
        error={errors.portfolio?.message}
        {...register('portfolio')}
      />

      <FormTextarea
        id="career-cover"
        label="Cover Letter / Why SavoTech?"
        placeholder="Tell us about yourself, your tech stack, and what drives you to build scalable software..."
        error={errors.coverLetter?.message}
        {...register('coverLetter')}
      />

      {status === 'error' && (
        <p className="text-sm text-red-500 font-medium" role="alert">
          Submission failed. Please check details and try again.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full flex justify-center items-center"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            <span>Submitting Application...</span>
          </>
        ) : (
          <span>Apply Now</span>
        )}
      </Button>
    </form>
  );
}

export default CareerForm;
