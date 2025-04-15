
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Test function to insert a sample donation
export const insertTestDonation = async () => {
  try {
    const testDonation = {
      title: "Test Donation",
      description: "This is a test donation to verify Supabase write operations",
      category: "Food",
      location: "Test Location",
      quantity: 1,
      donor_id: "00000000-0000-0000-0000-000000000000", // You'll need a real UUID in production
      status: "available"
    };

    const { data, error } = await supabase
      .from('donations')
      .insert(testDonation)
      .select();

    if (error) {
      console.error('Failed to insert test donation:', error);
      toast.error('Failed to insert test data', {
        description: error.message
      });
      return null;
    }

    console.log('Test donation inserted successfully:', data);
    toast.success('Test data inserted successfully', {
      description: 'Check your Supabase database'
    });
    return data;
  } catch (err) {
    console.error('Unexpected error during test insertion:', err);
    toast.error('Unexpected error during test insertion');
    return null;
  }
};
