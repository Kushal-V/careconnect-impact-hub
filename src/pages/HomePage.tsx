
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedNeeds from "@/components/home/FeaturedNeeds";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const HomePage = () => {
  useEffect(() => {
    const testSupabaseConnection = async () => {
      try {
        const { data, error } = await supabase
          .from('donations')
          .select('*')
          .limit(1);

        if (error) {
          console.error('Supabase Connection Error:', error);
          toast.error('Failed to connect to Supabase', {
            description: error.message
          });
        } else {
          console.log('Supabase Connected Successfully!');
          toast.success('Supabase Connection Verified', {
            description: 'Successfully fetched test data'
          });
        }
      } catch (err) {
        console.error('Unexpected Supabase Error:', err);
        toast.error('Unexpected Supabase Error');
      }
    };

    testSupabaseConnection();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <FeaturedNeeds />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
