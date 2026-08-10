import React from 'react';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-blue-500" />,
      title: 'Global Headquarters',
      desc: '100 Congress Ave Suite 2000, Austin, TX 78701'
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-500" />,
      title: 'Phone & Direct Line',
      desc: '+1 (800) 555-0199'
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-500" />,
      title: 'Email Correspondence',
      desc: 'partner@savotech.com'
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-500" />,
      title: 'Business Hours',
      desc: 'Monday - Friday, 9:00 AM - 6:00 PM EST'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-950 border-t border-slate-900" id="contact-section">
      <Container>
        <SectionTitle
          title="Schedule an Architecture Call"
          tagline="Contact Us"
          subtitle="Collaborate with our Staff Engineers. Submit your requirements or timeline objectives."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Contact info grid */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Have an upcoming migration, need a zero-trust network audit, or want to deploy our proprietary SaaS suites? Fill out the contact form, and we will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-5">
              {contactDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start p-4 bg-slate-900/40 border border-slate-800 rounded-xl"
                >
                  <div className="p-2.5 bg-blue-600/10 border border-blue-500/20 rounded-lg mr-4 flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{detail.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-normal">{detail.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form container card */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
