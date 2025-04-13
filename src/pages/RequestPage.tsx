
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const RequestPage = () => {
  const [urgency, setUrgency] = React.useState([50]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form data to an API
    alert("Request submitted successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-care-dark mb-8 text-center">Request Help</h1>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl text-center">Tell us what you need</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue="food">
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="shelter">Shelter</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="title">Title of Request</Label>
                  <Input id="title" placeholder="E.g., Winter jackets for children" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Please provide details about your request..." required rows={4} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity Needed</Label>
                  <Input id="quantity" type="number" min="1" placeholder="How many items do you need?" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Your city and state" required />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <span className="text-sm text-gray-500">
                      {urgency[0] < 33 ? "Low" : urgency[0] < 66 ? "Medium" : "High"}
                    </span>
                  </div>
                  <Slider
                    id="urgency"
                    value={urgency}
                    onValueChange={setUrgency}
                    max={100}
                    step={1}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="photo">Upload Photo (Optional)</Label>
                  <Input id="photo" type="file" accept="image/*" />
                </div>
                
                <Button type="submit" className="w-full bg-care-teal hover:bg-care-dark-teal text-white">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequestPage;
