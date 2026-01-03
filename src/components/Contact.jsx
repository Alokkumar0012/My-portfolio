import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { User, Mail, Phone, MessageSquare, Send, Headset, Loader2 } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(''); // '', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setMessageStatus('sending');

    // Aapki IDs jo aapne share ki thin
    const serviceId = 'service_9rb7lan';
    const templateId = 'template_rqwl4fn';
    const publicKey = 'V4fwrVz2wSaCoYYXM';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        setMessageStatus('success');
        form.current.reset();
        // 5 seconds baad success message hata dein
        setTimeout(() => setMessageStatus(''), 5000);
      }, (error) => {
        console.error('FAILED...', error.text);
        setMessageStatus('error');
        setTimeout(() => setMessageStatus(''), 5000);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-white text-gray-900 p-4 md:p-8 font-inter
                 dark:bg-black dark:text-white transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto py-10 bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center overflow-hidden border border-gray-200 dark:border-gray-800">
        
        {/* Left Side: Illustration */}
        <div className="md:w-1/2 p-8 flex justify-center items-center bg-yellow-50 dark:bg-gray-800/50 h-full">
          <img
            src="./images/contact1.png" 
            alt="Contact Illustration"
            className="w-full max-w-sm h-auto drop-shadow-2xl"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/FFB800/333333?text=Contact+Us"; }}
          />
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 w-full p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 dark:text-yellow-500 mb-8 flex items-center gap-3">
            <Headset size={36} />
            <span>Get In Touch</span>
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="w-full p-3 pl-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition-all dark:text-white"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                className="w-full p-3 pl-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition-all dark:text-white"
                required
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className="w-full p-3 pl-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition-all dark:text-white"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-400" size={18} />
              <textarea
                name="message"
                rows="4"
                placeholder="How can I help you?"
                className="w-full p-3 pl-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition-all dark:text-white resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={messageStatus === 'sending'}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {messageStatus === 'sending' ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>

            {/* Feedback Messages */}
            {messageStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-center font-medium animate-bounce">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}
            {messageStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-center font-medium">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
