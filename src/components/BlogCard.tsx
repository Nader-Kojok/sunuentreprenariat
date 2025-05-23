import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  author, 
  date, 
  readTime,
  slug 
}: BlogCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-senegal-gold text-black text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4 h-full flex flex-col">
        <div className="space-y-3 flex-grow">
          <h3 className="font-poppins font-semibold text-xl text-black leading-tight group-hover:text-senegal-gold transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        <div className="space-y-4">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center text-xs text-gray-500 space-x-4">
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faUser} className="w-3 h-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faCalendar} className="w-3 h-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Read More Button */}
          <Button 
            variant="ghost" 
            className="p-0 h-auto text-black hover:text-senegal-gold group/btn"
            asChild
          >
            <Link href={`/blog/${slug}`} className="flex items-center space-x-2">
              <span className="font-medium">Lire la suite</span>
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" 
              />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard; 