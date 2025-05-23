"use client";

import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatCard from "@/components/StatCard";
import EventCard from "@/components/EventCard";
import BlogCard from "@/components/BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChalkboardTeacher,
  faUsers,
  faLaptopCode,
  faHandshake,
  faArrowRight,
  faCheckCircle,
  faMicrophone,
  faNetworkWired
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      icon: faChalkboardTeacher,
      title: "Ateliers de Formation",
      description: "Sessions pratiques pour développer vos compétences entrepreneuriales et acquérir les outils essentiels à la croissance de votre business.",
      features: [
        "Formation en gestion d'entreprise",
        "Marketing et stratégie commerciale", 
        "Gestion financière et comptabilité",
        "Leadership et management d'équipe"
      ]
    },
    {
      icon: faUsers,
      title: "Forums Entrepreneuriaux",
      description: "Espaces d'échanges et de networking pour connecter les entrepreneurs et favoriser les collaborations stratégiques.",
      features: [
        "Rencontres mensuelles d'entrepreneurs",
        "Sessions de networking professionnel",
        "Échanges d'expériences et bonnes pratiques",
        "Opportunités de partenariats stratégiques",
        "Groupes de travail sectoriels"
      ]
    },
    {
      icon: faMicrophone,
      title: "Panels d'Experts",
      description: "Conférences avec des experts reconnus pour partager leurs connaissances et expériences entrepreneuriales.",
      features: [
        "Intervenants experts du secteur",
        "Retours d'expérience concrets",
        "Sessions interactives Q&A",
        "Conseils stratégiques personnalisés",
        "Supports et ressources exclusives"
      ]
    },
    {
      icon: faLaptopCode,
      title: "Webinaires Interactifs",
      description: "Formations en ligne accessibles pour approfondir vos connaissances à votre rythme et selon vos disponibilités.",
      features: [
        "Sessions en direct et rediffusions",
        "Supports de formation téléchargeables",
        "Interaction en temps réel",
        "Certificats de participation"
      ]
    },
    {
      icon: faHandshake,
      title: "Accompagnement Personnalisé",
      description: "Suivi individuel adapté à vos besoins spécifiques pour maximiser vos chances de réussite entrepreneuriale.",
      features: [
        "Coaching one-to-one",
        "Plan de développement personnalisé",
        "Suivi régulier de vos progrès",
        "Conseil stratégique continu"
      ]
    },
    {
      icon: faNetworkWired,
      title: "Événements de Networking",
      description: "Occasions privilégiées de rencontrer d'autres entrepreneurs, investisseurs et partenaires potentiels de l'écosystème.",
      features: [
        "Soirées networking mensuelles",
        "Rencontres avec investisseurs",
        "Salons et foires entrepreneuriales",
        "Événements thématiques sectoriels"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Grâce aux ateliers de Sunu Entreprenariat, j'ai pu structurer mon business plan et lever des fonds pour mon entreprise. L'accompagnement personnalisé fait vraiment la différence.",
      author: "Amadou Diallo",
      position: "Fondateur",
      company: "TechDakar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Les forums m'ont permis de rencontrer mes associés actuels. Le networking organisé par Sunu Entreprenariat a été décisif pour le développement de mon entreprise.",
      author: "Fatou Sarr",
      position: "Co-fondatrice",
      company: "ModaDakar",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "L'accompagnement personnalisé m'a aidé à éviter de nombreux pièges entrepreneuriaux. Mes revenus ont triplé en 18 mois grâce aux conseils reçus.",
      author: "Moussa Ba",
      position: "CEO",
      company: "InnovSen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  const stats = [
    { number: "200+", label: "Entrepreneurs Accompagnés" },
    { number: "150+", label: "Ateliers Organisés" },
    { number: "4", label: "Années d'Expérience" },
    { number: "95%", label: "Taux de Satisfaction" }
  ];

  const upcomingEvents = [
    {
      title: "Forum Entrepreneurial : L'Innovation au Sénégal",
      description: "Deux jours de conférences, d'ateliers et de networking pour explorer les tendances du marché sénégalais. Networking, panels d'experts et opportunités d'investissement.",
      date: "15 Janvier 2025",
      time: "09:00 - 17:00",
      location: "Hôtel Radisson Blu, Dakar",
      type: "forum" as const,
      capacity: "150 participants",
      price: "25,000 FCFA"
    },
    {
      title: "Webinaire : Stratégies de Marketing Digital",
      description: "Apprenez les meilleures pratiques du marketing digital pour développer votre entreprise. Session interactive avec Q&A en direct.",
      date: "22 Janvier 2025",
      time: "14:00 - 16:00",
      location: "En ligne (Zoom)",
      type: "webinaire" as const,
      capacity: "100 participants",
      price: "Gratuit"
    },
    {
      title: "Atelier : Business Plan et Recherche de Financement",
      description: "Formation pratique pour élaborer un business plan solide et identifier les sources de financement adaptées à votre projet.",
      date: "30 Janvier 2025",
      time: "09:00 - 13:00",
      location: "Sunu Entreprenariat, Plateau",
      type: "atelier" as const,
      capacity: "25 participants",
      price: "15,000 FCFA"
    },
    {
      title: "Soirée Networking : Connectons l'Entrepreneuriat",
      description: "Événement de networking exclusif pour entrepreneurs, investisseurs et partenaires de l'écosystème entrepreneurial dakarois.",
      date: "08 Février 2025",
      time: "18:00 - 22:00",
      location: "Terrou-Bi Resort, Dakar",
      type: "networking" as const,
      capacity: "80 participants",
      price: "10,000 FCFA"
    }
  ];

  const newsArticles = [
    {
      title: "L'Écosystème Entrepreneurial Sénégalais en Pleine Expansion",
      excerpt: "Le Sénégal connaît une croissance remarquable de son écosystème entrepreneurial avec l'émergence de nombreuses startups innovantes et l'augmentation des investissements en capital-risque.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
      category: "Économie",
      author: "Équipe Sunu Entreprenariat",
      date: "10 Janvier 2025",
      readTime: "5 min",
      slug: "ecosysteme-entrepreneurial-senegalais-expansion"
    },
    {
      title: "Les Opportunités de Financement pour les Entrepreneurs Africains",
      excerpt: "Découvrez les nouvelles sources de financement disponibles pour les entrepreneurs africains, des fonds d'investissement locaux aux partenariats internationaux.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      category: "Financement",
      author: "Dr. Aminata Fall",
      date: "08 Janvier 2025", 
      readTime: "7 min",
      slug: "opportunites-financement-entrepreneurs-africains"
    },
    {
      title: "Comment le Digital Transforme l'Entrepreneuriat au Sénégal",
      excerpt: "L'impact de la transformation digitale sur les entreprises sénégalaises et les nouvelles opportunités créées par les technologies émergentes.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      category: "Innovation",
      author: "Moussa Konaté",
      date: "05 Janvier 2025",
      readTime: "6 min", 
      slug: "digital-transformation-entrepreneuriat-senegal"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 sm:pt-24 lg:pt-28 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
                  Accompagnement Entrepreneurial,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
                    Réussite Garantie
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Sunu Entreprenariat vise à accompagner les entrepreneurs dans la quête de visibilité 
                  et le développement de leur structure. Événements, forums, ateliers de formation, 
                  accompagnement personnalisé, nous mettons tout en place pour faire évoluer votre business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-3">
                  Planifier un Entretien
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-3">
                  Découvrir Nos Événements
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <StatCard
                    key={index}
                    number={stat.number}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                  alt="Entrepreneurs en formation chez Sunu Entreprenariat"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-senegal-gold rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-senegal-green rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
              Nos Programmes d&apos;Accompagnement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour accompagner votre croissance entrepreneuriale 
              et développer votre visibilité sur le marché sénégalais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
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
              Participez à nos prochains événements pour développer votre réseau, 
              acquérir de nouvelles compétences et faire évoluer votre entreprise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
                date={event.date}
                time={event.time}
                location={event.location}
                type={event.type}
                capacity={event.capacity}
                price={event.price}
                isUpcoming={true}
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-3"
            >
              Voir Tous les Événements
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
                Votre Partenaire de Croissance Entrepreneuriale
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Basée au cœur de Dakar, Sunu Entreprenariat combine une expertise 
                en développement d&apos;entreprise avec une connaissance approfondie de 
                l&apos;écosystème entrepreneurial sénégalais pour offrir un accompagnement 
                qui fait vraiment la différence.
              </p>
              <div className="space-y-3">
                {[
                  "Expertise de l'écosystème entrepreneurial local",
                  "Méthodologies d'accompagnement éprouvées",
                  "Réseau étendu d'entrepreneurs et partenaires",
                  "Suivi personnalisé et orienté résultats"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-senegal-green" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-black text-white hover:bg-gray-800">
                En Savoir Plus Sur Notre Mission
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
                alt="Espace de formation moderne à Dakar"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
              Témoignages d&apos;Entrepreneurs
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez comment nous avons accompagné des entrepreneurs vers le succès
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
              Actualités & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restez informé des dernières tendances de l&apos;entrepreneuriat au Sénégal 
              et découvrez nos analyses sur l&apos;écosystème des affaires africain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {newsArticles.map((article, index) => (
              <BlogCard
                key={index}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                category={article.category}
                author={article.author}
                date={article.date}
                readTime={article.readTime}
                slug={article.slug}
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-3"
            >
              Voir Toutes les Actualités
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl">
              Prêt à Développer Votre Entreprise ?
            </h2>
            <p className="text-xl text-gray-300">
              Rejoignez notre communauté d&apos;entrepreneurs ambitieux et bénéficiez 
              d&apos;un accompagnement personnalisé pour atteindre vos objectifs de croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3">
                Demander un Entretien Gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-white/20"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
