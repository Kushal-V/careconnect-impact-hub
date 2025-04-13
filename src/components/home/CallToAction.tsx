
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, GanttChart, ShieldCheck, Timer } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-care-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Join Our Community <br />
              <span className="text-care-teal">Make a Real Difference</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Whether you're donating, requesting help, or volunteering, CareConnect makes it easy to create meaningful impact in your community. Our AI-powered platform ensures resources go where they're needed most.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <ShieldCheck className="h-8 w-8 text-care-teal mr-3" />
                <div>
                  <h3 className="font-semibold">Verified NGOs</h3>
                  <p className="text-sm text-gray-400">100% trusted partners</p>
                </div>
              </div>
              <div className="flex items-center">
                <Timer className="h-8 w-8 text-care-teal mr-3" />
                <div>
                  <h3 className="font-semibold">Quick Process</h3>
                  <p className="text-sm text-gray-400">Efficient donations</p>
                </div>
              </div>
              <div className="flex items-center">
                <GanttChart className="h-8 w-8 text-care-teal mr-3" />
                <div>
                  <h3 className="font-semibold">Track Impact</h3>
                  <p className="text-sm text-gray-400">See your difference</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-care-orange hover:bg-opacity-90 text-white font-medium px-6 py-3 rounded-md text-lg flex items-center">
                <Link to="/join-donor">
                  Join as Donor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-care-teal text-care-teal hover:bg-care-dark-teal hover:text-white font-medium px-6 py-3 rounded-md text-lg">
                <Link to="/join-ngo">Join as NGO/Volunteer</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="People volunteering" 
              className="rounded-lg shadow-2xl w-full max-w-lg object-cover h-96 mx-auto"
            />
            <div className="absolute -bottom-8 -left-8 bg-care-teal p-6 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p className="text-care-light">Successful donations made through our platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
