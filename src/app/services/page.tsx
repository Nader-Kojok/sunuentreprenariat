import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChalkboardTeacher,
  faUsers,
  faMicrophone,
  faLaptopCode,
  faHandshake,
  faNetworkWired,
  faCheckCircle,
  faArrowRight,
  faHeadset,
  faRocket,
  faTrophy
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {
  const services = [
    {
      icon: faChalkboardTeacher,
      title: "Ateliers de Formation",
      description: "Sessions pratiques pour développer vos compétences entrepreneuriales et acquérir les outils essentiels à la croissance de votre business.",
      features: [
        "Formation en gestion d'entreprise et stratégie",
        "Marketing digital et stratégie commerciale", 
        "Gestion financière et comptabilité simplifiée",
        "Leadership et management d'équipe efficace",
        "Techniques de négociation et vente",
        "Certification à l'issue de chaque module"
      ]
    },
    {
      icon: faUsers,
      title: "Forums Entrepreneuriaux",
      description: "Espaces d'échanges privilégiés pour connecter les entrepreneurs et favoriser les collaborations stratégiques.",
      features: [
        "Rencontres mensuelles d'entrepreneurs confirmés",
        "Sessions de networking professionnel ciblé",
        "Échanges d'expériences et bonnes pratiques",
        "Opportunités de partenariats stratégiques",
        "Groupes de travail sectoriels",
        "Mentoring par des entrepreneurs expérimentés"
      ]
    },
    {
      icon: faMicrophone,
      title: "Panels d'Experts",
      description: "Conférences avec des experts reconnus pour partager leurs connaissances et inspirer votre parcours entrepreneurial.",
      features: [
        "Intervenants experts reconnus du secteur",
        "Retours d'expérience concrets et inspirants",
        "Sessions interactives questions-réponses",
        "Conseils stratégiques personnalisés",
        "Cas d'études d'entrepreneurs à succès",
        "Supports et ressources exclusives"
      ]
    },
    {
      icon: faLaptopCode,
      title: "Webinaires Interactifs",
      description: "Formations en ligne accessibles pour approfondir vos connaissances à votre rythme et selon vos disponibilités.",
      features: [
        "Sessions en direct et rediffusions disponibles",
        "Supports de formation téléchargeables",
        "Interaction en temps réel avec les formateurs",
        "Certificats de participation reconnus",
        "Plateforme d'apprentissage dédiée",
        "Suivi de progression personnalisé"
      ]
    },
    {
      icon: faHandshake,
      title: "Accompagnement Personnalisé",
      description: "Suivi individuel adapté à vos besoins spécifiques pour maximiser vos chances de réussite entrepreneuriale.",
      features: [
        "Coaching one-to-one avec des experts",
        "Plan de développement entièrement personnalisé",
        "Suivi régulier et ajustements continus",
        "Conseil stratégique et opérationnel",
        "Aide à la recherche de financement",
        "Support dans les moments critiques"
      ]
    },
    {
      icon: faNetworkWired,
      title: "Événements de Networking",
      description: "Occasions privilégiées de rencontrer d'autres entrepreneurs, investisseurs et partenaires potentiels de l'écosystème.",
      features: [
        "Soirées networking mensuelles exclusives",
        "Rencontres organisées avec investisseurs",
        "Participation aux salons et foires",
        "Événements thématiques par secteur d'activité",
        "Missions économiques et voyages d'affaires",
        "Accès à notre réseau de partenaires"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Évaluation Initiale",
      description: "Nous analysons votre projet, vos besoins et vos objectifs pour comprendre votre vision entrepreneuriale."
    },
    {
      number: "02", 
      title: "Plan d'Accompagnement",
      description: "Développement d'un plan personnalisé combinant formation, coaching et networking selon vos besoins."
    },
    {
      number: "03",
      title: "Mise en Œuvre",
      description: "Participation aux ateliers, événements et sessions de coaching avec un suivi rigoureux de vos progrès."
    },
    {
      number: "04",
      title: "Croissance Continue",
      description: "Accompagnement à long terme avec ajustements selon l&apos;évolution de votre entreprise."
    }
  ];

  const whyChooseUs = [
    {
      icon: faRocket,
      title: "Méthodologie Éprouvée",
      description: "Nous utilisons des méthodes d&apos;accompagnement testées et validées par nos succès."
    },
    {
      icon: faHeadset,
      title: "Support Continu",
      description: "Un accompagnement dédié avec un mentor attitré pour chaque entrepreneur."
    },
    {
      icon: faTrophy,
      title: "Résultats Mesurables",
      description: "Nous nous engageons sur des objectifs concrets et mesurables de croissance."
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
              Programmes d&apos;Accompagnement Entrepreneurial
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services d&apos;accompagnement conçus pour 
              propulser votre entreprise vers le succès et développer votre visibilité 
              dans l&apos;écosystème entrepreneurial sénégalais.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-3">
              Demander un Entretien Gratuit
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
              Notre Processus d&apos;Accompagnement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie structurée pour garantir votre succès entrepreneurial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto font-bold text-xl">
                    {step.number}
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-black">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
              Pourquoi Choisir Sunu Entreprenariat ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les avantages qui font de nous le partenaire idéal pour votre croissance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                    <FontAwesomeIcon icon={reason.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-black">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
                Des Résultats Concrets
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nos entrepreneurs accompagnés ont créé plus de 500 emplois directs 
                et ont levé collectivement plus de 2 milliards FCFA en financement. 
                Rejoignez cette communauté de réussite.
              </p>
              <div className="space-y-3">
                {[
                  "200+ entrepreneurs accompagnés avec succès",
                  "85% de taux de survie des entreprises après 3 ans",
                  "Croissance moyenne de 300% du chiffre d'affaires",
                  "Réseau de plus de 1000 partenaires actifs"
                ].map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-senegal-green" />
                    <span className="text-gray-700">{stat}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-black text-white hover:bg-gray-800">
                Voir Nos Success Stories
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Entrepreneurs en formation"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl">
              Prêt à Accélérer Votre Croissance ?
            </h2>
            <p className="text-xl text-gray-300">
              Rejoignez notre programme d&apos;accompagnement et bénéficiez de l&apos;expertise 
              de nos mentors pour développer votre entreprise au Sénégal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3">
                Candidater Maintenant
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3">
                Télécharger Notre Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 