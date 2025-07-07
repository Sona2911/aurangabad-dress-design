
import { Star, Heart, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tailor } from "@/utils/localStorage";
import BookingModal from "./BookingModal";

interface TailorCardProps {
  tailor: Tailor;
}

const TailorCard = ({ tailor }: TailorCardProps) => {
  const handlePhoneCall = () => {
    window.open(`tel:${tailor.phone}`, '_self');
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-200 overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={tailor.image} 
          alt={tailor.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center";
          }}
        />
        <Button 
          size="sm" 
          className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg"
        >
          <Heart className="w-4 h-4" />
        </Button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <div className="flex items-center mb-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span className="font-semibold">{tailor.rating}</span>
                <span className="text-sm opacity-80 ml-1">({tailor.reviews})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-3">
          <h4 className="text-lg font-semibold text-gray-800 mb-1">{tailor.name}</h4>
          <Badge className="bg-orange-100 text-orange-800 text-xs px-2 py-1">
            {tailor.specialization}
          </Badge>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {tailor.description}
        </p>
        
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
            <span className="truncate">{tailor.location}</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0">₹</span>
            <span>{tailor.priceRange}</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0">🗣️</span>
            <span className="truncate">{tailor.languages.join(", ")}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <BookingModal tailor={tailor}>
            <Button className="flex-1 bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-medium h-10">
              Book Now
            </Button>
          </BookingModal>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-orange-200 text-orange-600 hover:bg-orange-50 px-3"
            onClick={handlePhoneCall}
          >
            <Phone className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TailorCard;
