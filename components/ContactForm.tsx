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

const contactSchema = zod.object({
  name: zod.string().min(2, 'Name must be at least 2 characters'),
  email: zod.string().email('Please enter a valid email address'),
  company: zod.string().min(2, 'Company name is required'),
  phone: zod.string().optional(),
  service: zod.string().min(1, 'Please select a service interest'),
  message: zod.string().min(10, 'Message must be at least 10 characters'),
});

type ContactValues = zod.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: 'cloud-migration'
    }
  });

  const onSubmit = async (data: ContactValues) => {
    setStatus('loading');
    console.log('Submitting contact data:', data);
    try {
      // Simulate API Submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const serviceOptions = [
    { value: 'cloud-migration', label: 'Cloud Architecture & Migration' },
    { value: 'enterprise-software', label: 'Enterprise Software Development' },
    { value: 'ai-automation', label: 'AI & Intelligent Automation' },
    { value: 'cyber-security', label: 'Cyber Security & Compliance' },
    { value: 'data-analytics', label: 'Data Analytics & Business Intelligence' },
    { value: 'other', label: 'Other Enterprise Support' },
  ];

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-900 border border-slate-800 rounded-xl text-center">
        <CheckCircle className="w-12 h-12 text-emerald-500 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-400 text-sm max-w-md">
          Thank you for contacting SavoTech. An enterprise solution architect will review your inquiry and reach out within 24 business hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-blue-500 hover:text-blue-400 font-semibold"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput
          id="contact-name"
          label="Full Name"
          placeholder="e.g. John Doe"
          error={errors.name?.message}
          {...register('name')}
        />
        <FormInput
          id="contact-email"
          label="Corporate Email"
          placeholder="e.g. jdoe@company.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput
          id="contact-company"
          label="Company Name"
          placeholder="e.g. Acme Corp"
          error={errors.company?.message}
          {...register('company')}
        />
        <FormInput
          id="contact-phone"
          label="Phone Number (Optional)"
          placeholder="e.g. +1 (555) 000-0000"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>

      <FormSelect
        id="contact-service"
        label="Area of Interest"
        options={serviceOptions}
        error={errors.service?.message}
        {...register('service')}
      />

      <FormTextarea
        id="contact-message"
        label="Project Requirements"
        placeholder="Briefly describe your objectives, timeframe, and budget requirements..."
        error={errors.message?.message}
        {...register('message')}
      />

      {status === 'error' && (
        <p className="text-sm text-red-500 font-medium" role="alert">
          Something went wrong. Please try submitting again.
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
            <span>Sending Message...</span>
          </>
        ) : (
          <span>Submit Request</span>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
