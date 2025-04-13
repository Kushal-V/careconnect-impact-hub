
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const JoinNGOPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form data to an API
    alert("Registration submitted successfully! We'll review your details and get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-care-dark mb-4 text-center">Join Our Network</h1>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Whether you're an NGO looking to distribute donations or an individual wanting to volunteer, join our network to make a difference.
          </p>
          
          <Tabs defaultValue="ngo" className="max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ngo">Register as NGO</TabsTrigger>
              <TabsTrigger value="volunteer">Join as Volunteer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ngo">
              <Card>
                <CardHeader>
                  <CardTitle>NGO Registration</CardTitle>
                  <CardDescription>Complete this form to register your organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Organization Name</Label>
                      <Input id="orgName" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="orgType">Organization Type</Label>
                      <Select defaultValue="nonprofit">
                        <SelectTrigger id="orgType">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nonprofit">Non-profit</SelectItem>
                          <SelectItem value="charity">Charity</SelectItem>
                          <SelectItem value="foundation">Foundation</SelectItem>
                          <SelectItem value="religious">Religious</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="registration">Registration/Tax ID</Label>
                      <Input id="registration" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="website">Website (if available)</Label>
                      <Input id="website" type="url" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Primary Contact Name</Label>
                      <Input id="contactName" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Contact Email</Label>
                      <Input id="contactEmail" type="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Contact Phone</Label>
                      <Input id="contactPhone" type="tel" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mission">Organization Mission</Label>
                      <Textarea id="mission" placeholder="Describe your organization's mission and work..." required rows={4} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="document">Upload Registration Document</Label>
                      <Input id="document" type="file" accept=".pdf,.doc,.docx" required />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ngoTerms" required />
                      <Label htmlFor="ngoTerms" className="text-sm">
                        I confirm that all information provided is accurate and I agree to the Terms of Service
                      </Label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-care-teal hover:bg-care-dark-teal text-white">
                      Submit for Verification
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="volunteer">
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Registration</CardTitle>
                  <CardDescription>Sign up to volunteer your time and skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="volFirstName">First Name</Label>
                        <Input id="volFirstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="volLastName">Last Name</Label>
                        <Input id="volLastName" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="volEmail">Email</Label>
                      <Input id="volEmail" type="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="volPhone">Phone Number</Label>
                      <Input id="volPhone" type="tel" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="volLocation">Location</Label>
                      <Input id="volLocation" placeholder="City, State" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="volSkills">Skills & Expertise</Label>
                      <Textarea id="volSkills" placeholder="What skills can you contribute?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Availability</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="weekdays" />
                          <Label htmlFor="weekdays" className="text-sm">Weekdays</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="weekends" />
                          <Label htmlFor="weekends" className="text-sm">Weekends</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mornings" />
                          <Label htmlFor="mornings" className="text-sm">Mornings</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="afternoons" />
                          <Label htmlFor="afternoons" className="text-sm">Afternoons</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="evenings" />
                          <Label htmlFor="evenings" className="text-sm">Evenings</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="volMotivation">Motivation</Label>
                      <Textarea id="volMotivation" placeholder="Why do you want to volunteer with us?" required />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="volTerms" required />
                      <Label htmlFor="volTerms" className="text-sm">
                        I agree to the volunteer terms and code of conduct
                      </Label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-care-teal hover:bg-care-dark-teal text-white">
                      Sign Up as Volunteer
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinNGOPage;
