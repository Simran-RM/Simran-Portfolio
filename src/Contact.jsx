import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message
      }
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    }).catch((err) => {
      console.log('FAILED...', err);
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="min-h-screen bg-[#e6e6e6] py-8 px-4 flex justify-center">
      <div className="rounded-lg shadow-xl p-6 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#2C3E50]">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-6">
            <div className="w-full">
              <label className="block mb-1 text-gray-500 font-semibold">First Name</label>
              <input 
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required 
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 text-gray-500 font-semibold">Last Name</label>
              <input 
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required 
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-500 font-semibold">Email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required 
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-500 font-semibold">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="5"
              required 
            />
          </div>

          <div className="text-center">
            <button 
              type="submit"
              disabled={loading}
              className="bg-yellow-500 text-white py-3 px-5 rounded-xl shadow-xl text-lg font-semibold hover:bg-yellow-600 transition-colors w-[#50px] md:w-auto">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>

        {success && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
        {error && <p className="text-red-500 text-center mt-4">Failed to send the message. Please try again.</p>}
      </div>
    </div>
  );
};

export default Contact;
