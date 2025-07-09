// src/components/Services.tsx
const services = [
  {
    title: "Website Design & Development",
    description: "Responsive, fast, and user-friendly websites tailored to UK market standards.",
    icon: "🌐",
  },
  {
    title: "Custom Software Solutions",
    description: "Scalable systems built to meet unique business needs, including SaaS tools and internal platforms.",
    icon: "🧠",
  },
  {
    title: "Calendar & API Integrations",
    description: "Google/Outlook calendar sync, third-party APIs, and real-time automation.",
    icon: "📅",
  },
  {
    title: "Live Chat & CRM",
    description: "Integrated support tools and client management systems for real-time communication.",
    icon: "💬",
  },
];

export default function Services() {
  return (
    <div className="py-20 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Our Core Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 rounded-xl shadow-md hover:shadow-xl border bg-teal-50 text-left transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
