import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendarAlt, 
  faClock, 
  faMapMarkerAlt, 
  faUsers,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import RegistrationModal from "./RegistrationModal";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "webinaire" | "forum" | "atelier" | "networking";
  capacity?: string;
  price?: string;
  isUpcoming?: boolean;
}

const EventCard = ({
  title,
  description,
  date,
  time,
  location,
  type,
  capacity,
  price = "Gratuit",
  isUpcoming = true
}: EventCardProps) => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleRegistrationClick = () => {
    if (isUpcoming) {
      setIsRegistrationModalOpen(true);
    }
  };

  const getEventTypeColor = (eventType: string) => {
    switch (eventType) {
      case "webinaire":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "forum":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "atelier":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "networking":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  const getEventTypeLabel = (eventType: string) => {
    switch (eventType) {
      case "webinaire":
        return "Webinaire";
      case "forum":
        return "Forum";
      case "atelier":
        return "Atelier";
      case "networking":
        return "Networking";
      default:
        return "Événement";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-gray-300">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge className={`${getEventTypeColor(type)} border-0`}>
            {getEventTypeLabel(type)}
          </Badge>
          {price && (
            <span className="text-sm font-semibold text-gray-900">
              {price}
            </span>
          )}
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 text-gray-500" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-gray-500" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 text-gray-500" />
            <span>{location}</span>
          </div>
          
          {capacity && (
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <FontAwesomeIcon icon={faUsers} className="w-4 h-4 text-gray-500" />
              <span>{capacity}</span>
            </div>
          )}
        </div>
        
        <div className="pt-4">
          <Button 
            className="w-full bg-black text-white hover:bg-gray-800 transition-colors group"
            disabled={!isUpcoming}
            onClick={handleRegistrationClick}
          >
            {isUpcoming ? "S'inscrire" : "Événement passé"}
            {isUpcoming && (
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
              />
            )}
          </Button>
        </div>
      </CardContent>

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onOpenChange={setIsRegistrationModalOpen}
        eventTitle={title}
        eventPrice={price}
        eventDate={date}
        eventLocation={location}
      />
    </Card>
  );
};

export default EventCard; 