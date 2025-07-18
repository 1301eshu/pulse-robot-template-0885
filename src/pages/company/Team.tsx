"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/ui/component_7";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

const teamMembers = [
  {
    name: "Taranbir Singh Nandha",
    role: "Founder & Chief Executive Officer",
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1752587362/taran_nandha_iuixag.webp",
  },
  {
    name: "Balwinder Kaur",
    role: "Co-Founder",
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1752587362/taran_nandha_iuixag.webp",
  },
  {
    name: "John Doe",
    role: "VP of Engineering",
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1752587362/taran_nandha_iuixag.webp",
  },
  {
    name: "Jane Smith",
    role: "Head of Marketing",
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1752587362/taran_nandha_iuixag.webp",
  },
  {
    name: "Saurav Raj",
    role: "VP of Product",
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1752587362/taran_nandha_iuixag.webp",
  },
];

const Team = () => {
  const ceos = teamMembers.slice(0, 2);
  const remaining = teamMembers.slice(2);

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main>
        {/* HERO Section */}
        <HeroSection
          heading="Leadership"
          subtext="Our leaders foster a diverse, all-inclusive environment that supports, productively challenges, and empowers everyone to become future leaders."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png"
        />

        {/* Team Intro */}
        <section className="pt-[100px] pb-[40px] text-center">
          <h2 className="text-4xl font-bold text-black mb-2">
            Meet the <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            The people behind the magic — leading with passion, vision, and integrity.
          </p>
        </section>

        {/* Team Members Section */}
        <section className="container mx-auto px-6 pb-20">
          {/* CEO Row (centered) */}
          <div className="flex justify-center flex-wrap gap-6 mb-12">
            {ceos.map((member, index) => (
              <div
                key={index}
                className="w-[250px] bg-black rounded-2xl overflow-hidden shadow-lg text-white relative"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-contain"
                />
                <div className="absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black via-black/60 to-transparent">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining Members */}
          <div className="flex justify-center flex-wrap gap-6">
            {remaining.map((member, index) => (
              <div
                key={index}
                className="w-[250px] bg-black rounded-2xl overflow-hidden shadow-md text-white relative"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-contain"
                />
                <div className="absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black via-black/60 to-transparent">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

{/* Instagram Section */}
<section className="bg-[#0d1117] text-white py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left Side: Text + Button */}
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Follow Us on <span className="font-cursive text-5xl">Instagram</span>
      </h2>
      <div className="flex items-center space-x-4">
        <img
          src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1695653286/gn_icon_fz4ezt.png"
          alt="Growth Natives Icon"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-lg font-medium">Growthnatives</span>
        <a
          href="https://www.instagram.com/growthnatives/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
        >
          Follow
        </a>
      </div>
    </div>

    {/* Right Side: Instagram Grid */}
    <div className="grid grid-cols-2 gap-4">
      {[
        "https://res.cloudinary.com/dhbhumz3q/image/upload/v1752000502/Frame_2121453492_hfj4i8.png",
        "https://res.cloudinary.com/dhbhumz3q/image/upload/v1752000502/Frame_2121453492_hfj4i8.png",
        "https://res.cloudinary.com/dhbhumz3q/image/upload/v1752000502/Frame_2121453492_hfj4i8.png",
        "https://res.cloudinary.com/dhbhumz3q/image/upload/v1752000502/Frame_2121453492_hfj4i8.png",
      ].map((src, i) => (
        <div key={i} className="relative group rounded overflow-hidden">
          <img
            src={src}
            alt={`Instagram ${i + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="w-12 h-12"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Life at Growth Natives Section */}
<section className="bg-[#0d1117] text-white py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
      Life at <span className="text-white">Growth Natives</span>
    </h2>

    <div className="grid gap-4 md:grid-cols-4 grid-cols-2 auto-rows-auto">
      {/* Image 1 - Fixed height */}
      <div className="col-span-2 row-span-2 h-[500px] overflow-hidden rounded-lg">
        <img
          src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1752592522/Screenshot_2025-07-15_at_8.45.14_PM_wz3dwk.png"
          alt="life1"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 2 */}
      <div className="rounded-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1752592241/life5_pu3zp9.jpg"
          alt="life2"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 3 */}
      <div className="rounded-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1752595672/life6_c8sl3n.jpg"
          alt="life3"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 4 - Fixed height */}
      <div className="col-span-2 h-[500px] overflow-hidden rounded-lg">
        <img
          src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1752592522/Screenshot_2025-07-15_at_8.45.14_PM_wz3dwk.png"
          alt="life4"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 5 */}
      <div className="rounded-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1752592241/life5_pu3zp9.jpg"
          alt="life5"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Call-to-Action Card */}
      <div
        className="bg-cover bg-center rounded-lg p-6 flex flex-col justify-end text-left relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dhbhumz3q/image/upload/v1752595672/life6_c8sl3n.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0 rounded-lg" />
        <div className="relative z-10">
          <p className="text-sm text-gray-200">EXPLORE OPENINGS</p>
          <h3 className="text-xl font-bold mb-3">JOIN THE NATIVES</h3>
          <a
            href="/careers"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
          >
            Careers
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


        
        
      </main>
      <Footer />
    </div>
  );
};

export default Team;
