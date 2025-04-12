
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  delay?: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ id, title, category, imageUrl, delay = 0 }) => {
  return (
    <div 
      className="portfolio-card opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
          <Link to={`/work/${id}`} className="opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white rounded-full p-3">
              <ExternalLink className="h-6 w-6 text-primary" />
            </div>
          </Link>
        </div>
      </div>
      <div className="p-6">
        <span className="text-sm text-primary font-medium">{category}</span>
        <h3 className="text-xl font-bold mt-1">{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioCard;
