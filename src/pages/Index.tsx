
import { Search, MapPin, Star, Heart, Phone, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const featuredTailors = [
    {
      id: 1,
      name: "Meera's Designer Studio",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 127,
      specialization: "Bridal Wear",
      location: "Cidco, Aurangabad",
      priceRange: "₹2000-8000",
      languages: ["Hindi", "Marathi", "English"]
    },
    {
      id: 2,
      name: "Royal Mens Tailoring",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 89,
      specialization: "Men's Formal",
      location: "Jalna Road, Aurangabad",
      priceRange: "₹1500-5000",
      languages: ["Hindi", "Marathi"]
    },
    {
      id: 3,
      name: "Silk Heritage Boutique",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 203,
      specialization: "Saree Blouses",
      location: "Beed Bypass, Aurangabad",
      priceRange: "₹800-3000",
      languages: ["Hindi", "Marathi", "English"]
    }
  ];

  const designerWork = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=500&fit=crop",
      title: "Bridal Lehenga",
      designer: "Meera's Designer Studio"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop",
      title: "Designer Saree Blouse",
      designer: "Silk Heritage Boutique"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop",
      title: "Wedding Sherwani",
      designer: "Royal Mens Tailoring"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=500&fit=crop",
      title: "Party Gown",
      designer: "Meera's Designer Studio"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      review: "Amazing experience! My bridal lehenga was exactly what I dreamed of.",
      rating: 5
    },
    {
      name: "Rajesh Patil",
      review: "Perfect fit and excellent craftsmanship for my wedding suit.",
      rating: 5
    },
    {
      name: "Anita Desai",
      review: "Quick delivery and beautiful blouse designs. Highly recommended!",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Stitch Tales</h1>
                <p className="text-xs text-gray-600">Find Your Perfect Tailor</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Find Tailors</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Gallery</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">About</a>
              <Button className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700">
                Join as Tailor
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-pink-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Design Your Dream Dress with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600"> Nearby Tailors</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with skilled tailors and designers in Aurangabad region. From bridal wear to casual outfits, find the perfect craftsperson for your style.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 p-2 bg-white rounded-2xl shadow-lg border border-orange-100">
                <div className="flex items-center flex-1 px-4">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Search by service (e.g., bridal wear, alterations)" 
                    className="border-0 focus:ring-0 text-lg"
                  />
                </div>
                <div className="flex items-center flex-1 px-4 border-l border-gray-200">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Aurangabad location" 
                    className="border-0 focus:ring-0 text-lg"
                  />
                </div>
                <Button className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 px-8 py-3 text-lg">
                  Find Tailors
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center"><Award className="w-4 h-4 mr-1 text-orange-600" /> 500+ Verified Tailors</span>
              <span className="flex items-center"><Star className="w-4 h-4 mr-1 text-orange-600" /> 4.8 Average Rating</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-orange-600" /> Quick Booking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tailors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Featured Tailors in Aurangabad</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover skilled craftspeople who bring your vision to life with precision and creativity.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTailors.map((tailor) => (
              <Card key={tailor.id} className="group hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-200">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={tailor.image} 
                    alt={tailor.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button 
                    size="sm" 
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 p-2"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-800">{tailor.name}</h4>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700 ml-1">{tailor.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({tailor.reviews})</span>
                    </div>
                  </div>
                  
                  <Badge className="bg-orange-100 text-orange-800 mb-3">{tailor.specialization}</Badge>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {tailor.location}
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 mr-2 text-gray-400">₹</span>
                      {tailor.priceRange}
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 mr-2 text-gray-400">🗣️</span>
                      {tailor.languages.join(", ")}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1 bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700">
                      Book Now
                    </Button>
                    <Button variant="outline" size="sm" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Work Gallery */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Stunning Designer Work</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Browse through our collection of beautifully crafted garments that showcase the artistry of our talented tailors.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designerWork.map((work) => (
              <div key={work.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-lg">{work.title}</h4>
                    <p className="text-sm opacity-90">by {work.designer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Happy Customers</h3>
            <p className="text-gray-600">See what our satisfied customers have to say about their experience.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-orange-100">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">ST</span>
                </div>
                <span className="text-xl font-bold">Stitch Tales</span>
              </div>
              <p className="text-gray-400 text-sm">Connecting customers with skilled tailors across Aurangabad region.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Customers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Find Tailors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Book Appointment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help & Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Tailors</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Join as Tailor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tailor Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📧 hello@stitchtales.com</li>
                <li>📞 +91 98765 43210</li>
                <li>📍 Aurangabad, Maharashtra</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Stitch Tales. All rights reserved. | Designed by <span className="text-orange-400 font-semibold">Sonali Kotlapure</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
