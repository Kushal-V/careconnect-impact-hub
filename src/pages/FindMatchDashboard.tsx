
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, Users, Clock, BadgeAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FindMatchDashboard = () => {
  const needsData = [
    {
      id: 1,
      title: "Winter Clothes for Homeless Shelter",
      organization: "Hope Community Center",
      location: "Downtown, San Francisco",
      timeframe: "Needed within 1 week",
      urgency: "High",
      items: ["Winter jackets", "Gloves", "Warm socks", "Blankets"],
      description: "With temperatures dropping, our shelter is in urgent need of warm clothing to support the 50+ individuals who rely on our services."
    },
    {
      id: 2,
      title: "Food Supplies for Food Bank",
      organization: "Community Food Share",
      location: "Mission District, San Francisco",
      timeframe: "Ongoing need",
      urgency: "Medium",
      items: ["Canned goods", "Rice", "Pasta", "Baby food"],
      description: "Our food bank serves over 200 families weekly and we're running low on essential non-perishable items."
    },
    {
      id: 3,
      title: "School Supplies for Underprivileged Children",
      organization: "Education For All",
      location: "Richmond District, San Francisco",
      timeframe: "Needed within 2 weeks",
      urgency: "Medium",
      items: ["Notebooks", "Pencils", "Backpacks", "Art supplies"],
      description: "Help us provide 100 children with the supplies they need to succeed in school this year."
    },
    {
      id: 4,
      title: "Emergency Toiletry Kits",
      organization: "Crisis Response Network",
      location: "Tenderloin, San Francisco",
      timeframe: "Immediate need",
      urgency: "Critical",
      items: ["Soap", "Toothbrushes", "Feminine products", "Hand sanitizer"],
      description: "We're assembling emergency kits for individuals displaced by the recent apartment fire."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/how-it-works"><ChevronLeft className="mr-2 h-4 w-4" /> Back to How It Works</Link>
          </Button>
          
          <h1 className="text-3xl font-bold text-care-dark mb-2">Find & Match Dashboard</h1>
          <p className="text-gray-600 mb-8">Our AI matches your donations with the most urgent needs in your community.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="bg-care-light-teal">
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-care-teal" />
                  <span>Location Filter</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-care-light-teal">San Francisco</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-care-light-teal">Oakland</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-care-light-teal">Berkeley</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-care-light-teal">San Jose</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-care-light-teal">+ Add Custom</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-care-light-teal">
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-care-teal" />
                  <span>Organization Type</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-care-light-teal">Homeless Shelters</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-care-light-teal">Food Banks</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-care-light-teal">Schools</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-care-light-teal">Hospitals</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-care-light-teal">Animal Shelters</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-care-light-teal">
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-care-teal" />
                  <span>Urgency Level</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-500 cursor-pointer">Critical</Badge>
                  <Badge className="bg-orange-500 cursor-pointer">High</Badge>
                  <Badge className="bg-yellow-500 text-black cursor-pointer">Medium</Badge>
                  <Badge className="bg-green-500 cursor-pointer">Low</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {needsData.map((need) => (
              <Card key={need.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{need.title}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Users className="mr-1 h-4 w-4" /> {need.organization}
                      </CardDescription>
                    </div>
                    <Badge className={
                      need.urgency === "Critical" ? "bg-red-500" :
                      need.urgency === "High" ? "bg-orange-500" :
                      need.urgency === "Medium" ? "bg-yellow-500 text-black" : "bg-green-500"
                    }>
                      {need.urgency}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <MapPin className="mr-1 h-4 w-4" /> {need.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="mr-1 h-4 w-4" /> {need.timeframe}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{need.description}</p>
                  <div className="mb-2">
                    <h4 className="font-medium text-care-dark mb-1">Items needed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {need.items.map((item, idx) => (
                        <Badge key={idx} variant="outline">{item}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 border-t pt-3">
                  <Button asChild className="bg-care-teal hover:bg-care-dark-teal w-full">
                    <Link to={`/donate-items?need=${need.id}`}>Donate to This Need</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button className="bg-care-teal hover:bg-care-dark-teal">
              Load More Matches
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindMatchDashboard;
