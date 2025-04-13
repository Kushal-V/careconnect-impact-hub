
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, LogIn, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to a backend for authentication
    toast.success("Sign in successful!");
    // Simulate a successful login
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-care-teal" />
          <span className="text-xl font-bold text-care-dark">CareConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/donations" className="text-care-dark hover:text-care-teal transition-colors">
            Browse Needs
          </Link>
          <Link to="/how-it-works" className="text-care-dark hover:text-care-teal transition-colors">
            How It Works
          </Link>
          <Link to="/about" className="text-care-dark hover:text-care-teal transition-colors">
            About
          </Link>
          <Link to="/community" className="text-care-dark hover:text-care-teal transition-colors">
            Community
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-care-teal text-care-teal hover:bg-care-light-teal">
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sign In to CareConnect</DialogTitle>
                <DialogDescription>
                  Enter your credentials to access your donation dashboard.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSignIn} className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
                <div className="text-sm">
                  <Link to="/forgot-password" className="text-care-teal hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-care-teal hover:bg-care-dark-teal w-full">
                    Sign In
                  </Button>
                </DialogFooter>
                <div className="text-center text-sm text-gray-600 pt-2">
                  Don't have an account? 
                  <Link to="/join-donor" className="text-care-teal hover:underline ml-1">
                    Sign Up
                  </Link>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/donations">Browse Needs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/how-it-works">How It Works</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/community">Community</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/signin">Sign In</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
