
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
import { Button } from "@/components/ui/button";
import { insertTestDonation } from "@/utils/supabaseUtils";

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

  const handleTestInsert = async () => {
    await insertTestDonation();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Admin Test Section (Remove in production) */}
        <div className="bg-yellow-100 p-4 mb-4">
          <div className="container mx-auto">
            <h2 className="font-bold mb-2">Database Test Controls</h2>
            <p className="text-sm mb-2">This section is for testing and should be removed in production.</p>
            <Button onClick={handleTestInsert} variant="outline" className="bg-white">
              Insert Test Donation
            </Button>
          </div>
        </div>
        
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
