
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Users, Phone, Mail, MapPin, Calendar, Clock, ArrowRight, Building, User, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const CoordinatePickupDashboard = () => {
  const [activePickup, setActivePickup] = useState<number | null>(null);
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! You'll receive a response shortly.");
  };

  const ngos = [
    {
      id: 1,
      name: "Hope Community Center",
      avatar: "https://images.unsplash.com/photo-1607703703674-df96af81dffa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
      type: "Homeless Shelter",
      areas: ["Downtown", "Mission District", "SOMA"],
      description: "We provide shelter, meals, and support services for the homeless population.",
      contactName: "Maria Johnson",
      contactPhone: "+1 (555) 234-5678",
      contactEmail: "maria@hopecenter.org",
      active: true
    },
    {
      id: 2,
      name: "Community Food Share",
      avatar: "https://images.unsplash.com/photo-1593113598332-cd59a93f9724?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGJhbmt8ZW58MHx8MHx8fDA%3D",
      type: "Food Bank",
      areas: ["Citywide", "Mission District", "Richmond District"],
      description: "We collect and distribute food to those facing food insecurity across the city.",
      contactName: "David Chen",
      contactPhone: "+1 (555) 345-6789",
      contactEmail: "david@communityfood.org",
      active: true
    },
    {
      id: 3,
      name: "Education For All",
      avatar: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
      type: "Education Support",
      areas: ["Citywide", "Tenderloin", "Sunset District"],
      description: "We provide educational resources and support for underprivileged children.",
      contactName: "Sarah Williams",
      contactPhone: "+1 (555) 456-7890",
      contactEmail: "sarah@educationforall.org",
      active: true
    }
  ];

  const volunteers = [
    {
      id: 1,
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww",
      areas: ["Downtown", "SOMA", "Mission District"],
      availability: "Weekdays, evenings",
      vehicle: "Car",
      description: "I have a van and can help with large item pickups and deliveries.",
      contactPhone: "+1 (555) 567-8901",
      contactEmail: "james.wilson@email.com",
      active: true
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D",
      areas: ["Citywide"],
      availability: "Weekends",
      vehicle: "Car",
      description: "I'm available on weekends and can help with sorting and delivering donations.",
      contactPhone: "+1 (555) 678-9012",
      contactEmail: "emma.rodriguez@email.com",
      active: true
    },
    {
      id: 3,
      name: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww",
      areas: ["Richmond District", "Sunset District"],
      availability: "Weekdays, daytime",
      vehicle: "Bike",
      description: "I can help with small to medium pickups and deliveries on my bike.",
      contactPhone: "+1 (555) 789-0123",
      contactEmail: "michael.johnson@email.com",
      active: true
    }
  ];

  const pickups = [
    {
      id: 1,
      donorName: "John Smith",
      donationType: "Winter Clothes",
      location: "123 Main St, San Francisco",
      date: "2025-04-20",
      timeWindow: "10:00 AM - 2:00 PM",
      status: "Scheduled",
      ngo: "Hope Community Center",
      volunteer: "James Wilson",
      items: ["Winter jackets (5)", "Gloves (10 pairs)", "Warm socks (20 pairs)"]
    },
    {
      id: 2,
      donorName: "Sarah Davis",
      donationType: "Food Items",
      location: "456 Oak Ave, San Francisco",
      date: "2025-04-15",
      timeWindow: "1:00 PM - 5:00 PM",
      status: "Pending",
      ngo: "Community Food Share",
      volunteer: null,
      items: ["Canned goods (20)", "Rice (10 kg)", "Pasta (15 boxes)"]
    },
    {
      id: 3,
      donorName: "Lisa Johnson",
      donationType: "School Supplies",
      location: "789 Pine St, San Francisco",
      date: "2025-04-18",
      timeWindow: "9:00 AM - 12:00 PM",
      status: "Confirmed",
      ngo: "Education For All",
      volunteer: "Emma Rodriguez",
      items: ["Notebooks (30)", "Pencils (100)", "Backpacks (10)"]
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
          
          <h1 className="text-3xl font-bold text-care-dark mb-2">Coordinate Pickup Dashboard</h1>
          <p className="text-gray-600 mb-8">Connect with NGOs and volunteers to coordinate the pickup and delivery of donations.</p>
          
          <Tabs defaultValue="pickups" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="pickups">My Pickup Requests</TabsTrigger>
              <TabsTrigger value="ngos">NGO Partners</TabsTrigger>
              <TabsTrigger value="volunteers">Volunteer Network</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pickups">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-care-dark">Your Scheduled Pickups</h2>
                
                {pickups.map((pickup) => (
                  <Card key={pickup.id} className={activePickup === pickup.id ? "border-care-teal" : ""}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle>{pickup.donationType} Donation</CardTitle>
                        <Badge className={
                          pickup.status === "Scheduled" ? "bg-blue-500" :
                          pickup.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"
                        }>
                          {pickup.status}
                        </Badge>
                      </div>
                      <CardDescription>Donation by {pickup.donorName}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center text-sm text-gray-600 mb-1">
                            <MapPin className="mr-1 h-4 w-4" /> {pickup.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-1">
                            <Calendar className="mr-1 h-4 w-4" /> {pickup.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <Clock className="mr-1 h-4 w-4" /> {pickup.timeWindow}
                          </div>
                          
                          <div className="mb-2">
                            <h4 className="font-medium text-care-dark mb-1">Items included:</h4>
                            <ul className="text-sm text-gray-600 list-disc pl-5">
                              {pickup.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-md">
                          <h4 className="font-medium text-care-dark mb-2">Pickup Coordination</h4>
                          {pickup.ngo && (
                            <div className="flex items-center mb-2">
                              <Building className="h-4 w-4 mr-2 text-care-teal" />
                              <span className="text-sm">NGO: <strong>{pickup.ngo}</strong></span>
                            </div>
                          )}
                          {pickup.volunteer ? (
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-2 text-care-teal" />
                              <span className="text-sm">Volunteer: <strong>{pickup.volunteer}</strong></span>
                            </div>
                          ) : (
                            <p className="text-sm text-yellow-600">Volunteer assignment pending</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">Contact Coordinator</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Send Message to Coordinator</DialogTitle>
                            <DialogDescription>
                              Send a message about your pickup to the coordination team.
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleContactSubmit} className="space-y-4">
                            <div className="grid gap-2">
                              <Label htmlFor="subject">Subject</Label>
                              <Input id="subject" required />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="message">Message</Label>
                              <Textarea id="message" rows={5} required />
                            </div>
                            <DialogFooter>
                              <Button type="submit" className="bg-care-teal hover:bg-care-dark-teal">Send Message</Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                      
                      <Button onClick={() => setActivePickup(pickup.id)} variant="outline">
                        {activePickup === pickup.id ? "Hide Details" : "View Details"}
                      </Button>
                      
                      {pickup.status === "Scheduled" && (
                        <Button className="bg-red-500 hover:bg-red-600">Cancel Pickup</Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
                
                <div className="text-center mt-8">
                  <Button asChild className="bg-care-teal hover:bg-care-dark-teal">
                    <Link to="/donate-items">Schedule New Pickup</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ngos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ngos.map((ngo) => (
                  <Card key={ngo.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={ngo.avatar} alt={ngo.name} />
                          <AvatarFallback>{ngo.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle>{ngo.name}</CardTitle>
                          <CardDescription>{ngo.type}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{ngo.description}</p>
                      
                      <div className="mb-3">
                        <h4 className="font-medium text-care-dark mb-1">Areas Served:</h4>
                        <div className="flex flex-wrap gap-2">
                          {ngo.areas.map((area, idx) => (
                            <Badge key={idx} variant="outline">{area}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2 border-t pt-3">
                        <h4 className="font-medium text-care-dark">Contact Information:</h4>
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="mr-2 h-4 w-4" /> {ngo.contactName}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="mr-2 h-4 w-4" /> {ngo.contactPhone}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="mr-2 h-4 w-4" /> {ngo.contactEmail}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-care-teal hover:bg-care-dark-teal">Contact Organization</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Contact {ngo.name}</DialogTitle>
                            <DialogDescription>
                              Send a message to coordinate your donation pickup.
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleContactSubmit} className="space-y-4">
                            <div className="grid gap-2">
                              <Label htmlFor="contactName">Your Name</Label>
                              <Input id="contactName" required />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="contactEmail">Your Email</Label>
                              <Input id="contactEmail" type="email" required />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="contactMessage">Message</Label>
                              <Textarea id="contactMessage" rows={5} required />
                            </div>
                            <DialogFooter>
                              <Button type="submit" className="bg-care-teal hover:bg-care-dark-teal">Send Message</Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="volunteers">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {volunteers.map((volunteer) => (
                  <Card key={volunteer.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                          <AvatarFallback>{volunteer.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle>{volunteer.name}</CardTitle>
                          <CardDescription>Volunteer</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3">
                        <h4 className="font-medium text-care-dark mb-1">Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {volunteer.areas.map((area, idx) => (
                            <Badge key={idx} variant="outline">{area}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="mr-2 h-4 w-4" /> Available: {volunteer.availability}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Map className="mr-2 h-4 w-4" /> Transport: {volunteer.vehicle}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-3">{volunteer.description}</p>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-care-teal hover:bg-care-dark-teal">Contact Volunteer</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Contact {volunteer.name}</DialogTitle>
                            <DialogDescription>
                              Send a message to coordinate your donation pickup.
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleContactSubmit} className="space-y-4">
                            <div className="grid gap-2">
                              <Label htmlFor="volunteerContactName">Your Name</Label>
                              <Input id="volunteerContactName" required />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="volunteerContactEmail">Your Email</Label>
                              <Input id="volunteerContactEmail" type="email" required />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="volunteerContactMessage">Message</Label>
                              <Textarea id="volunteerContactMessage" rows={5} required />
                            </div>
                            <DialogFooter>
                              <Button type="submit" className="bg-care-teal hover:bg-care-dark-teal">Send Message</Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button asChild variant="outline" className="border-care-teal text-care-teal">
                  <Link to="/volunteer-signup">Become a Volunteer</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoordinatePickupDashboard;
