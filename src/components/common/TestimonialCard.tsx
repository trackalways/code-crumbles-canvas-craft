
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  imageUrl: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role, 
  company, 
  rating, 
  imageUrl,
  delay = 0
}) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <blockquote className="text-gray-600 mb-6">"{quote}"</blockquote>
      <div className="flex items-center">
        <img 
          src={imageUrl} 
          alt={author} 
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
