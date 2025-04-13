
import React from "react";
import { CircleCheck, Gift, Search, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-care-teal" />,
      title: "Find & Match",
      description: "Our AI matches your donations with the most urgent needs in your community or chosen area.",
    },
    {
      icon: <Gift className="h-10 w-10 text-care-teal" />,
      title: "Donate Items",
      description: "Contribute food, clothes, essentials, or other items you wish to donate to those in need.",
    },
    {
      icon: <Truck className="h-10 w-10 text-care-teal" />,
      title: "Coordinate Pickup",
      description: "NGOs and volunteers coordinate with you for efficient pickup and delivery of donations.",
    },
    {
      icon: <CircleCheck className="h-10 w-10 text-care-teal" />,
      title: "Track Impact",
      description: "See the real impact of your donation with transparent tracking and impact measurement.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-care-dark mb-4">How CareConnect Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform makes it easy to connect donors with those in need through a simple 4-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-care-light-teal rounded-lg p-6 card-hover">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-care-dark text-center mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
