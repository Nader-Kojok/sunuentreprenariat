import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faTag } from "@fortawesome/free-solid-svg-icons";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  client: string;
  results: string[];
  link?: string;
  technologies: string[];
}

const PortfolioCard = ({ 
  title, 
  description, 
  image, 
  category, 
  client, 
  results, 
  link,
  technologies 
}: PortfolioCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          {link && (
            <Button 
              variant="outline" 
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black hover:bg-gray-100"
              asChild
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4 mr-2" />
                Voir le Projet
              </Link>
            </Button>
          )}
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-senegal-gold text-black text-xs font-medium px-2 py-1 rounded-full">
            <FontAwesomeIcon icon={faTag} className="w-3 h-3 mr-1" />
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-poppins font-semibold text-xl text-black group-hover:text-senegal-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            Client: {client}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-black text-sm">Résultats:</h4>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-start">
                <span className="w-1.5 h-1.5 bg-senegal-green rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                {result}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-black text-sm">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard; 