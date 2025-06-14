
export interface Tailor {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  specialization: string;
  location: string;
  priceRange: string;
  languages: string[];
  phone: string;
  description: string;
}

const defaultTailors: Tailor[] = [
  {
    id: "1",
    name: "Meera's Designer Studio",
    image: "https://images.unsplash.com/photo-1566479179817-c0e8e5c79a5c?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 127,
    specialization: "Bridal Wear",
    location: "Cidco, Aurangabad",
    priceRange: "₹2000-8000",
    languages: ["Hindi", "Marathi", "English"],
    phone: "+91 98765 43210",
    description: "Specializing in bridal lehengas and wedding outfits."
  },
  {
    id: "2",
    name: "Royal Mens Tailoring",
    image: "https://images.unsplash.com/photo-1617137968347-bb9b334f2de7?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 89,
    specialization: "Men's Formal",
    location: "Prozone Mall, Aurangabad",
    priceRange: "₹800-3000",
    languages: ["Hindi", "Marathi"],
    phone: "+91 87654 32109",
    description: "Expert in men's formal suits and wedding sherwanis."
  },
  {
    id: "3",
    name: "Silk Heritage Boutique",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    specialization: "Saree Blouses",
    location: "Nirala Bazaar, Aurangabad",
    priceRange: "₹500-2500",
    languages: ["Hindi", "Marathi", "English"],
    phone: "+91 76543 21098",
    description: "Traditional saree blouses and designer ethnic wear."
  },
  {
    id: "4",
    name: "Fashion Forward Studio",
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 73,
    specialization: "Women's Casual",
    location: "Connaught Place, Aurangabad",
    priceRange: "₹600-2000",
    languages: ["Hindi", "English"],
    phone: "+91 65432 10987",
    description: "Modern western wear and casual outfits for women."
  },
  {
    id: "5",
    name: "Little Stars Kids Wear",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5d2?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 92,
    specialization: "Kids Wear",
    location: "MGM College Road, Aurangabad",
    priceRange: "₹300-1500",
    languages: ["Hindi", "Marathi"],
    phone: "+91 54321 09876",
    description: "Adorable outfits for children and toddlers."
  },
  {
    id: "6",
    name: "Classic Alterations",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    rating: 4.3,
    reviews: 245,
    specialization: "Alterations",
    location: "Station Road, Aurangabad",
    priceRange: "₹100-800",
    languages: ["Hindi", "Marathi", "English"],
    phone: "+91 43210 98765",
    description: "Professional alterations and fitting services."
  }
];

export const getTailors = (): Tailor[] => {
  const storedTailors = localStorage.getItem("tailors");
  return storedTailors ? JSON.parse(storedTailors) : defaultTailors;
};

export const addTailor = (tailorData: Omit<Tailor, "id" | "rating" | "reviews">): void => {
  const tailors = getTailors();
  const newTailor: Tailor = { 
    ...tailorData, 
    id: Date.now().toString(), 
    rating: 0, 
    reviews: 0 
  };
  tailors.push(newTailor);
  localStorage.setItem("tailors", JSON.stringify(tailors));
};

export const searchTailors = (service: string, location: string): Tailor[] => {
  const tailors = getTailors();
  let results = tailors;

  if (service) {
    results = results.filter(tailor =>
      tailor.specialization.toLowerCase().includes(service.toLowerCase()) ||
      tailor.description.toLowerCase().includes(service.toLowerCase())
    );
  }

  if (location) {
    results = results.filter(tailor =>
      tailor.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  return results;
};
