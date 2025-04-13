
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardList, Grid3X3, MapPin, Search, SlidersHorizontal } from "lucide-react";

const DonationsPage = () => {
  const [view, setView] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  
  // Sample donation listings
  const donations = [
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
    {
      id: 5,
      title: "Baby Essentials for New Mothers",
      category: "Baby",
      location: "Seattle, WA",
      organization: "Mother Care Center",
      urgency: "Medium",
      timeLeft: "4 days",
      description: "Diapers, formula, baby clothes, and other essentials for low-income mothers with newborns in our community center.",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Hygiene Kits for Homeless Shelter",
      category: "Hygiene",
      location: "Portland, OR",
      organization: "Street Relief Project",
      urgency: "High",
      timeLeft: "1 day",
      description: "Soap, shampoo, toothpaste, toothbrushes, and other hygiene items for our local homeless shelter serving 200+ people.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d99289?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
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

  // Filter donations based on search and category
  const filteredDonations = donations.filter(donation => {
    const matchesSearch = donation.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        donation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || donation.category.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-care-light-teal py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-care-dark mb-4">Donation Listings</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Browse through current donation requests from verified NGOs and community organizations. 
              Find where your contribution can make the most impact.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search for donations..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="hygiene">Hygiene</SelectItem>
                    <SelectItem value="baby">Baby</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="flex gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>

          {/* View Toggle and Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Showing {filteredDonations.length} results</p>
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() => setView('grid')}
                className={`px-3 py-2 ${view === 'grid' ? 'bg-care-teal text-white' : 'bg-white'}`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setView('list')}
                className={`px-3 py-2 ${view === 'list' ? 'bg-care-teal text-white' : 'bg-white'}`}
              >
                <ClipboardList className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Donation Listings */}
          {filteredDonations.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-500 mb-4">No donation listings found</p>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          ) : view === 'grid' ? (
            // Grid View
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDonations.map((donation) => (
                <Card key={donation.id} className="overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img 
                      src={donation.image} 
                      alt={donation.title} 
                      className="w-full h-full object-cover"
                    />
                    <Badge className={`absolute top-2 right-2 ${getUrgencyColor(donation.urgency)}`}>
                      {donation.urgency} Priority
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="bg-care-light-teal text-care-dark-teal">
                        {donation.category}
                      </Badge>
                      <div className="flex items-center text-amber-600 text-sm">
                        <span>{donation.timeLeft} left</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg mt-2">{donation.title}</CardTitle>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-3 w-3 mr-1" /> {donation.location}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="text-sm line-clamp-2">
                      {donation.description}
                    </CardDescription>
                    <p className="text-sm mt-2 text-care-dark-teal font-medium">
                      {donation.organization}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-care-teal hover:bg-care-dark-teal text-white">
                      Donate Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-4">
              {filteredDonations.map((donation) => (
                <Card key={donation.id} className="overflow-hidden card-hover">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-48 h-48">
                      <img 
                        src={donation.image} 
                        alt={donation.title} 
                        className="w-full h-full object-cover"
                      />
                      <Badge className={`absolute top-2 right-2 ${getUrgencyColor(donation.urgency)}`}>
                        {donation.urgency} Priority
                      </Badge>
                    </div>
                    <div className="flex-grow p-4">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="bg-care-light-teal text-care-dark-teal">
                          {donation.category}
                        </Badge>
                        <div className="flex items-center text-amber-600 text-sm">
                          <span>{donation.timeLeft} left</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mt-2">{donation.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin className="h-3 w-3 mr-1" /> {donation.location}
                      </div>
                      <p className="text-sm mt-3 text-gray-600 line-clamp-2">
                        {donation.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <p className="text-sm text-care-dark-teal font-medium">
                          {donation.organization}
                        </p>
                        <Button className="bg-care-teal hover:bg-care-dark-teal text-white">
                          Donate Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Pagination or Load More (placeholder) */}
          <div className="mt-10 text-center">
            <Button variant="outline" className="border-care-teal text-care-teal hover:bg-care-light-teal">
              Load More
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonationsPage;
