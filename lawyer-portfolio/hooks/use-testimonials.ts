// lawyer-portfolio/hooks/use-testimonials.ts
import { useState, useEffect } from 'react';

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  image?: string;
  rating: number;
  date: string;
  service: string;
  testimonial: string;
  case: string;
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/testimonials/');
        
        if (!response.ok) {
          throw new Error(`Error fetching testimonials: ${response.status}`);
        }
        
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Error fetching testimonials:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
}