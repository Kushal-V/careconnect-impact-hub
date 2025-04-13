
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, DollarSign, ShoppingBag, Shirt, Package, Check } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const DonateItemsDashboard = () => {
  const [searchParams] = useSearchParams();
  const needId = searchParams.get("need");
  const [donationSubmitted, setDonationSubmitted] = useState(false);

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    toast.success("Thank you for your donation! We'll be in touch soon.");
    setDonationSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <Button asChild variant="outline" className="mb-6">
            <Link to={needId ? "/find-match" : "/how-it-works"}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Back
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold text-care-dark mb-2">Donate Items</h1>
          <p className="text-gray-600 mb-8">Choose what you'd like to donate to help those in need.</p>
          
          {donationSubmitted ? (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6 pb-4 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-care-dark mb-2">Thank You for Your Donation!</h2>
                <p className="text-gray-600 mb-6">
                  Your generosity will make a real difference in someone's life. We'll be in touch soon to coordinate pickup or provide more information.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline">
                    <Link to="/">Return to Home</Link>
                  </Button>
                  <Button asChild className="bg-care-teal hover:bg-care-dark-teal">
                    <Link to="/track-impact">Track Your Impact</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Tabs defaultValue="items" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="cash" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" /> Cash
                </TabsTrigger>
                <TabsTrigger value="food" className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" /> Food
                </TabsTrigger>
                <TabsTrigger value="clothes" className="flex items-center gap-2">
                  <Shirt className="h-4 w-4" /> Clothes
                </TabsTrigger>
                <TabsTrigger value="items" className="flex items-center gap-2">
                  <Package className="h-4 w-4" /> Essentials
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="cash">
                <Card>
                  <CardHeader>
                    <CardTitle>Cash Donation</CardTitle>
                    <CardDescription>Your financial contribution helps us purchase exactly what's needed most.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitDonation}>
                      <div className="grid gap-6">
                        <div className="grid gap-2">
                          <Label htmlFor="amount">Donation Amount</Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <Input id="amount" type="number" min="1" placeholder="25" className="pl-10" required />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2">
                          <Button type="button" variant="outline" className="text-lg">$25</Button>
                          <Button type="button" variant="outline" className="text-lg">$50</Button>
                          <Button type="button" variant="outline" className="text-lg">$100</Button>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" required />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" required />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="**** **** **** ****" required />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="expiration">Expiration Date</Label>
                            <Input id="expiration" placeholder="MM/YY" required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="***" required />
                          </div>
                        </div>
                        
                        <Button type="submit" className="bg-care-teal hover:bg-care-dark-teal">Donate Now</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="food">
                <Card>
                  <CardHeader>
                    <CardTitle>Food Donation</CardTitle>
                    <CardDescription>Help stock local food banks and kitchens with much-needed supplies.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitDonation}>
                      <div className="grid gap-6">
                        <div className="grid gap-2">
                          <Label>Food Items (check all that apply)</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {['Canned goods', 'Rice/Grains', 'Pasta', 'Cereal', 'Baby food', 'Fresh produce', 'Dairy products', 'Protein items'].map((item) => (
                              <div key={item} className="flex items-center space-x-2">
                                <input type="checkbox" id={item.replace(/\s+/g, '-').toLowerCase()} className="h-4 w-4 rounded" />
                                <Label htmlFor={item.replace(/\s+/g, '-').toLowerCase()}>{item}</Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="foodOther">Other Items</Label>
                          <Textarea id="foodOther" placeholder="List any other food items you'd like to donate" />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="foodEstimatedQuantity">Estimated Quantity</Label>
                          <Input id="foodEstimatedQuantity" placeholder="e.g., 10 cans, 5 kg of rice" required />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="foodName">Your Name</Label>
                            <Input id="foodName" required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="foodEmail">Email Address</Label>
                            <Input id="foodEmail" type="email" required />
                          </div>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="foodPhone">Phone Number</Label>
                          <Input id="foodPhone" type="tel" required />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="foodAddress">Pickup Address</Label>
                          <Input id="foodAddress" required />
                        </div>
                        
                        <Button type="submit" className="bg-care-teal hover:bg-care-dark-teal">Submit Food Donation</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="clothes">
                <Card>
                  <CardHeader>
                    <CardTitle>Clothes Donation</CardTitle>
                    <CardDescription>Donate clothing items to help those in need stay warm and dignified.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitDonation}>
                      <div className="grid gap-6">
                        <div className="grid gap-2">
                          <Label>Clothing Items (check all that apply)</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {['Winter jackets', 'Shirts/Tops', 'Pants/Bottoms', 'Shoes', 'Socks', 'Undergarments', 'Children\'s clothing', 'Business attire'].map((item) => (
                              <div key={item} className="flex items-center space-x-2">
                                <input type="checkbox" id={item.replace(/\s+/g, '-').toLowerCase()} className="h-4 w-4 rounded" />
                                <Label htmlFor={item.replace(/\s+/g, '-').toLowerCase()}>{item}</Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="clothesOther">Other Items</Label>
                          <Textarea id="clothesOther" placeholder="List any other clothing items you'd like to donate" />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="clothesCondition">Condition</Label>
                          <select id="clothesCondition" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required>
                            <option value="">Select condition...</option>
                            <option value="new">New with tags</option>
                            <option value="likenew">Like new</option>
                            <option value="good">Good condition</option>
                            <option value="used">Gently used</option>
                          </select>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="clothesName">Your Name</Label>
                            <Input id="clothesName" required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="clothesEmail">Email Address</Label>
                            <Input id="clothesEmail" type="email" required />
                          </div>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="clothesPhone">Phone Number</Label>
                          <Input id="clothesPhone" type="tel" required />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="clothesAddress">Pickup Address</Label>
                          <Input id="clothesAddress" required />
                        </div>
                        
                        <Button type="submit" className="bg-care-teal hover:bg-care-dark-teal">Submit Clothes Donation</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="items">
                <Card>
                  <CardHeader>
                    <CardTitle>Essential Items Donation</CardTitle>
                    <CardDescription>Donate toiletries, household items, and other essentials that people need daily.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitDonation}>
                      <div className="grid gap-6">
                        <div className="grid gap-2">
                          <Label>Essential Items (check all that apply)</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {['Toiletries', 'Cleaning supplies', 'Baby supplies', 'Blankets/Bedding', 'Kitchen items', 'First aid supplies', 'Hygiene products', 'School supplies'].map((item) => (
                              <div key={item} className="flex items-center space-x-2">
                                <input type="checkbox" id={item.replace(/\s+/g, '-').toLowerCase()} className="h-4 w-4 rounded" />
                                <Label htmlFor={item.replace(/\s+/g, '-').toLowerCase()}>{item}</Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="essentialsOther">Other Items</Label>
                          <Textarea id="essentialsOther" placeholder="List any other essential items you'd like to donate" />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="essentialsQuantity">Estimated Quantity</Label>
                          <Input id="essentialsQuantity" placeholder="e.g., 10 toothbrushes, 5 blankets" required />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="essentialsName">Your Name</Label>
                            <Input id="essentialsName" required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="essentialsEmail">Email Address</Label>
                            <Input id="essentialsEmail" type="email" required />
                          </div>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="essentialsPhone">Phone Number</Label>
                          <Input id="essentialsPhone" type="tel" required />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="essentialsAddress">Pickup Address</Label>
                          <Input id="essentialsAddress" required />
                        </div>
                        
                        <Button type="submit" className="bg-care-teal hover:bg-care-dark-teal">Submit Essentials Donation</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonateItemsDashboard;
