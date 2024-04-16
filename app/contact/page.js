import React from 'react';
import Header from '../components/header';

const ContactPage = () => {
  return (
    <div className="">
      <Header/>
      <div className="bg-green-200 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">
          Have a question or feedback? We would love to hear from you!
        </p>
        <form className="max-w-md">
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 border rounded-lg" type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded-lg" type="email" id="email" name="email" placeholder="Your email" required />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 border rounded-lg" id="message" name="message" rows="4" placeholder="Your message" required></textarea>
          </div>
          <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800" type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
