import { useState, useEffect } from "react";
import { Search, MapPin, Star, Heart, Phone, Clock, Award, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import TailorCard from "@/components/TailorCard";
import JoinTailorForm from "@/components/JoinTailorForm";
import { searchTailors, Tailor } from "@/utils/localStorage";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [searchService, setSearchService] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchResults, setSearchResults] = useState<Tailor[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = () => {
    console.log('Search triggered with:', { searchService, searchLocation });
    const results = searchTailors(searchService, searchLocation);
    console.log('Search results:', results);
    setSearchResults(results);
    setShowResults(true);
    setActiveSection("find-tailors");
    
    // Scroll to results section
    setTimeout(() => {
      const element = document.getElementById("find-tailors");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const designerWork = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
      title: "Bridal Lehenga",
      designer: "Meera's Designer Studio"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=400&fit=crop",
      title: "Designer Saree Blouse",
      designer: "Silk Heritage Boutique"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      title: "Wedding Sherwani",
      designer: "Royal Mens Tailoring"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=400&fit=crop",
      title: "Party Gown",
      designer: "Fashion Forward Studio"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=300&h=400&fit=crop",
      title: "Kids Party Dress",
      designer: "Little Stars Kids Wear"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=400&fit=crop",
      title: "Tailored Suit",
      designer: "Classic Alterations"
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
      <header className="bg-white shadow-sm border-b border-orange-100 sticky top-0 z-50">
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
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection("find-tailors")}
                className={`transition-colors ${activeSection === "find-tailors" ? "text-orange-600 font-semibold" : "text-gray-600 hover:text-orange-600"}`}
              >
                Find Tailors
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className={`transition-colors ${activeSection === "gallery" ? "text-orange-600 font-semibold" : "text-gray-600 hover:text-orange-600"}`}
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className={`transition-colors ${activeSection === "about" ? "text-orange-600 font-semibold" : "text-gray-600 hover:text-orange-600"}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("join-tailor")}
                className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-4 py-2 rounded-md transition-all"
              >
                Join as Tailor
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection("find-tailors")}
                  className={`text-left transition-colors ${activeSection === "find-tailors" ? "text-orange-600 font-semibold" : "text-gray-600"}`}
                >
                  Find Tailors
                </button>
                <button 
                  onClick={() => scrollToSection("gallery")}
                  className={`text-left transition-colors ${activeSection === "gallery" ? "text-orange-600 font-semibold" : "text-gray-600"}`}
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection("about")}
                  className={`text-left transition-colors ${activeSection === "about" ? "text-orange-600 font-semibold" : "text-gray-600"}`}
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("join-tailor")}
                  className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-4 py-2 rounded-md text-left"
                >
                  Join as Tailor
                </button>
              </div>
            </nav>
          )}
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
                    placeholder="Search by service (e.g., bridal wear, men's formal, women's wear)" 
                    className="border-0 focus:ring-0 text-lg"
                    value={searchService}
                    onChange={(e) => setSearchService(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <div className="flex items-center flex-1 px-4 border-l border-gray-200">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Location in Aurangabad" 
                    className="border-0 focus:ring-0 text-lg"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 px-8 py-3 text-lg"
                >
                  Find Tailors
                </Button>
              </div>
              
              {/* Quick Search Options */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {setSearchService("men's wear"); handleSearch();}}
                  className="text-sm"
                >
                  Men's Wear
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {setSearchService("women's wear"); handleSearch();}}
                  className="text-sm"
                >
                  Women's Wear
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {setSearchService("bridal wear"); handleSearch();}}
                  className="text-sm"
                >
                  Bridal Wear
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {setSearchService("formal wear"); handleSearch();}}
                  className="text-sm"
                >
                  Formal Wear
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center"><Award className="w-4 h-4 mr-1 text-orange-600" /> 100+ Verified Tailors</span>
              <span className="flex items-center"><Star className="w-4 h-4 mr-1 text-orange-600" /> 4.8 Average Rating</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-orange-600" /> Quick Booking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results or Featured Tailors */}
      <section id="find-tailors" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {showResults ? 
                (searchResults.length > 0 ? 
                  `Search Results (${searchResults.length} found)` : 
                  'No Tailors Found'
                ) : 
                "Featured Tailors in Aurangabad"
              }
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {showResults ? 
                (searchResults.length > 0 ? 
                  `Here are the tailors matching your search for "${searchService}" ${searchLocation ? `in ${searchLocation}` : ''}.` :
                  `No tailors found matching your search criteria. Try different keywords or browse all tailors below.`
                ) : 
                "Discover skilled craftspeople who bring your vision to life with precision and creativity."
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showResults ? searchResults : searchTailors("", "")).map((tailor) => (
              <TailorCard key={tailor.id} tailor={tailor} />
            ))}
          </div>

          {showResults && searchResults.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">Try searching with different keywords or browse all our featured tailors:</p>
              <Button 
                onClick={() => {
                  setShowResults(false); 
                  setSearchService(""); 
                  setSearchLocation("");
                }}
                className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700"
              >
                View All Tailors
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Designer Work Gallery */}
      <section id="gallery" className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
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

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">About Stitch Tales</h3>
            <p className="text-lg text-gray-600 mb-8">
              Stitch Tales is Aurangabad's premier platform connecting customers with skilled tailors and designers. 
              We believe that everyone deserves perfectly fitted, beautifully crafted clothing that reflects their unique style.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Easy Discovery</h4>
                <p className="text-gray-600">Find the perfect tailor based on your specific needs and location.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Quality Assured</h4>
                <p className="text-gray-600">All our tailors are verified with ratings and reviews from real customers.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Quick Booking</h4>
                <p className="text-gray-600">Book appointments instantly and track your order from start to finish.</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-gray-800 mb-8">Happy Customers</h4>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-lg border border-orange-100">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <h5 className="font-semibold text-gray-800">{testimonial.name}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join as Tailor Section */}
      <section id="join-tailor" className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Join Our Community</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Are you a skilled tailor or designer? Join our platform and connect with customers in Aurangabad who need your expertise.
            </p>
          </div>
          <JoinTailorForm />
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
                <li><button onClick={() => scrollToSection("find-tailors")} className="hover:text-white transition-colors">Find Tailors</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Book Appointment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help & Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Tailors</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection("join-tailor")} className="hover:text-white transition-colors">Join as Tailor</button></li>
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
