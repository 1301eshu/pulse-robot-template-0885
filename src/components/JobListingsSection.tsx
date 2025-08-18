import React from 'react';
import JobListing from './JobListing';
import { Button } from '@/components/ui/button';
import { SITE_CTA } from "@/components/SITE_CTAs";

const jobListings = [
  {
    title: "Senior Marketing Automation Specialist",
    company: "Growth Natives",
    location: "Work from anywhere",
    type: "Work remotely",
    experience: "3-5 Years experience",
    applicants: 247,
    posted: "2 days ago",
    skills: ["Marketing","Analytics"]
  },
  {
    title: "Salesforce Developer",
    company: "Growth Natives",
    location: "Work from anywhere", 
    type: "Work remotely",
    experience: "2-4 Years experience",
    applicants: 189,
    posted: "1 week ago",
    skills: ["Salesforce", "Integration"]
  },
  {
    title: "Digital Marketing Strategist",
    company: "Growth Natives",
    location: "Work from anywhere",
    type: "Work remotely", 
    experience: "4-6 Years experience",
    applicants: 312,
    posted: "3 days ago",
    skills: ["Strategy", "Analytics"]
  },
  {
    title: "UI/UX Designer",
    company: "Growth Natives",
    location: "Work from anywhere",
    type: "Work remotely",
    experience: "2-5 Years experience", 
    applicants: 156,
    posted: "5 days ago",
    skills: ["Design","User Research"]
  },
  {
    title: "Data Analyst",
    company: "Growth Natives", 
    location: "Work from anywhere",
    type: "Work remotely",
    experience: "1-3 Years experience",
    applicants: 98,
    posted: "1 week ago", 
    skills: ["Analytics","Python"]
  },
  {
    title: "Content Marketing Manager",
    company: "Growth Natives",
    location: "Work from anywhere", 
    type: "Work remotely",
    experience: "3-5 Years experience",
    applicants: 203,
    posted: "4 days ago",
    skills: ["Content", "SEO"]
  }
];

const JobListingsSection: React.FC = () => {
  return (
    // prevent any horizontal spill on small screens
    <section className="py-16 bg-gray-50 overflow-x-clip">
      {/* tighter mobile padding; same at sm+ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built Different? So Are We! 
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            You're not here to fit into a checkbox, we're not here to hand out templated roles. If you vibe with what we're building but don't see your title listed, write to us at
          </p>
        </div>

        {/* ensure children can shrink and not overflow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="min-w-0 max-w-full overflow-hidden"
            >
              <JobListing {...job} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see a role that fits? We're always open to exceptional talent. Send Us Your Resume at .
          </p>
           <SITE_CTA 
              variant="secondary" 
              text="recruitment@growthnatives.com"
              href="mailto:recruitment@growthnatives.com"
              size="md" 
            />
        </div>
      </div>
    </section>
  );
};

export default JobListingsSection;
