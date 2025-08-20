import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import HeroSection from "@/components/ui/component_7";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, Handshake, Crosshair, Puzzle, BookOpenCheck, BarChart3, Rocket } from "lucide-react";
import EditableTextBlock from "@/components/ui/component_20";
import CoreValues from "@/components/c23";
import { ValueType } from "@/components/ui/component_11";
import ContactCta from "@/components/ui/component_6";
import InstagramSection from "@/components/ui/component_16";
import JobListingsSection from "@/components/JobListingsSection";


export const aboutPageValues: ValueType[] = [
  {
    icon: Handshake,
    title: "Work-Life Fit, Not Just Balance  ",
    description: "You don’t have to “balance” work when it fits your life. We flex hours and expectations, so you can be present where it matters most. "
  },
  {
    icon: Crosshair,
    title: "Culture Built for Creators & Doers  ",
    description: "We celebrate good memes and good metrics equally. You’ll find curiosity, hustle, and weird genius everywhere.  "
  },
  {
    icon: Puzzle,
    title: "Health Insurance  ",
    description: "Your health matters to us. That’s why Growth Natives partners with ICICI Lombard to provide health insurance for you, your partner, and your family. Real support, where it counts.  "
  },
  {
    icon: BookOpenCheck,
    title: "Leave Flexibility   ",
    description: "Take the time you need, whether it’s for rest, family, or just a breather. No long explanations, no red tape. Just trust and flexibility.  "
  },
  {
    icon: BarChart3,
    title: "Cross-Functional Exposure  ",
    description: "Work across teams, not in silos. Understand business, tech, creative and become multidimensional."
  },
  {
    icon: Rocket,
    title: "Mental Wellness Matters ",
    description: "Your health is our priority. We host regular sessions with pro in-house consultants so you can unplug, decompress, and handle the hustle without burning out. "
  }
];

const Careers = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main>
        <HeroSection
          heading=" We Don't Do Ordinary and Neither Should You "
          subtext="No cookie-cutter roles. Just space to do what you do best and reinvent as you go. Join us now!"
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
           rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/Careers/Career.webp"
          centerText // ✅ makes text centered & hides right image
          noCta // ✅ just add this 
        />

        <JobListingsSection />

       <CoreValues
         values={aboutPageValues}
         heading="Get Unstuck. Get Growing. Get to Growth Natives." />

        <InstagramSection />

        <ContactCta
          heading="Let's Build Your Next Growth Chapter"
          subtext="With AI at the core and clarity at every step, we're here to make growth feel less chaotic—and a whole lot more scalable."
          buttonLabel="Book Your Strategy Call"
          buttonLink="/contact"
        />
        
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
