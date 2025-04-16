import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleBlur = () => {
    setErrors(validate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-10 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

      {submitted && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
          Message sent successfully!
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-white"
            onBlur={handleBlur}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-white"
            onBlur={handleBlur}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <textarea
            placeholder="Your message"
            className="w-full p-3 border border-gray-300 rounded h-32 bg-transparent text-white placeholder-white"
            onBlur={handleBlur}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 text-white p-3 rounded hover:bg-teal-500 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;