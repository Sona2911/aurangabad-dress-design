
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { addTailor } from "@/utils/localStorage";
import { useToast } from "@/hooks/use-toast";

const JoinTailorForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialization: "",
    location: "",
    priceRange: "",
    languages: [] as string[],
    phone: "",
    description: ""
  });
  
  const [languageInput, setLanguageInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.specialization || !formData.location || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      addTailor({
        ...formData,
        image: formData.image || "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&h=200&fit=crop"
      });
      
      toast({
        title: "Success!",
        description: "Your tailor profile has been submitted successfully.",
      });
      
      // Reset form
      setFormData({
        name: "",
        image: "",
        specialization: "",
        location: "",
        priceRange: "",
        languages: [],
        phone: "",
        description: ""
      });
      setLanguageInput("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const addLanguage = () => {
    if (languageInput.trim() && !formData.languages.includes(languageInput.trim())) {
      setFormData(prev => ({
        ...prev,
        languages: [...prev.languages, languageInput.trim()]
      }));
      setLanguageInput("");
    }
  };

  const removeLanguage = (language: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang !== language)
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border border-orange-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-pink-50">
          <CardTitle className="text-2xl text-gray-800">Join as a Tailor</CardTitle>
          <p className="text-gray-600">Share your skills and connect with customers in Aurangabad</p>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Meera's Designer Studio"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialization *
                </label>
                <Input
                  value={formData.specialization}
                  onChange={(e) => setFormData(prev => ({ ...prev, specialization: e.target.value }))}
                  placeholder="e.g., Bridal Wear, Men's Formal"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <Input
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g., Cidco, Aurangabad"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <Input
                  value={formData.priceRange}
                  onChange={(e) => setFormData(prev => ({ ...prev, priceRange: e.target.value }))}
                  placeholder="e.g., ₹2000-8000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio Image URL
                </label>
                <Input
                  value={formData.image}
                  onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Languages Spoken
              </label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={languageInput}
                  onChange={(e) => setLanguageInput(e.target.value)}
                  placeholder="Add a language"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLanguage())}
                />
                <Button type="button" onClick={addLanguage} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.languages.map((language) => (
                  <Badge
                    key={language}
                    variant="secondary"
                    className="cursor-pointer bg-orange-100 text-orange-800 hover:bg-orange-200"
                    onClick={() => removeLanguage(language)}
                  >
                    {language} ×
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Tell customers about your expertise and services..."
                rows={4}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700"
            >
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoinTailorForm;
