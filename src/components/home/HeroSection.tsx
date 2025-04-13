
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-care-dark leading-tight mb-4">
            Smart Giving.
            <br />
            <span className="text-care-teal">Real Impact.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 md:pr-12">
            CareConnect uses AI to match donations with those who need them most, 
            ensuring your generosity creates the maximum possible impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-care-orange hover:bg-opacity-90 text-white font-medium px-6 py-3 rounded-md text-lg">
              <Link to="/donations">Donate Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-care-teal text-care-teal hover:bg-care-light-teal font-medium px-6 py-3 rounded-md text-lg">
              <Link to="/request">Request Help</Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-care-dark">10K+</span>
              <span className="text-sm text-gray-600">Donations Made</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-care-dark">500+</span>
              <span className="text-sm text-gray-600">NGO Partners</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-care-dark">25K+</span>
              <span className="text-sm text-gray-600">People Helped</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            alt="People helping each other" 
            className="rounded-lg shadow-xl w-full max-w-md object-cover h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
