import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import HeroSection from "@/components/ui/component_7";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

const jobListings = [
  {
    id: 1,
    title: "Product Designer",
    company: "Gojek",
    type: "Full-time",
    urgency: "Urgently hiring",
    location: "Marina East, Singapore",
    posted: "5 mins ago",
    description: [
      "Within this role, you will be creating content for a wide range of local and international clients",
      "This role is suited to Bali based creatives looking to work in-house.",
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Gojek_logo_2020.svg",
    color: "green",
  },
  {
    id: 2,
    title: "Copywriting Specialist",
    company: "Odama Studio",
    type: "Freelance",
    salary: "$1,600–$1,800 USD",
    location: "Paris, France",
    posted: "3 days ago",
    description: [
      "Collaborate with the marketing team to optimize conversion",
      "Develop inspiring, persuasive, and convincing copy for a wide array of writing needs",
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fire_Icon.svg/2048px-Fire_Icon.svg.png",
    color: "orange",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Twitter",
    type: "Full-time",
    salary: "$100–$2,000 USD",
    location: "Málaga, Spain",
    posted: "3 days ago",
    description: [
      "Responsible for designing, planning, and testing of any projects/products",
      "Building effective and reusable modules that will enhance user experience in each project/product",
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg",
    color: "blue",
  },
];

const Careers = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main>
        <HeroSection
          heading="Careers "
          subtext="Are you ready to harness your full potential? Join us and grow with Growth Natives!"
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png"
        />

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">We're Hiring!</h2>
          </div>

         <div className="max-w-5xl mx-auto space-y-6">
  {jobListings.map((job) => (
    <div
      key={job.id}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 duration-200"
    >
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        {/* Left Content */}
        <div className="flex-1">
          {/* Header with Logo */}
          <div className="flex items-start gap-4 mb-3">
            <img
              src={job.logo}
              alt={job.company}
              className="h-10 w-10 rounded-md object-contain bg-white border border-gray-200"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.company}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium">{job.type}</span>
            {job.urgency && (
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded font-medium">
                {job.urgency}
              </span>
            )}
            {job.salary && (
              <span className="text-gray-500 font-medium">• {job.salary}</span>
            )}
          </div>

          {/* Description */}
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {job.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Right Side Info */}
        <div className="flex flex-col justify-between items-end">
          <div className="text-sm text-right mb-4">
            <div className="flex items-center gap-1 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
              <Clock className="w-4 h-4" />
              <span>Posted {job.posted}</span>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2">
            Apply now
          </Button>
        </div>
      </div>
    </div>
  ))}
</div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
