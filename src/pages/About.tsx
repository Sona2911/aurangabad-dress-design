
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Star, Clock, Users, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800">Stitch Tales</span>
                <p className="text-sm text-gray-600">Find Your Perfect Tailor</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/">
                <Button variant="ghost" className="text-gray-600 hover:text-orange-600">
                  Find Tailors
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="ghost" className="text-gray-600 hover:text-orange-600">
                  Gallery
                </Button>
              </Link>
              <Button variant="ghost" className="text-orange-600 font-semibold">
                About
              </Button>
              <Link to="/bookings">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  View Bookings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* About Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            About Stitch Tales
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stitch Tales is Aurangabad's premier platform connecting customers with skilled tailors and designers. 
            We believe that everyone deserves perfectly fitted, beautifully crafted clothing that reflects their unique style.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
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

      {/* Statistics Section */}
      <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Since our launch, we've been connecting customers with skilled artisans across Aurangabad.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Verified Tailors</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">10,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              To bridge the gap between traditional craftsmanship and modern convenience, making it easier for 
              customers to find skilled tailors while empowering artisans with better business opportunities.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">For Customers</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Access to verified and skilled tailors</li>
                  <li>• Transparent pricing and reviews</li>
                  <li>• Easy booking and tracking system</li>
                  <li>• Quality assurance and support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">For Tailors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Expanded customer reach</li>
                  <li>• Digital presence and portfolio</li>
                  <li>• Streamlined booking management</li>
                  <li>• Fair pricing and timely payments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied customers who found their perfect tailor through Stitch Tales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Find Tailors
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Join as Tailor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
