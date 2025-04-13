
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const developers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      bio: "Passionate about creating technology that helps communities thrive.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
      social: {
        twitter: "https://twitter.com/alexjohnson",
        linkedin: "https://linkedin.com/in/alexjohnson",
        github: "https://github.com/alexjohnson",
        email: "alex@careconnect.org"
      }
    },
    {
      name: "Samantha Lee",
      role: "UX/UI Designer",
      bio: "Creating intuitive and accessible interfaces for social impact.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D",
      social: {
        twitter: "https://twitter.com/samlee",
        linkedin: "https://linkedin.com/in/samlee",
        github: "https://github.com/samlee",
        email: "sam@careconnect.org"
      }
    },
    {
      name: "Michael Chen",
      role: "Backend Developer",
      bio: "Building robust systems that connect donors with those in need.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      social: {
        twitter: "https://twitter.com/mikechen",
        linkedin: "https://linkedin.com/in/mikechen",
        github: "https://github.com/mikechen",
        email: "mike@careconnect.org"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-care-dark mb-8">About CareConnect</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-care-dark mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At CareConnect, we believe in the power of community and giving. Our mission is to create a platform that connects donors directly with those in need, making the process of giving as efficient and impactful as possible.
              </p>
              <p className="text-gray-700">
                Through innovative technology and partnerships with local NGOs and volunteers, we're working to ensure that every donation reaches those who need it most, when they need it most.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-care-dark mb-6">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {developers.map((dev, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={dev.image} 
                      alt={dev.name} 
                      className="w-full h-48 object-cover object-center"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-care-dark">{dev.name}</h3>
                      <p className="text-care-teal mb-2">{dev.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{dev.bio}</p>
                      <div className="flex space-x-3">
                        <a href={dev.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                          <Twitter size={18} />
                        </a>
                        <a href={dev.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700">
                          <Linkedin size={18} />
                        </a>
                        <a href={dev.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                          <Github size={18} />
                        </a>
                        <a href={`mailto:${dev.social.email}`} className="text-gray-500 hover:text-red-500">
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-care-dark mb-4">Contact Us</h2>
              <div className="bg-care-light-teal rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Have questions, suggestions, or want to partner with us? We'd love to hear from you!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-care-dark mb-2">Email</h3>
                    <p className="text-gray-700">info@careconnect.org</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-care-dark mb-2">Phone</h3>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-care-dark mb-2">Address</h3>
                    <p className="text-gray-700">123 Community St.<br />San Francisco, CA 94103</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-care-dark mb-2">Social Media</h3>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <Twitter size={18} />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
