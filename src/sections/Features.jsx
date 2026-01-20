import React from 'react';


export default function EpicRidesFeatures() {
  const features = [
    {
      title: "Multiple Ride Options",
      description:
        "Choose from Economic, Luxury, or Carpool rides to match your needs, preferences, and budget.",
      image: "/images/Multiple.png",
    },
    {
      title: "Real-Time Ride Tracking",
      description:
        "Track drivers live, view ETAs, and stay informed from pickup to drop-off with integrated maps.",
      image: "/images/Tracking.png",
    },
    {
      title: "Secure Payments",
      description:
        "Seamless in-app payments including cards, wallet balance, and cash options for convenience.",
      image: "/images/SecurePayments.png",
    },

     {
      title: "Ride Verification Codes",
      description:
        "Every ride is secured with a unique verification code to ensure the correct driver and passenger match.",
      image: "/images/Verification.png",
    },
    {
      title: "In-App Chat",
      description:
        "Communicate directly with drivers through secure in-app messaging for smooth coordination.",
      image: "/images/InAppChat.png",
    },
    {
      title: "Emergency Support",
      description:
        "Access emergency services and roadside assistance with just a few taps.",
      image: "/images/Emergency.png",
    },
  ];
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#61CB08]/5 via-[#0b2a17] to-black px-6 py-20">
      <div className="max-w-6xl w-full">
        
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#61CB08] mb-16">
          Key Features <span className="text-[#ffffff]">of Epic Rides</span>
        </h2>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-[#61CB08]/10 to-[#071d12] 
              border border-[#61CB08]/30 rounded-2xl p-8
           
         
              transition-all duration-300"
            >
              {/* Glow circle */}
              <div className="absolute -top-6 -right-6 w-20 h-20  rounded-[26px] blur-2xl"></div>
              
              <h3 className="text-xl font-semibold text-[#61CB08] mb-4">
                {item.title}
              </h3>
              
              <p className="text-[#C3C3C3] text-sm leading-relaxed mr-[1em]">
                {item.description}
              </p>
              <div className="relative -bottom-8">
              <img src={item.image} alt={item.title} className="w-full h-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}