import { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group bg-gray-50 hover:bg-gradient-to-br from-[#051946] to-[#0A3E5E] text-gray-900 hover:text-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      
      {/* Icon */}
      <div className="w-12 h-12 bg-gray-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed">{description}</p>

      {/* CTA */}
      <div className="mt-4 inline-flex items-center font-semibold text-black group-hover:text-white transition-all duration-300">
        Learn More
        <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </div>
  );
}
