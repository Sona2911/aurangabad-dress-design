
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { addTailor } from "@/utils/localStorage";
import { useToast } from "@/hooks/use-toast";

const JoinTailorForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    specialization: "",
    priceRange: "",
    phone: "",
    description: "",
    languages: "Hindi, Marathi"
  });

  const specializations = [
    "Bridal Wear", "Men's Formal", "Women's Casual", "Men's Casual", 
    "Saree Blouses", "Kids Wear", "Alterations", "Traditional Wear"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.location || !formData.specialization) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    addTailor({
      ...formData,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      rating: 4.0,
      reviews: 0,
      languages: formData.languages.split(",").map(lang => lang.trim())
    });

    toast({
      title: "Success!",
      description: "Your tailor profile has been created successfully."
    });

    setFormData({
      name: "",
      location: "",
      specialization: "",
      priceRange: "",
      phone: "",
      description: "",
      languages: "Hindi, Marathi"
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gray-800">Join as a Tailor</CardTitle>
          <p className="text-center text-gray-600">Start connecting with customers in Aurangabad</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your business name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <Input
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Area, Aurangabad"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specialization *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {specializations.map((spec) => (
                  <Badge
                    key={spec}
                    variant={formData.specialization === spec ? "default" : "outline"}
                    className={`cursor-pointer text-center justify-center py-2 ${
                      formData.specialization === spec 
                        ? "bg-orange-600 hover:bg-orange-700" 
                        : "hover:bg-orange-50"
                    }`}
                    onClick={() => setFormData({...formData, specialization: spec})}
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <Input
                  value={formData.priceRange}
                  onChange={(e) => setFormData({...formData, priceRange: e.target.value})}
                  placeholder="₹500-2000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Languages</label>
              <Input
                value={formData.languages}
                onChange={(e) => setFormData({...formData, languages: e.target.value})}
                placeholder="Hindi, Marathi, English"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Brief description of your services..."
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700"
            >
              Join as Tailor
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoinTailorForm;
