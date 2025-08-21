
import React from 'react';
import { MapPin, Clock, Users, Building2, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface JobListingProps {
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  applicants: number;
  posted: string;
  skills: string[];
  logo?: string;
}

const JobListing: React.FC<JobListingProps> = ({
  title,
  company,
  location,
  type,
  experience,
  applicants,
  posted,
  skills,
  logo
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            {logo ? (
              <img src={logo} alt={company} className="w-8 h-8 object-contain" />
            ) : (
              <Building2 className="w-6 h-6 text-white" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{company}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {type}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {experience}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        {skills.map((skill, index) => (
          <Badge 
            key={index}
            className="bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
          >
            <CheckCircle className="w-3 h-3 mr-1" />
            {skill}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{applicants} applied • {posted}</span>
        <span className="text-green-600 font-medium">4 month details</span>
      </div>
    </div>
  );
};

export default JobListing;
