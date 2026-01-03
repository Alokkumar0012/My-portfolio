// src/components/Contact.jsx
import React, { useRef, useState } from "react";
// EmailJS library ko import karein
import emailjs from '@emailjs/browser';
// Lucide React se icons import karein, ab Headset icon bhi shamil hai
import { User, Mail, Phone, MessageSquare, Send, Headset } from 'lucide-react';
 
const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setMessageStatus('sending');

    const serviceId = 'service_9rb7lan';
    const templateId = 'template_rqwl4fn';
    const publicKey = 'V4fwrVz2wSaCoYYXM';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setMessageStatus('success');
        form.current.reset();
        setTimeout(() => setMessageStatus(''), 5000);
      }, (error) => {
        console.log('FAILED...', error.text);
        setMessageStatus('error');
        setTimeout(() => setMessageStatus(''), 5000);
      });
  };

  return (
    // Contact section ka main container
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-200 p-8 font-inter
                    dark:bg-gray-50 dark:text-gray-900 transition-colors duration-500"
    >
      {/* Main content wrapper with a flexible layout for image and form */}
      <div className="max-w-4xl mx-auto py-20 bg-gray-800 dark:bg-gray-200 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-center p-8 md:p-12">
        {/* Illustration Section (left side for larger screens) */}
        <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 md:pr-8">
          {/* Placeholder image. Aap yahan apni original PNG illustration ka URL dal sakte hain. */}
                    <img
            src="./images/contact1.png" // Replace with your actual image URL
            alt="Get In Touch Illustration"
            className="w-full max-w-xs md:max-w-md h-auto rounded-lg shadow-lg"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/808080/FFFFFF?text=Image+Error"; }}
          />
        </div>

        {/* Contact Form Section (right side) */}
        <div className="md:w-1/2 w-full">
          {/* Section heading with Headset icon */}
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 text-center flex items-center justify-center space-x-4
                         dark:text-yellow-600">
            <Headset size={40} className="text-gray-200 dark:text-gray-700" /> {/* Headset icon add kiya gaya hai */}
            <span>Get In Touch</span>
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name input field with icon */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600" size={20} />
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Name"
                className="w-full p-3 pl-10 rounded-lg bg-gray-700 border border-gray-600
                           focus:outline-none focus:ring-2 focus:ring-yellow-500
                           placeholder-gray-400 text-white shadow-sm
                           dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-yellow-600"
                aria-label="Your Name"
                required
              />
            </div>
            {/* Email input field with icon */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600" size={20} />
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email"
                className="w-full p-3 pl-10 rounded-lg bg-gray-700 border border-gray-600
                           focus:outline-none focus:ring-2 focus:ring-yellow-500
                           placeholder-gray-400 text-white shadow-sm
                           dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-yellow-600"
                aria-label="Your Email"
                required
              />
            </div>
            {/* Phone input field with icon */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600" size={20} />
              <label htmlFor="phone" className="sr-only">Phone</label>
              <input
                type="tel" // 'tel' type for phone numbers
                id="phone"
                name="user_phone" // EmailJS ko yeh name attribute chahiye
                placeholder="Phone"
                className="w-full p-3 pl-10 rounded-lg bg-gray-700 border border-gray-600
                           focus:outline-none focus:ring-2 focus:ring-yellow-500
                           placeholder-gray-400 text-white shadow-sm
                           dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-yellow-600"
                aria-label="Your Phone Number"
              />
            </div>
            {/* Message textarea with icon */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-400 dark:text-gray-600" size={20} />
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Message"
                className="w-full p-3 pl-10 rounded-lg bg-gray-700 border border-gray-600
                           focus:outline-none focus:ring-2 focus:ring-yellow-500
                           placeholder-gray-400 text-white shadow-sm resize-y
                           dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-yellow-600"
                aria-label="Your Message"
                required
              ></textarea>
            </div>
            {/* Submit button with icon */}
            <button
  type="submit"
  disabled={messageStatus === 'sending'}
  className="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg
             hover:bg-yellow-400 transform hover:scale-105 transition duration-300 ease-in-out
             focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-70
             dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:text-white
             flex items-center justify-center gap-3" 
>
  {/* Text aur Icon ek hi level par rahenge */}
  <span className="leading-none">
    {messageStatus === 'sending' ? 'Sending...' : 'Submit'}
  </span>

  {/* Icon tabhi dikhega jab sending state na ho */}
  {messageStatus !== 'sending' && (
    <Send size={18} className="shrink-0 transition-transform" />
  )}

  {/* Agar aap loading spinner dikhana chahte hain sending ke waqt */}
  {messageStatus === 'sending' && (
    <div className="animate-spin h-5 w-5 border-2 border-gray-900 border-t-transparent rounded-full"></div>
  )}
</button>

            {/* Message status feedback */}
            {messageStatus === 'success' && (
              <p className="mt-4 text-green-500 font-semibold text-center">
                Message sent successfully!
              </p>
            )}
            {messageStatus === 'error' && (
              <p className="mt-4 text-red-500 font-semibold text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
