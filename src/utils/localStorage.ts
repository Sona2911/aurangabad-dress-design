
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

const TAILORS_KEY = 'stitchTales_tailors';

export const getStoredTailors = (): Tailor[] => {
  const stored = localStorage.getItem(TAILORS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  
  // Default tailors data
  const defaultTailors: Tailor[] = [
    {
      id: '1',
      name: "Meera's Designer Studio",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
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
      id: '2',
      name: "Royal Mens Tailoring",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 89,
      specialization: "Men's Formal",
      location: "Jalna Road, Aurangabad",
      priceRange: "₹1500-5000",
      languages: ["Hindi", "Marathi"],
      phone: "+91 98765 43211",
      description: "Expert in formal suits and traditional men's wear."
    },
    {
      id: '3',
      name: "Silk Heritage Boutique",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 203,
      specialization: "Saree Blouses",
      location: "Beed Bypass, Aurangabad",
      priceRange: "₹800-3000",
      languages: ["Hindi", "Marathi", "English"],
      phone: "+91 98765 43212",
      description: "Beautiful saree blouse designs and alterations."
    },
    {
      id: '4',
      name: "Fashion Forward Studio",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 156,
      specialization: "Women's Casual",
      location: "Garkheda, Aurangabad",
      priceRange: "₹1000-4000",
      languages: ["Hindi", "Marathi", "English"],
      phone: "+91 98765 43213",
      description: "Trendy casual wear and party outfits for women."
    },
    {
      id: '5',
      name: "Classic Men's Corner",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 98,
      specialization: "Men's Casual",
      location: "Station Road, Aurangabad",
      priceRange: "₹800-2500",
      languages: ["Hindi", "Marathi"],
      phone: "+91 98765 43214",
      description: "Casual shirts, pants and everyday wear for men."
    },
    {
      id: '6',
      name: "Elite Women's Boutique",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 175,
      specialization: "Women's Wear",
      location: "Osmanpura, Aurangabad",
      priceRange: "₹1200-5000",
      languages: ["Hindi", "Marathi", "English"],
      phone: "+91 98765 43215",
      description: "Designer women's clothing and ethnic wear."
    },
    {
      id: '7',
      name: "Groom's Choice",
      image: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 134,
      specialization: "Mens Wear",
      location: "Paithan Gate, Aurangabad",
      priceRange: "₹1800-6000",
      languages: ["Hindi", "Marathi"],
      phone: "+91 98765 43216",
      description: "Specialized in groom's wear and traditional men's clothing."
    }
  ];
  
  localStorage.setItem(TAILORS_KEY, JSON.stringify(defaultTailors));
  return defaultTailors;
};

export const addTailor = (tailor: Omit<Tailor, 'id'>): void => {
  const tailors = getStoredTailors();
  const newTailor: Tailor = {
    ...tailor,
    id: Date.now().toString()
  };
  tailors.push(newTailor);
  localStorage.setItem(TAILORS_KEY, JSON.stringify(tailors));
};

export const searchTailors = (service: string, location: string): Tailor[] => {
  const tailors = getStoredTailors();
  
  console.log('Searching with:', { service, location });
  console.log('Available tailors:', tailors.length);
  
  // If no search criteria, return all tailors
  if (!service.trim() && !location.trim()) {
    return tailors;
  }
  
  const filtered = tailors.filter(tailor => {
    // Check service match (more flexible matching)
    const serviceMatch = !service.trim() || 
      tailor.specialization.toLowerCase().includes(service.toLowerCase()) ||
      tailor.description.toLowerCase().includes(service.toLowerCase()) ||
      (service.toLowerCase().includes('men') && tailor.specialization.toLowerCase().includes('men')) ||
      (service.toLowerCase().includes('women') && tailor.specialization.toLowerCase().includes('women')) ||
      (service.toLowerCase().includes('bridal') && tailor.specialization.toLowerCase().includes('bridal')) ||
      (service.toLowerCase().includes('casual') && tailor.specialization.toLowerCase().includes('casual')) ||
      (service.toLowerCase().includes('formal') && tailor.specialization.toLowerCase().includes('formal'));
    
    // Check location match (more flexible matching)
    const locationMatch = !location.trim() || 
      tailor.location.toLowerCase().includes(location.toLowerCase()) ||
      location.toLowerCase().includes('aurangabad'); // Since all tailors are in Aurangabad region
    
    return serviceMatch && locationMatch;
  });
  
  console.log('Filtered results:', filtered.length);
  return filtered;
};
