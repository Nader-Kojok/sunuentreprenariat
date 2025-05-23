import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ServiceCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-shadow duration-300 border-gray-200 hover:border-gray-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-start space-y-4">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
            <FontAwesomeIcon icon={icon} className="w-6 h-6 text-white" />
          </div>
          
          <div className="space-y-2">
            <h3 className="font-poppins font-semibold text-xl text-black">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">
              {description}
            </p>
          </div>

          <ul className="space-y-2 w-full">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard; 