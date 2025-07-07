import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Search, MapPin, Calendar, User, Image, Info, Home, Star, Clock } from "lucide-react";
import TailorCard from "@/components/TailorCard";
import { getTailors, searchTailors, Tailor } from "@/utils/localStorage";
import { Link } from "react-router-dom";

const Index = () => {
  const [tailors, setTailors] = useState<Tailor[]>(getTailors());
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Men's Wear",
    "Women's Wear", 
    "Bridal Wear",
    "Formal Wear",
    "Saree Blouses",
    "Kids Wear",
    "Alterations",
    "Traditional Wear"
  ];

  const handleSearch = () => {
    let results = searchTailors(service, location);
    
    if (selectedCategory) {
      results = results.filter(tailor => 
        tailor.specialization.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        selectedCategory.toLowerCase().includes(tailor.specialization.toLowerCase())
      );
    }
    
    setTailors(results);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
    let results = getTailors();
    
    if (category !== selectedCategory) {
      results = results.filter(tailor => 
        tailor.specialization.toLowerCase().includes(category.toLowerCase()) ||
        category.toLowerCase().includes(tailor.specialization.toLowerCase())
      );
    }
    
    setTailors(results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800">Stitch Tales</span>
                <p className="text-sm text-gray-600">Find Your Perfect Tailor</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-gray-600 hover:text-orange-600">
                Find Tailors
              </Button>
              <Link to="/gallery">
                <Button variant="ghost" className="text-gray-600 hover:text-orange-600">
                  Gallery
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" className="text-gray-600 hover:text-orange-600">
                  About
                </Button>
              </Link>
              <Link to="/bookings">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  View Bookings
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700">
                Join as Tailor
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Design Your Dream Dress with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
              Nearby Tailors
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with skilled tailors and designers in Aurangabad region. From bridal wear to casual outfits, find the perfect craftsperson for your style.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by service (e.g. bridal wear, alterations)"
                className="pl-12 h-14 rounded-full border-orange-200 focus:border-orange-400"
                value={service}
                onChange={(e) => setService(e.target.value)}
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Location in Aurangabad"
                className="pl-12 h-14 rounded-full border-orange-200 focus:border-orange-400"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 h-14 px-8 rounded-full text-white font-semibold"
              onClick={handleSearch}
            >
              Find Tailors
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full px-6 py-2 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white"
                    : "border-orange-200 text-gray-600 hover:bg-orange-50"
                }`}
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-orange-600" />
              <span>500+ Verified Tailors</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.8 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-600" />
              <span>Quick Booking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tailors Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Featured Tailors in Aurangabad
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover skilled craftspeople who bring your vision to life with precision and creativity.
          </p>
        </div>

        {tailors.length === 0 ? (
          <Card className="p-12 text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No tailors found</h3>
            <p className="text-gray-500 mb-4">No tailors match your search criteria. Try adjusting your filters.</p>
            <Button 
              onClick={() => {
                setTailors(getTailors());
                setService("");
                setLocation("");
                setSelectedCategory("");
              }}
              variant="outline"
              className="border-orange-200 text-orange-600 hover:bg-orange-50"
            >
              Show All Tailors
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tailors.map((tailor) => (
              <TailorCard key={tailor.id} tailor={tailor} />
            ))}
          </div>
        )}
      </section>

      {/* Stunning Designer Work Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Stunning Designer Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of beautifully crafted garments that showcase the artistry of our talented tailors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center" 
                alt="Designer Saree Blouse"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Designer Saree Blouse</p>
                  <p className="text-sm opacity-80">by Silk Heritage Boutique</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center" 
                alt="Wedding Sherwani"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Wedding Sherwani</p>
                  <p className="text-sm opacity-80">by Royal Mens Tailoring</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=300&fit=crop&crop=center" 
                alt="Party Gown"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Party Gown</p>
                  <p className="text-sm opacity-80">by Fashion Forward Studio</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center" 
                alt="Tailored Suit"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Tailored Suit</p>
                  <p className="text-sm opacity-80">by Classic Alterations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Happy Customers
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Amazing experience! My bridal lehenga was exactly what I dreamed of."
              </p>
              <p className="font-semibold text-gray-800">Priya Sharma</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Perfect fit and excellent craftsmanship for my wedding suit."
              </p>
              <p className="font-semibold text-gray-800">Rajesh Patil</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Quick delivery and beautiful blouse designs. Highly recommended!"
              </p>
              <p className="font-semibold text-gray-800">Anita Desai</p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            About Stitch Tales
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Stitch Tales is Aurangabad's premier platform connecting customers with skilled tailors and designers. We believe that everyone deserves perfectly fitted, beautifully crafted clothing that reflects their unique style.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Discovery</h3>
              <p className="text-gray-600">Find the perfect tailor based on your specific needs and location.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600">All our tailors are verified with ratings and reviews from real customers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Booking</h3>
              <p className="text-gray-600">Book appointments instantly and track your order from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ST</span>
                </div>
                <span className="text-xl font-bold">Stitch Tales</span>
              </div>
              <p className="text-gray-400">
                Connecting customers with skilled tailors across Aurangabad region.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Customers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Find Tailors</a></li>
                <li><a href="#" className="hover:text-white">Book Appointment</a></li>
                <li><a href="#" className="hover:text-white">Track Order</a></li>
                <li><a href="#" className="hover:text-white">Help & Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Tailors</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Join as Tailor</a></li>
                <li><a href="#" className="hover:text-white">Tailor Dashboard</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 hello@stitchtales.com</li>
                <li>📞 +91 98765 43210</li>
                <li>📍 Aurangabad, Maharashtra</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Stitch Tales. All rights reserved. | Designed by Sonali Kotlapure</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
