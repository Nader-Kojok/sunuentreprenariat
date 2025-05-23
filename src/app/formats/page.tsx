"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import RegistrationModal from "@/components/RegistrationModal";
import { 
  faComments,
  faStore,
  faLaptopCode,
  faUsers,
  faMicrophone,
  faCalendarAlt,
  faHandshake,
  faAward,
  faRocket,
  faArrowRight,
  faCheckCircle,
  faClock,
  faMapMarkerAlt,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

export default function FormatsPage() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({
    title: "",
    date: "",
    location: "",
    price: "Gratuit"
  });

  const handleRegistration = (eventTitle: string, eventDate: string = "À définir", eventLocation: string = "Dakar", eventPrice: string = "Gratuit") => {
    setSelectedEvent({
      title: eventTitle,
      date: eventDate,
      location: eventLocation,
      price: eventPrice
    });
    setIsRegistrationModalOpen(true);
  };

  const formats = [
    {
      id: "biztalk",
      icon: faComments,
      title: "BizTalk",
      subtitle: "Conversations d'Affaires Inspirantes",
      description: "Des discussions interactives avec des entrepreneurs à succès, des investisseurs et des experts de l'écosystème entrepreneurial sénégalais.",
      image: "/images/biztalk-hero.jpg", // Placeholder
      features: [
        "Rencontres mensuelles avec des entrepreneurs inspirants",
        "Sessions de questions-réponses interactives",
        "Networking privilégié après chaque session",
        "Retours d'expérience concrets et authentiques",
        "Conseils stratégiques personnalisés",
        "Opportunités de mentorat direct"
      ],
      details: {
        frequency: "Une fois par mois",
        duration: "2 heures",
        location: "Dakar & En ligne",
        participants: "50-100 entrepreneurs"
      },
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "foire",
      icon: faStore,
      title: "Foire Sunu Entreprenariat",
      subtitle: "L'Événement Entrepreneurial de l'Année",
      description: "Le plus grand rassemblement d'entrepreneurs du Sénégal, proposant des stands d'exposition, des conférences et des opportunités de networking inégalées.",
      image: "/images/foire-hero.jpg", // Placeholder
      features: [
        "Plus de 200 exposants entrepreneurs",
        "Conférences avec des experts internationaux",
        "Concours de pitch avec prix attractifs",
        "Espaces dédiés au networking professionnel",
        "Démonstrations de produits et services",
        "Opportunités d'investissement et de partenariat"
      ],
      details: {
        frequency: "Annuelle",
        duration: "3 jours",
        location: "Centre de Conférences, Dakar",
        participants: "5000+ visiteurs"
      },
      color: "from-green-500 to-green-600"
    },
    {
      id: "webinaires",
      icon: faLaptopCode,
      title: "Webinaires",
      subtitle: "Formation Continue en Ligne",
      description: "Sessions de formation spécialisées accessible depuis n'importe où, couvrant tous les aspects de l'entrepreneuriat moderne et du développement d'entreprise.",
      image: "/images/webinaires-hero.jpg", // Placeholder
      features: [
        "Sessions thématiques spécialisées",
        "Formations avec des experts reconnus",
        "Interaction en temps réel avec les formateurs",
        "Enregistrements disponibles pour rediffusion",
        "Supports de formation téléchargeables",
        "Certificats de participation reconnus"
      ],
      details: {
        frequency: "Hebdomadaire",
        duration: "1-2 heures",
        location: "100% en ligne",
        participants: "Illimité"
      },
      color: "from-purple-500 to-purple-600"
    }
  ];

  const upcomingEvents = [
    {
      format: "BizTalk",
      title: "Financement et Levée de Fonds au Sénégal",
      date: "15 Janvier 2024",
      speaker: "Amadou Diallo - Directeur, Fonds d'Investissement",
      icon: faComments,
      price: "Gratuit"
    },
    {
      format: "Webinaire",
      title: "Marketing Digital pour PME Africaines",
      date: "22 Janvier 2024",
      speaker: "Marie Ndiaye - Experte Marketing Digital",
      icon: faLaptopCode,
      price: "Gratuit"
    },
    {
      format: "Foire",
      title: "Foire Sunu Entreprenariat 2024",
      date: "15-17 Mars 2024",
      speaker: "Événement principal de l'année",
      icon: faStore,
      price: "15,000 FCFA"
    }
  ];

  const benefits = [
    {
      icon: faUsers,
      title: "Réseau Entrepreneurial",
      description: "Connectez-vous avec plus de 2000 entrepreneurs actifs dans notre écosystème"
    },
    {
      icon: faRocket,
      title: "Accélération Business",
      description: "Bénéficiez d'un accompagnement concret pour accélérer la croissance de votre entreprise"
    },
    {
      icon: faAward,
      title: "Expertise Reconnue",
      description: "Apprenez auprès d'experts nationaux et internationaux reconnus dans leurs domaines"
    },
    {
      icon: faHandshake,
      title: "Opportunités Concrètes",
      description: "Accédez à des opportunités réelles d'investissement, de partenariat et de collaboration"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 sm:pt-24 lg:pt-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
              Nos Formats Phares
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos trois formats d&apos;accompagnement uniques, conçus pour répondre 
              aux besoins variés des entrepreneurs sénégalais à chaque étape de leur parcours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800"
                onClick={() => handleRegistration("Inscription Générale aux Événements")}
              >
                Participer aux Événements
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Voir le Calendrier
                <FontAwesomeIcon icon={faCalendarAlt} className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {formats.map((format, index) => (
              <div key={format.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${format.color} rounded-full flex items-center justify-center`}>
                      <FontAwesomeIcon icon={format.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
                        {format.title}
                      </h2>
                      <p className="text-lg text-gray-600 font-medium">
                        {format.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {format.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600">Fréquence</span>
                      </div>
                      <p className="text-black font-medium">{format.details.frequency}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faVideo} className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600">Durée</span>
                      </div>
                      <p className="text-black font-medium">{format.details.duration}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600">Lieu</span>
                      </div>
                      <p className="text-black font-medium">{format.details.location}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faUsers} className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600">Participants</span>
                      </div>
                      <p className="text-black font-medium">{format.details.participants}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-black">Ce que vous obtenez :</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {format.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`bg-gradient-to-r ${format.color} text-white hover:opacity-90 transition-opacity`}
                    onClick={() => handleRegistration(format.title, "Prochaine session", format.details.location)}
                  >
                    S&apos;inscrire à {format.title}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Image Placeholder */}
                <div className="lg:w-1/2">
                  <div className={`w-full h-80 lg:h-96 bg-gradient-to-br ${format.color} rounded-lg flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <FontAwesomeIcon icon={format.icon} className="w-16 h-16 mb-4" />
                      <h3 className="text-2xl font-bold">{format.title}</h3>
                      <p className="mt-2 opacity-90">Image représentative</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
              Pourquoi Choisir Nos Formats ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète et diversifiée pour accompagner votre croissance entrepreneuriale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-poppins">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
              Événements à Venir
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ne manquez aucun de nos prochains événements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <FontAwesomeIcon icon={event.icon} className="w-6 h-6 text-black" />
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {event.format}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-poppins leading-tight">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700 font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faMicrophone} className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{event.speaker}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => handleRegistration(event.title, event.date, "Dakar", event.price)}
                  >
                    S&apos;inscrire
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              Prêt à Rejoindre Notre Écosystème ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Participez à nos formats d&apos;accompagnement et donnez une nouvelle dimension 
              à votre parcours entrepreneurial.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100"
                onClick={() => handleRegistration("Programme Complet d'Accompagnement")}
              >
                Rejoindre le Programme
                <FontAwesomeIcon icon={faRocket} className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Télécharger le Calendrier
                <FontAwesomeIcon icon={faCalendarAlt} className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onOpenChange={setIsRegistrationModalOpen}
        eventTitle={selectedEvent.title}
        eventPrice={selectedEvent.price}
        eventDate={selectedEvent.date}
        eventLocation={selectedEvent.location}
      />

      <Footer />
    </div>
  );
} 