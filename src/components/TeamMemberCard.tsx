import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  position: string;
  description: string;
  image: string;
  specialties: string[];
}

const TeamMemberCard = ({ 
  name, 
  position, 
  description, 
  image, 
  specialties 
}: TeamMemberCardProps) => {
  return (
    <Card className="text-center group hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 space-y-4">
        <div className="relative mx-auto w-24 h-24 mb-4">
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-poppins font-semibold text-lg text-black">
            {name}
          </h3>
          <p className="text-senegal-gold font-medium">
            {position}
          </p>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>
        <div className="space-y-1">
          {specialties.map((specialty, i) => (
            <span key={i} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mr-1">
              {specialty}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard; 