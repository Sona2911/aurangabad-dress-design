
import { Star, Heart, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tailor } from "@/utils/localStorage";

interface TailorCardProps {
  tailor: Tailor;
}

const TailorCard = ({ tailor }: TailorCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-200">
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
        
        <p className="text-sm text-gray-600 mb-3">{tailor.description}</p>
        
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
  );
};

export default TailorCard;
