import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import NeonButton from '../ui/NeonButton';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder for EmailJS Service IDs
    // Replace these with your actual IDs from emailjs.com
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    // If IDs are missing, simulate a successful send for demo purposes
    if (serviceId === 'YOUR_SERVICE_ID') {
      setTimeout(() => {
        setLoading(false);
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      }, 1500);
      return;
    }

    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name,
        to_name: 'Naveen Kumar K',
        from_email: form.email,
        to_email: 'nv01110612@gmail.com',
        message: form.message,
      },
      publicKey
    )
    .then(() => {
      setLoading(false);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, (error) => {
      setLoading(false);
      setStatus('error');
      console.error(error);
      setTimeout(() => setStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's build something amazing together."
        />

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col gap-6"
          >
            <GlassCard className="p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-neon-purple group-hover:border-neon-purple group-hover:shadow-neon-purple transition-all duration-300">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                    <a href="mailto:nv01110612@gmail.com" className="text-white hover:text-neon-purple transition-colors break-all">
                      nv01110612@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-neon-blue group-hover:border-neon-blue group-hover:shadow-neon-blue transition-all duration-300">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                    <a href="tel:+919360931606" className="text-white hover:text-neon-blue transition-colors">
                      +91 9360931606
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                    <p className="text-white">Krishnagiri, TN</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <GlassCard className="p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-300 font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-300 font-medium">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-300 font-medium">Your Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hello Naveen, I would like to talk about..."
                    required
                    className="bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors resize-none"
                  />
                </div>

                <NeonButton 
                  type="submit" 
                  variant="primary" 
                  className="w-full sm:w-auto self-end mt-2"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : (
                    <>
                      Send Message <FiSend className="ml-2" />
                    </>
                  )}
                </NeonButton>

                {status === 'success' && (
                  <p className="text-green-400 text-sm text-center mt-4">Thank you! Your message has been sent successfully.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center mt-4">Oops! Something went wrong. Please try again.</p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
