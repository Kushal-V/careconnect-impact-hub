
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedNeeds = () => {
  const featuredNeeds = [
    {
      id: 1,
      title: "Food Packages for 50 Families",
      category: "Food",
      location: "Bronx, NY",
      organization: "Helping Hands NGO",
      urgency: "High",
      timeLeft: "2 days",
      description: "Food packages including rice, beans, canned goods, and essential groceries for 50 families affected by recent layoffs.",
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Winter Clothing for Children",
      category: "Clothing",
      location: "Boston, MA",
      organization: "Child First Foundation",
      urgency: "Medium",
      timeLeft: "5 days",
      description: "Winter jackets, gloves, and hats for children ages 3-12 living in homeless shelters during the cold season.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "School Supplies for 100 Students",
      category: "Education",
      location: "Chicago, IL",
      organization: "Education for All",
      urgency: "Medium",
      timeLeft: "7 days",
      description: "Notebooks, pens, backpacks, and other essential school supplies for underprivileged students returning to school.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Medical Supplies for Community Clinic",
      category: "Healthcare",
      location: "Miami, FL",
      organization: "Community Health Alliance",
      urgency: "High",
      timeLeft: "3 days",
      description: "Basic medical supplies including bandages, antiseptics, and over-the-counter medications for a free community clinic.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-orange-100 text-orange-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-care-dark mb-2">Featured Urgent Needs</h2>
            <p className="text-lg text-gray-600">AI-prioritized requests that need immediate attention</p>
          </div>
          <Button asChild className="mt-4 md:mt-0 bg-care-teal hover:bg-care-dark-teal text-white">
            <Link to="/donations">View All Needs</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredNeeds.map((need) => (
            <Card key={need.id} className="overflow-hidden card-hover">
              <div className="relative h-48">
                <img 
                  src={need.image} 
                  alt={need.title} 
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-2 right-2 ${getUrgencyColor(need.urgency)}`}>
                  {need.urgency} Priority
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-care-light-teal text-care-dark-teal">
                    {need.category}
                  </Badge>
                  <div className="flex items-center text-amber-600 text-sm">
                    <Clock className="h-3 w-3 mr-1" /> {need.timeLeft} left
                  </div>
                </div>
                <CardTitle className="text-lg mt-2">{need.title}</CardTitle>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="h-3 w-3 mr-1" /> {need.location}
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <CardDescription className="text-sm line-clamp-2">
                  {need.description}
                </CardDescription>
                <p className="text-sm mt-2 text-care-dark-teal font-medium">
                  {need.organization}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-care-teal hover:bg-care-dark-teal text-white">
                  <Link to={`/donations/${need.id}`}>Donate Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center bg-care-light-teal p-6 rounded-lg">
          <div className="flex items-center mr-4 mb-4 md:mb-0">
            <AlertCircle className="h-6 w-6 text-care-dark-teal mr-2" />
            <span className="text-care-dark-teal font-medium">AI-Powered Matching</span>
          </div>
          <p className="text-center md:text-left text-gray-700">
            Our AI prioritizes requests based on urgency, impact potential, and efficient resource allocation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNeeds;
