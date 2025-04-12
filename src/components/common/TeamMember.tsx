
import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  imageUrl, 
  socialLinks = {}, 
  delay = 0 
}) => {
  return (
    <div 
      className="team-card opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 group">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-72 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center">
          <div className="flex space-x-3 pb-6">
            {socialLinks.facebook && (
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            )}
            {socialLinks.twitter && (
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default TeamMember;
