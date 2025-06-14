import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scissors, Search, MapPin, Calendar } from "lucide-react";
import TailorCard from "@/components/TailorCard";
import { getTailors, searchTailors, Tailor } from "@/utils/localStorage";
import { Link } from "react-router-dom";

const Index = () => {
  const [tailors, setTailors] = useState<Tailor[]>(getTailors());
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const results = searchTailors(service, location);
    setTailors(results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                TailorBook
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/bookings">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Bookings
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700">
                Join as Tailor
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Find the Best Tailors Near You
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Book appointments with top-rated tailors for custom clothing and alterations.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <Input
              type="text"
              placeholder="Search for a service (e.g., bridal wear, alterations)"
              className="rounded-full md:rounded-r-none"
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Enter a location"
              className="rounded-full md:rounded-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button
              className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 rounded-full md:rounded-l-none"
              onClick={handleSearch}
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Tailor Listings */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Top Tailors in Aurangabad
        </h2>
        {tailors.length === 0 ? (
          <Card className="p-6 text-center">
            <MapPin className="w-10 h-10 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No tailors found matching your search criteria.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tailors.map((tailor) => (
              <TailorCard key={tailor.id} tailor={tailor} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
