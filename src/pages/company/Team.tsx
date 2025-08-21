"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroStacked from "@/components/aboutbanner";
import InstagramSection from "@/components/ui/component_16";
import BentoGallery from '@/components/ui/BentoGallery';
import ContactCta from "@/components/ui/component_6";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import { ChevronLeft, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

// You can expand bios per member here:
const teamMembers = [
  {
    name: "Taranbir Singh Nandha",
    role: "Founder & Chief Executive Officer",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Taran.webp",
    linkedin: "https://www.linkedin.com/in/tarancmo/",
    bio: (
      <>
        <p>
         Taran is a seasoned marketing professional with over 20 years of experience spread across 5 countries and 3 continents. He is an innovative go-to-market strategist, team builder, and result-oriented global business leader, having innate understanding of marketing technology and eCommerce as well as expertise in enabling high-impact digital experiences for customers and prospects that result in sustainable growth. 
        </p>
        <p>
          Taran is proficient in creating systems that result in improved accountability, ROI measurement, better sales, and long-term customer satisfaction.
        </p>
        <p>
          Prior to starting Growth Natives, he worked for various companies such as i2 Technologies, Trend Micro, Cvent, and Birdeye at CMO, vice presidential, and managerial positions.
        </p>
        <p>
          Taran is a graduate from UC Irvine with an MBA in 2000 and has an engineering degree from Panjab University.
        </p>
      </>
    )
  },
  {
    name: "Balwinder Kaur",
    role: "Co-Founder",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Balwinder.webp",
    linkedin: "https://www.linkedin.com/in/balwinder-kaur-a6b4765/",
    bio: (
      <>
        <p>
         Balwinder Kaur is a result-oriented technology and business professional with over 20 years of experience in technology and finance, managing people, processes, data, and systems. She has excellence at partnering with business leaders to drive growth through transformational technology solutions.  
        </p>
        <p>
       Balwinder is also adept at creating organization vision & strategy and converting it to actionable projects and initiatives. She has a proven track record of establishing and nurturing high-performing global teams to deliver business solutions. In addition, Balwinder has extensive experience in managing large-scale cross-functional programs from concept to delivery. 
        </p>
      </>
    )
  },
  {
    name: "Rahul Sindwani ",
    role: "VP – Operations ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Rahul.webp",
    linkedin: "https://www.linkedin.com/in/rahul-sindwani/",
    bio: (
      <>
        <p>
         Rahul carries 20+ years of rich global experience in product development, web & mobile applications, marketing automation tools, Healthcare software, and various enterprise-level solutions.
        </p>
        <p>
        Throughout his career, Rahul has served more than 350 clients, including Fortune 500 companies. He is a dynamic leader with a strong EQ and a business consultant who has helped companies grow and expand to new markets. 
        </p>
      </>
    )
  },
  {
    name: "Arpit Srivastava ",
    role: "VP - Digital Marketing & Analytics ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Arpit.webp",
    linkedin: "https://www.linkedin.com/in/arpitsrivastava3/",
    bio: (
      <>
        <p>
          With over 17 years of experience spanning Data analytics, Product Marketing, MarTech consulting, ABM and Product management, Arpit currently serves as the VP of Growth Marketing & Analytics.  
        </p>
        <p> Additionally, he is Co-Founder and Product Head at DiGGrowth, a startup dedicated to revolutionizing marketing intelligence & spend optimization using AI and Data driven strategies. He is passionate about creating impactful products & services that address real problems and deliver value to clients.</p>
      </>
    )
  },
  {
    name: "Rukman Singh  ",
    role: "Sr. Director - Customer Success & Experience ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Rukman.webp",
    linkedin: "https://www.linkedin.com/in/rukman-singh-3690a4106/",
    bio: (
      <>
        <p>
          While Rukman has always been a creative person, she began her career at Pepperdine University, gaining unparalleled experience in the research space of Organizational Behavior and Management.
        </p>
        <p> Her expertise is creating top-notch content, messaging, and brand image, which is crucial to our customers’ marketing efforts. She is passionate about constructing holistic digital experiences through eye-catching design that simplifies & beautifies the user journey.</p>
        <p>Equipped with an undergraduate degree in communication and a masters degree in management, she has optimized and channeled her natural creative streak into a professional skill and adapted it to the business world.  </p>
        <p> Currently working as a creative director and head of customer success management for Growth Natives, Rukman is widely known for her creative abilities, and managerial expertise. While her engagements have taken her around the world, Rukman is proud to call Growth Natives home. </p>
      </>
    )
  },
  
  {
    name: "Gaurav Rajput ",
    role: "Sr. Director – MarTech ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/GR.webp",
    linkedin: "https://www.linkedin.com/in/gauravbreathesmarketing/",
    bio: (
      <>
        <p>
          Gaurav is a seasoned marketing operations professional with extensive experience of 14 years working in Marketo, Eloqua, and HubSpot. He brings to the table additional expertise in SQL Databases. In addition to leading a fleet of marketing operations experts, he always ensures that his customers get as seamless experiences as possible.
        </p>
        <p> Prior to Growth Natives, Gaurav has led marketing operations teams for companies such as Cvent, British Telecom, and Birdeye. Gaurav holds a B.Tech degree in Computer Science from UPTU, Lucknow.</p>
      </>
    )
  },
   
  {
    name: "Sumeet Rana  ",
    role: "VP – Technology ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Sumeet.webp",
    linkedin: "https://www.linkedin.com/in/sumeet-rana-03242363/",
    bio: (
      <>
        <p>
          Sumeet is a product enthusiast and technology expert with more than 10 years of experience in building and leading tech teams. He holds technical expertise in large-scale applications.  
        </p>
        <p> Sumeet is equally well-versed in building products from the ground up. NetworkON is one such product that is serving thousands of requests per second that are delivered by the backend systems. </p>
      </>
    )
  },
  {
    name: "Tushar Misri  ",
    role: "Sr. Director - Salesforce   ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Tushar.webp",
    linkedin: "",
    bio: (
      <>
        <p>
         Tushar possesses a rich experience of 11+ years in different tech stacks like Salesforce and Asp.Net. A developer who loves to acquire new skill sets to improvise in providing customers with optimal solutions keeping business perspective and customer success at the top of his mind.  
        </p>
        <p> He has worked on multiple projects ranging from Sales, Service, Experience, CPQ & Revenue and Non-Profit Cloud, serving customers from different industries. Worked on multiple integrations like Zendesk, Jive, created different products in Asp.net that act as a middleware for Salesforce and other tech stacks. </p>
      </>
    )
  },
  {
    name: "Sameer Pawar  ",
    role: "Director - Growth Marketing  ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Sameer.webp",
    linkedin: "https://www.linkedin.com/in/sameernpawar/",
    bio: (
      <>
        <p>
          Sameer brings over twenty years of experience in both B2B and B2C sectors, fueled by a passion for the endless queries humanity searches on Google. He champions the idea that top-tier analysts should focus on distilling clear, actionable insights from big data, rather than pursuing perfection.
        </p>
        <p>His expertise spans developing tailored multi-channel growth strategies, covering areas such as SEO/ASO, paid social media, and both traditional and digital advertising. He also focuses on building effective growth and sales team functions. </p>
        <p>Sameer contributes to both the strategic frameworks and the innovative edge of his teams by mentoring the next generation of Growth Architects</p>
        <p> As a thought leader, he actively engages in discussions on emerging business and technology trends, ensuring his projects are aligned with the best practices. His mentorship is dedicated to enhancing the technical skills and core competencies of his team, embracing a broad interest in people, processes, and data-driven growth.  </p>
      </>
    )
  },
  {
    name: "Akanksha Dass  ",
    role: "Director of Marketing & Communications  ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Akansha.webp",
    linkedin: "https://www.linkedin.com/in/akanksha-dass-225401145/",
    bio: (
      <>
        <p>
         Akanksha leads Growth Natives’ marketing strategy and brand voice in an AI-first world. With over 15 years of B2B experience, she blends expertise in content, email, inbound, social, and copy with a deep understanding of marketing technology and emerging AI capabilities.  
        </p>
        <p>A gourmet coffee loyalist and proud geek-speak translator, she turns complex tech into clear, compelling narratives that perform in-market and in-machine. Today, she spearheads Growth Natives’ multi-channel growth initiatives, guiding a high-performing team with purpose, passion, and empathy — and connecting every campaign to measurable business impact. </p>
      </>
    )
  },
  {
    name: "Abeer Aulakh  ",
    role: "Director of Marketing & Communications – DiGGrowth  ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Abeer.webp",
    linkedin: "https://www.linkedin.com/in/abeeraulakh/",
    bio: (
      <>
        <p>
         Abeer leads DiGGrowth’s marketing strategy, shaping the brand’s voice and growth engine in an AI-driven landscape. With over 15 years of expertise in content marketing, strategic planning, and full-funnel execution, he has helped transform marketing for Fortune 500 companies across industries.  
        </p>
        <p>A certified inbound marketer, Abeer blends human insight with data-driven intelligence, orchestrating demand generation, positioning, and go-to-market strategies that deliver measurable impact. When he’s not steering the next growth play, you’ll find him long-distance running, reading, or strumming his guitar. </p>
      </>
    )
  },
  {
    name: "Rahul Sharma  ",
    role: "Associate Director - MarTech  ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Rahul-1.webp",
    linkedin: "https://www.linkedin.com/in/rahul-sharma-b5b8ba61/",
    bio: (
      <>
        <p>
          Rahul is an experienced senior marketer with a demonstrated history of working in the information technology and services industry. He is skilled in customer service, sales, marketing strategy, customer relationship management (CRM), and social media.
        </p>
       
      </>
    )
  },
  {
    name: "Akhil Yadav  ",
    role: "Associate Director – Product ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Akhil.webp",
    linkedin: "https://www.linkedin.com/in/akhil-yadav-pm03/",
    bio: (
      <>
        <p>
        With approximately 14 years of comprehensive experience in both Operations and Management, which includes approx. 3years in HR field, I have evolved from a dedicated recruiter to a proficient HR lead. Throughout my journey, I have adeptly managed administrative tasks while executing all HR duties, spanning from onboarding processes to overseeing operations. 
        </p>
        <p>As a seasoned operations and management professional in the Service and Sales Industry, I bring a wealth of expertise garnered over the years. From leading inbound and outbound queues to assuming roles as both a motivated Team leader and an Assistant manager, I have consistently demonstrated exceptional efficiency. In my capacity as an escalation point, I excel in resolving critical issues faced by team members.  </p>
        <p>Over time, I have built a solid reputation for effectively guiding teams to align with corporate objectives while motivating them to achieve both organizational and personal milestones. 
My strength lies in strategizing, directing, and harmonizing team efforts to optimize workflow and productivity. I am committed to contributing my skills and experience towards the seamless planning, direction, and coordination of work within any organizational setting</p>
      </>
    )
  },
  {
    name: "Geeta Patial   ",
    role: "Sr. Manager - Human Resources  ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Geeta.webp",
    linkedin: "https://www.linkedin.com/in/geeta-patial-7332531b0/",
    bio: (
      <>
        <p>
         With approximately 14 years of comprehensive experience in both Operations and Management, which includes approx. 3years in HR field, I have evolved from a dedicated recruiter to a proficient HR lead. Throughout my journey, I have adeptly managed administrative tasks while executing all HR duties, spanning from onboarding processes to overseeing operations. 
        </p>
        <p>As a seasoned operations and management professional in the Service and Sales Industry, I bring a wealth of expertise garnered over the years. From leading inbound and outbound queues to assuming roles as both a motivated Team leader and an Assistant manager, I have consistently demonstrated exceptional efficiency. In my capacity as an escalation point, I excel in resolving critical issues faced by team members.  </p>
      <p>Over time, I have built a solid reputation for effectively guiding teams to align with corporate objectives while motivating them to achieve both organizational and personal milestones. My strength lies in strategizing, directing, and harmonizing team efforts to optimize workflow and productivity. I am committed to contributing my skills and experience towards the seamless planning, direction, and coordination of work within any organizational setting</p>
      </>
    )
  },
  {
    name: "Balpreet Singh   ",
    role: "Engineering Leader   ",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Balpreet.webp",
    linkedin: "https://www.linkedin.com/in/balpreetbrar/",
    bio: (
      <>
        <p>
         Balpreet Singh is an Engineering Leader with 6+ years of experience. In my expertise, He is skilled in building and motivating high-performing engineering teams. His expertise comes mostly in high-scale web projects and key technologies using React, Angular, Node.js, GraphQL, AWS, ES6, Accessibility, and SEO. 
        </p>

      </>
    )
   }
         
  // ... rest of team members (unchanged)
];

function LinkedInButton({
  href,
  className = "",
}: { href: string; className?: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on LinkedIn"
      className={[
        "rounded-full bg-[#0A66C2] flex items-center justify-center",
        "hover:opacity-80 transition-opacity shadow",
        // default size; override with parent utilities if needed
        "w-12 h-12 md:w-16 md:h-16",
        className,
      ].join(" ")}
    >
      {/* White LinkedIn "in" glyph */}
      <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 text-white" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.447 20.452H17.2v-5.569c0-1.328-.024-3.039-1.852-3.039-1.853 0-2.136 1.447-2.136 2.944v5.664H9.069V9h3.112v1.561h.044c.434-.82 1.494-1.685 3.074-1.685 3.29 0 3.897 2.165 3.897 4.983v6.593zM5.337 7.433A1.817 1.817 0 1 1 7.154 5.616c0 1.003-.814 1.817-1.817 1.817zM6.812 20.452H3.861V9h2.951v11.452z"
        />
      </svg>
    </a>
  );
}


// ================== Modal ==================
function TeamMemberModal({
  open,
  onClose,
  member,
}: {
  open: boolean;
  onClose: () => void;
  member: any;
}) {
  const backBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => backBtnRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [open, onClose]);

  if (!open || !member) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} details`}
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* ========== MOBILE ========== */}
      <div
        className="md:hidden fixed inset-0 bg-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-3 py-3 border-b border-gray-200 bg-white">
          <button
            ref={backBtnRef}
            onClick={onClose}
            className="p-2 -ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Back"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="text-sm font-medium truncate max-w-[60%] text-gray-900 text-center">
            {member.name}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-4 pb-[calc(env(safe-area-inset-bottom)+20px)]">
          <div className="pt-4">
            <div className="relative w-full rounded-xl overflow-hidden bg-black/5 mb-4 flex items-center justify-center">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="block w-full h-auto max-h-[50vh] object-contain"
              />
              {member.linkedin && (
                <LinkedInButton
                  href={member.linkedin}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2"
                />
              )}
            </div>
            
    {/* ✅ add back these */}
    <h2 className="text-2xl font-semibold mt-2">{member.name}</h2>
    <p className="text-gray-700 mb-4">{member.role}</p>
    <div className="prose prose-sm max-w-none text-gray-700">{member.bio}</div>
  </div>
</div>
          
      </div>

      {/* ========== DESKTOP ========== */}
      <div
        className="hidden md:flex fixed inset-0 items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-2xl max-w-4xl w-[90%] p-8 relative flex flex-col md:flex-row gap-8 shadow-2xl">
          <button
            className="absolute top-6 right-6 text-gray-700 hover:text-gray-900"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative w-[300px] h-[360px] bg-black rounded-2xl overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-contain"
              />
              {member.linkedin && (
                <LinkedInButton
                  href={member.linkedin}
                  className="absolute bottom-5 left-1/2 -translate-x-1/2"
                />
              )}
            </div>
          </div>

          {/* Details (desktop) — same height as image; bio scrolls */}
          <div className="flex-1 min-w-0">
            <div className="h-[360px] flex flex-col">
              {/* header fixed */}
              <div className="pb-2">
                <h2 className="text-3xl font-bold mb-1">{member.name}</h2>
                <h4 className="text-gray-700 text-lg font-medium">{member.role}</h4>
              </div>

              {/* only this scrolls if text is long */}
              <div className="mt-3 flex-1 overflow-y-auto pr-3">
                <div className="text-gray-700 space-y-3 text-base leading-relaxed">
                  {member.bio}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================== Main Team Page ==================
const Team = () => {
  const ceos = teamMembers.slice(0, 2);
  const remaining = teamMembers.slice(2);

  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main>
        <HeroStacked
          heading="The Crew Building Growth,"
          highlight="Natively"
          subtext="At Growth Natives, leadership isn’t a title — it’s a mindset. Fueled by AI, sharp thinking, and just the right amount of disruption, our leaders turn momentum into measurable growth."
          imageSrc="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/about%20us/Hero.webp"
          hideCta
        />

        {/* Gradient applied here */}
        <section className="pt-[100px] pb-[40px] text-center">
          <h2 className="text-4xl font-bold text-black mb-2">
            Meet the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            The people behind the magic — leading with passion, vision, and
            integrity.
          </p>
        </section>

        <section className="container mx-auto px-6 pb-20">
          {/* CEOs */}
          <div className="flex justify-center flex-wrap gap-6 mb-12">
            {ceos.map((member, i) => (
              <button
                key={i}
                onClick={() => setSelected(member)}
                aria-label={`Open details for ${member.name}`}
                tabIndex={0}
                className="w-[250px] h-[380px] rounded-2xl overflow-hidden relative focus:outline-blue-400"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute bottom-10 left-0 right-0 px-4 pb-1 text-center z-10">
                  <h3 className="text-base font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs text-white mt-1">
                    {member.role}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Everyone else */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {remaining.map((member, i) => (
              <button
                key={i}
                onClick={() => setSelected(member)}
                aria-label={`Open details for ${member.name}`}
                tabIndex={0}
                className="w-[250px] h-[380px] rounded-2xl overflow-hidden relative focus:outline-blue-400"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute bottom-10 left-0 right-0 px-4 pb-1 text-center z-10">
                  <h3 className="text-base font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs text-white mt-1">
                    {member.role}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Modal */}
          <TeamMemberModal open={!!selected} onClose={() => setSelected(null)} member={selected} />

          <InstagramSection />
          <BentoGallery />
          <ContactCta 
            heading="Growth Natives – Let’s Build What Breaks the Mold "
            subtext="Join us on a journey where bold ideas meet real expertise and success is engineered. "
            buttonLabel="Talk to Us!"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
