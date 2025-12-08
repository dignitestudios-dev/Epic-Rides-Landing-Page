import Button from "@/components/Button";
import CheckIcon from "@/components/icons/CheckIcon";
import React from "react";

const OurCompetitiveEdge = () => {
  const gridItemsContent = [
    "Revolutionary subscription model: drivers keep 100% of fares",
    "Community partnerships reducing customer acquisition costs",
    "AI-powered route optimization maximizing driver earnings and efficiency",
    "Sustainable business model with predictable subscription revenue",
  ];
  return (
    <div className="bg-[#EEFFE0] mycontainer md:py-16! py-10! md:px-20! flex flex-col justify-center items-center sm:gap-10 gap-6">
      <h2 className="font-semibold sm:text-4xl text-3xl text-black text-center">
        Our Competitive Edge{" "}
      </h2>

      <div className="grid lg:grid-cols-4 min-[425px]:grid-cols-2 min-[425px]:gap-10 gap-4 w-[1150px] max-w-full">
        {gridItemsContent.map((content, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 justify-center items-center"
          >
            <CheckIcon />
            <p className="text-black font-medium capitalize text-center">
              {content}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center sm:flex-row flex-col sm:gap-8 gap-4">
        <Button className="lg:w-[370px] w-[220px]">Explore Investment</Button>
        <Button className="lg:w-[370px] w-[220px]" variant="secondary">
          Invest Now
        </Button>
      </div>
    </div>
  );
};

export default OurCompetitiveEdge;
