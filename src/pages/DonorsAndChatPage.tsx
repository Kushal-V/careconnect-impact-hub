
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Send, Smile, Paperclip, Users, MessageSquare, Award, Bell, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

const DonorsAndChatPage = () => {
  const [messageText, setMessageText] = useState("");
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      toast.success("Message sent!");
      setMessageText("");
    }
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! You're now registered for urgent social activities.");
  };

  const topDonors = [
    {
      id: 1,
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      donationCount: 24,
      totalValue: "$2,450",
      joined: "Jan 2024",
      favoriteCauses: ["Homeless Support", "Education"],
      badge: "Platinum"
    },
    {
      id: 2,
      name: "Robert Chen",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      donationCount: 18,
      totalValue: "$1,890",
      joined: "Mar 2024",
      favoriteCauses: ["Food Banks", "Children's Welfare"],
      badge: "Gold"
    },
    {
      id: 3,
      name: "Sophia Ahmed",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      donationCount: 15,
      totalValue: "$1,640",
      joined: "Feb 2024",
      favoriteCauses: ["Women's Shelter", "Healthcare"],
      badge: "Gold"
    },
    {
      id: 4,
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      donationCount: 12,
      totalValue: "$1,230",
      joined: "Mar 2024",
      favoriteCauses: ["Environmental", "Animal Welfare"],
      badge: "Silver"
    },
    {
      id: 5,
      name: "Maria Rodriguez",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      donationCount: 10,
      totalValue: "$980",
      joined: "Jan 2024",
      favoriteCauses: ["Elder Care", "Community Development"],
      badge: "Silver"
    }
  ];

  const chatMessages = [
    {
      id: 1,
      user: {
        name: "Emma Wilson",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0fGVufDB8fDB8fHww"
      },
      text: "Hi everyone! I just scheduled a donation pickup for tomorrow. Anyone else in the downtown area?",
      timestamp: "2025-04-13 10:23 AM"
    },
    {
      id: 2,
      user: {
        name: "Robert Chen",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww"
      },
      text: "I'm in the area! I have some winter clothes I'm donating to Hope Community Center tomorrow as well.",
      timestamp: "2025-04-13 10:25 AM"
    },
    {
      id: 3,
      user: {
        name: "CareConnect Team",
        avatar: "https://placehold.co/400"
      },
      text: "Great to see everyone connecting! Just a reminder that we have an urgent need for baby supplies at the Community Family Center.",
      timestamp: "2025-04-13 10:30 AM"
    },
    {
      id: 4,
      user: {
        name: "Maria Rodriguez",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0fGVufDB8fDB8fHww"
      },
      text: "I can help with that! I have extra diapers and formula I can donate. Should I schedule a pickup or drop them off?",
      timestamp: "2025-04-13 10:35 AM"
    },
    {
      id: 5,
      user: {
        name: "CareConnect Team",
        avatar: "https://placehold.co/400"
      },
      text: "Either works, Maria! If you schedule through the app, we can have a volunteer pick them up tomorrow.",
      timestamp: "2025-04-13 10:38 AM"
    },
    {
      id: 6,
      user: {
        name: "David Park",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww"
      },
      text: "Hey everyone, I'm organizing a community cleanup this weekend. Would love to have some helping hands!",
      timestamp: "2025-04-13 11:05 AM"
    }
  ];

  const urgentActivities = [
    {
      id: 1,
      title: "Emergency Food Distribution",
      location: "Mission District Community Center",
      date: "2025-04-15",
      time: "9:00 AM - 1:00 PM",
      volunteers: 15,
      volunteersNeeded: 25,
      description: "Help distribute emergency food packages to families affected by the recent apartment fire."
    },
    {
      id: 2,
      title: "Shelter Supply Organization",
      location: "Hope House Shelter",
      date: "2025-04-16",
      time: "2:00 PM - 6:00 PM",
      volunteers: 8,
      volunteersNeeded: 12,
      description: "Help sort and organize recently donated supplies for the winter shelter program."
    },
    {
      id: 3,
      title: "Community Garden Recovery",
      location: "Sunset Community Garden",
      date: "2025-04-18",
      time: "10:00 AM - 3:00 PM",
      volunteers: 5,
      volunteersNeeded: 20,
      description: "Help restore the community garden after storm damage to ensure food production continues."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
          </Button>
          
          <Tabs defaultValue="donors" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="donors" className="flex items-center gap-2">
                <Award className="h-4 w-4" /> Top Donors
              </TabsTrigger>
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" /> Group Chat
              </TabsTrigger>
              <TabsTrigger value="urgent" className="flex items-center gap-2">
                <Bell className="h-4 w-4" /> Urgent Activities
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="donors">
              <h1 className="text-3xl font-bold text-care-dark mb-2">Our Top Donors</h1>
              <p className="text-gray-600 mb-8">Recognizing the generous individuals who frequently contribute to our community.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topDonors.map((donor) => (
                  <Card key={donor.id} className="overflow-hidden">
                    <div className={`h-2 ${
                      donor.badge === "Platinum" ? "bg-purple-500" :
                      donor.badge === "Gold" ? "bg-yellow-500" : "bg-gray-400"
                    }`} />
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={donor.avatar} alt={donor.name} />
                          <AvatarFallback>{donor.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{donor.name}</CardTitle>
                              <CardDescription>Member since {donor.joined}</CardDescription>
                            </div>
                            <Badge className={
                              donor.badge === "Platinum" ? "bg-purple-500" :
                              donor.badge === "Gold" ? "bg-yellow-500" : "bg-gray-400"
                            }>
                              {donor.badge} Donor
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Donations Made</p>
                          <p className="text-xl font-bold text-care-dark">{donor.donationCount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Total Value</p>
                          <p className="text-xl font-bold text-care-dark">{donor.totalValue}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-2">Favorite Causes</p>
                        <div className="flex flex-wrap gap-2">
                          {donor.favoriteCauses.map((cause, idx) => (
                            <Badge key={idx} variant="outline">{cause}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button asChild className="bg-care-teal hover:bg-care-dark-teal">
                        <Link to={`/donors/${donor.id}/profile`}>View Full Profile</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button asChild className="bg-care-orange hover:bg-care-dark-orange">
                  <Link to="/donate-items">Join Our Donor Community</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="chat">
              <h1 className="text-3xl font-bold text-care-dark mb-2">Donor Community Chat</h1>
              <p className="text-gray-600 mb-8">Connect with other donors, coordinate activities, and share your experiences.</p>
              
              <Card className="border mb-6">
                <CardHeader className="pb-0">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-care-teal" /> Community Chat
                  </CardTitle>
                  <CardDescription>25 members online</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {chatMessages.map((message) => (
                        <div key={message.id} className="flex gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={message.user.avatar} alt={message.user.name} />
                            <AvatarFallback>{message.user.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{message.user.name}</p>
                              <span className="text-xs text-gray-500">{message.timestamp}</span>
                            </div>
                            <p className="text-gray-700">{message.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <form onSubmit={handleSendMessage} className="w-full">
                    <div className="flex gap-2">
                      <Button type="button" variant="ghost" size="icon">
                        <Paperclip className="h-5 w-5 text-gray-500" />
                      </Button>
                      <Button type="button" variant="ghost" size="icon">
                        <Smile className="h-5 w-5 text-gray-500" />
                      </Button>
                      <Input
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1"
                      />
                      <Button type="submit" className="bg-care-teal hover:bg-care-dark-teal">
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                </CardFooter>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-care-teal" /> Discussion Groups
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {["General Discussion", "Volunteer Coordination", "Donation Tips", "Success Stories"].map((group, idx) => (
                        <li key={idx}>
                          <Button variant="ghost" className="w-full justify-start">
                            <MessageSquare className="h-4 w-4 mr-2" /> {group}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-care-teal" /> Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        {title: "Community Cleanup", date: "Apr 18, 2025", location: "Downtown Park"},
                        {title: "Donation Drive", date: "Apr 22, 2025", location: "Community Center"},
                        {title: "Volunteer Training", date: "Apr 25, 2025", location: "Online"}
                      ].map((event, idx) => (
                        <li key={idx} className="border-b pb-2 last:border-0 last:pb-0">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium">{event.title}</p>
                              <p className="text-sm text-gray-600">{event.location}</p>
                            </div>
                            <div className="text-sm text-gray-600">{event.date}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View All Events</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="urgent">
              <h1 className="text-3xl font-bold text-care-dark mb-2">Urgent Social Activities</h1>
              <p className="text-gray-600 mb-8">Register for urgent volunteer opportunities and receive notifications when help is needed.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    {urgentActivities.map((activity) => (
                      <Card key={activity.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle>{activity.title}</CardTitle>
                            <Badge className="bg-red-500">Urgent</Badge>
                          </div>
                          <CardDescription>
                            {activity.date} • {activity.time} • {activity.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">{activity.description}</p>
                          <div className="mb-3">
                            <p className="text-sm text-gray-600 mb-2">Volunteer progress:</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-care-teal h-2.5 rounded-full" 
                                style={{ width: `${(activity.volunteers / activity.volunteersNeeded) * 100}%` }}
                              ></div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {activity.volunteers} of {activity.volunteersNeeded} volunteers registered
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <Button className="w-full bg-care-teal hover:bg-care-dark-teal">Sign Up to Volunteer</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-care-teal" /> Get Urgent Notifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="volunteerName">Full Name</Label>
                          <Input id="volunteerName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="volunteerEmail">Email</Label>
                          <Input id="volunteerEmail" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="volunteerPhone">Phone Number</Label>
                          <Input id="volunteerPhone" type="tel" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="volunteerLocation">Your Location</Label>
                          <Input id="volunteerLocation" placeholder="Neighborhood, City" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="volunteerAvailability">Availability</Label>
                          <Textarea id="volunteerAvailability" placeholder="E.g., Weekdays evenings, weekends, etc." required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="volunteerSkills">Special Skills (if any)</Label>
                          <Textarea id="volunteerSkills" placeholder="E.g., First aid certified, speaks multiple languages, etc." />
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="notifications" className="h-4 w-4 rounded" required />
                          <Label htmlFor="notifications">I agree to receive urgent notifications about volunteer opportunities</Label>
                        </div>
                        <Button type="submit" className="w-full bg-care-teal hover:bg-care-dark-teal">Register for Urgent Activities</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonorsAndChatPage;
