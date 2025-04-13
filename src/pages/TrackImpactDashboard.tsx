
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Heart, Calendar, BarChart3, Users, Gift, DollarSign, Timer, Map, Award, Shirt, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const TrackImpactDashboard = () => {
  const userDonations = [
    { id: 1, date: "2025-01-15", type: "Winter Clothes", quantity: "15 items", value: "$450", impact: "Helped 5 families" },
    { id: 2, date: "2025-02-23", type: "Food Items", quantity: "25 kg", value: "$200", impact: "Provided 40 meals" },
    { id: 3, date: "2025-03-10", type: "Cash Donation", quantity: "-", value: "$150", impact: "Supported shelter operations" },
    { id: 4, date: "2025-04-05", type: "School Supplies", quantity: "30 items", value: "$180", impact: "Supplied 10 students" }
  ];

  const timelineData = [
    { month: 'Jan', donations: 2, value: 300 },
    { month: 'Feb', donations: 3, value: 400 },
    { month: 'Mar', donations: 1, value: 150 },
    { month: 'Apr', donations: 4, value: 630 },
    { month: 'May', donations: 0, value: 0 },
    { month: 'Jun', donations: 0, value: 0 },
    { month: 'Jul', donations: 0, value: 0 },
    { month: 'Aug', donations: 0, value: 0 },
    { month: 'Sep', donations: 0, value: 0 },
    { month: 'Oct', donations: 0, value: 0 },
    { month: 'Nov', donations: 0, value: 0 },
    { month: 'Dec', donations: 0, value: 0 },
  ];

  const impactMetrics = [
    { name: 'Food', value: 200 },
    { name: 'Clothes', value: 450 },
    { name: 'Cash', value: 150 },
    { name: 'Supplies', value: 180 },
  ];

  const communityImpact = {
    familiesHelped: 15,
    mealsProvided: 140,
    clothingItems: 75,
    shelterNights: 12
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const badges = [
    { name: "First Time Donor", achieved: true, description: "Made your first donation", icon: <Heart className="h-6 w-6" /> },
    { name: "Regular Contributor", achieved: true, description: "Donated 3+ months in a row", icon: <Calendar className="h-6 w-6" /> },
    { name: "Diverse Donor", achieved: true, description: "Donated multiple types of items", icon: <Gift className="h-6 w-6" /> },
    { name: "Community Hero", achieved: false, description: "Reached $1,000 in donations", icon: <Award className="h-6 w-6" /> },
    { name: "Local Impact", achieved: false, description: "Donated in 5 different neighborhoods", icon: <Map className="h-6 w-6" /> },
    { name: "Response Team", achieved: false, description: "Donated to an urgent need within 24 hours", icon: <Timer className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/how-it-works"><ChevronLeft className="mr-2 h-4 w-4" /> Back to How It Works</Link>
          </Button>
          
          <h1 className="text-3xl font-bold text-care-dark mb-2">Track Your Impact</h1>
          <p className="text-gray-600 mb-8">See the real difference your donations are making in your community.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Gift className="h-5 w-5 text-care-teal mr-2" />
                  <span className="text-2xl font-bold">10</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-care-teal mr-2" />
                  <span className="text-2xl font-bold">$980</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">People Helped</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-care-teal mr-2" />
                  <span className="text-2xl font-bold">27</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Impact Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <BarChart3 className="h-5 w-5 text-care-teal mr-2" />
                  <span className="text-2xl font-bold">85</span>
                </div>
                <Progress className="mt-2" value={85} />
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Donation History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={timelineData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="value" stroke="#2dd4bf" fill="#99f6e4" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Donation Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={impactMetrics}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {impactMetrics.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Recent Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Date</th>
                        <th className="text-left py-3 px-2">Type</th>
                        <th className="text-left py-3 px-2">Quantity</th>
                        <th className="text-left py-3 px-2">Value</th>
                        <th className="text-left py-3 px-2">Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userDonations.map((donation) => (
                        <tr key={donation.id} className="border-b">
                          <td className="py-2 px-2">{donation.date}</td>
                          <td className="py-2 px-2">{donation.type}</td>
                          <td className="py-2 px-2">{donation.quantity}</td>
                          <td className="py-2 px-2">{donation.value}</td>
                          <td className="py-2 px-2">{donation.impact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center mb-2">
                      <Users className="h-5 w-5 text-care-teal mr-2" />
                      <h3 className="font-medium">Families Helped</h3>
                    </div>
                    <p className="text-2xl font-bold">{communityImpact.familiesHelped}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center mb-2">
                      <Gift className="h-5 w-5 text-care-teal mr-2" />
                      <h3 className="font-medium">Meals Provided</h3>
                    </div>
                    <p className="text-2xl font-bold">{communityImpact.mealsProvided}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center mb-2">
                      <Shirt className="h-5 w-5 text-care-teal mr-2" />
                      <h3 className="font-medium">Clothing Items</h3>
                    </div>
                    <p className="text-2xl font-bold">{communityImpact.clothingItems}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center mb-2">
                      <Home className="h-5 w-5 text-care-teal mr-2" />
                      <h3 className="font-medium">Shelter Nights</h3>
                    </div>
                    <p className="text-2xl font-bold">{communityImpact.shelterNights}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Your Impact Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {badges.map((badge, idx) => (
                    <div key={idx} className={`bg-white p-4 rounded-lg shadow-sm border ${badge.achieved ? 'border-care-teal' : 'opacity-50'}`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto ${badge.achieved ? 'bg-care-light-teal text-care-teal' : 'bg-gray-100 text-gray-400'}`}>
                        {badge.icon}
                      </div>
                      <h3 className="font-medium text-center mb-1">{badge.name}</h3>
                      <p className="text-xs text-gray-500 text-center">{badge.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-care-teal hover:bg-care-dark-teal">
              <Link to="/donate-items">Make Another Donation</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackImpactDashboard;
