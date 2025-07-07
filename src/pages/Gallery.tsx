
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center",
      title: "Designer Saree Blouse",
      tailor: "Silk Heritage Boutique",
      category: "Women's Wear"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      title: "Wedding Sherwani",
      tailor: "Royal Mens Tailoring",
      category: "Men's Wear"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=300&fit=crop&crop=center",
      title: "Party Gown",
      tailor: "Fashion Forward Studio",
      category: "Formal Wear"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      title: "Tailored Suit",
      tailor: "Classic Alterations",
      category: "Formal Wear"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=400&h=300&fit=crop&crop=center",
      title: "Bridal Lehenga",
      tailor: "Bridal Couture",
      category: "Bridal Wear"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
      title: "Traditional Kurta",
      tailor: "Heritage Crafts",
      category: "Traditional Wear"
    }
  ];

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
              <Button variant="ghost" className="text-orange-600 font-semibold">
                Gallery
              </Button>
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
          </div>
        </div>
      </nav>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our stunning collection of beautifully crafted garments that showcase the artistry and skill of our talented tailors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-200 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="text-sm opacity-80">by {item.tailor}</p>
                    <p className="text-xs opacity-70 mt-1">{item.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
