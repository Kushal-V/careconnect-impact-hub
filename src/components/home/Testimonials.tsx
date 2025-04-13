
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "CareConnect made it so easy to donate my extra food after an event. Within hours, a local shelter had collected it and put it to good use.",
      name: "Sarah Johnson",
      role: "Event Organizer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      quote: "As an NGO, we've seen a 40% increase in donations since joining CareConnect. The AI matching helps us receive exactly what we need.",
      name: "Michael Rodriguez",
      role: "NGO Director",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      id: 3,
      quote: "I volunteer on weekends, and the app makes it simple to see where I'm needed most. It's rewarding to know I'm helping efficiently.",
      name: "Priya Sharma",
      role: "Volunteer",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-care-dark mb-4">What Our Community Says</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from donors, volunteers, and organizations making a difference with CareConnect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-care-light-teal border-none shadow-md card-hover">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-care-teal mb-4 opacity-50" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 border-2 border-white">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold text-care-dark">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
