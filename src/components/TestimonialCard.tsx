import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  company, 
  avatar, 
  rating 
}: TestimonialCardProps) => {
  return (
    <Card className="h-full bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          {/* Quote Icon */}
          <div className="text-gray-300">
            <FontAwesomeIcon icon={faQuoteLeft} className="w-8 h-8" />
          </div>

          {/* Rating */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={`w-4 h-4 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-gray-700 italic">
            &ldquo;{quote}&rdquo;
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
            <Avatar className="w-12 h-12">
              <AvatarImage src={avatar} alt={author} />
              <AvatarFallback className="bg-gray-200 text-gray-600">
                {author.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-black">{author}</div>
              <div className="text-sm text-gray-600">
                {position} - {company}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard; 