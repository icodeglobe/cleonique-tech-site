// src/components/ContactForm.tsx
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => setStatus("Message sent! We'll get back to you soon."), 1000);
  };

  return (
    <div className="py-20 px-6 md:px-40 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-4 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-4 border rounded-lg"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="w-full p-4 border rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="bg-teal-600 text-white py-3 px-6 rounded-xl shadow-md hover:bg-teal-700 transition"
        >
          Send Message
        </button>
        {status && <p className="text-sm text-center text-green-600 mt-2">{status}</p>}
      </form>
    </div>
  );
}
