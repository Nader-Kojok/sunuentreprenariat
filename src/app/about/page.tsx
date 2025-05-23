import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeart,
  faUsers,
  faGlobe,
  faLightbulb,
  faHandshake,
  faTrophy
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const values = [
    {
      icon: faHeart,
      title: "Passion",
      description: "Nous sommes passionnés par l&#39;entrepreneuriat et l&#39;accompagnement des porteurs de projets vers le succès."
    },
    {
      icon: faUsers,
      title: "Collaboration",
      description: "Nous croyons en la force de la communauté entrepreneuriale et favorisons les échanges entre entrepreneurs."
    },
    {
      icon: faGlobe,
      title: "Impact Local",
      description: "Notre mission est de contribuer au développement de l&#39;écosystème entrepreneurial sénégalais."
    },
    {
      icon: faLightbulb,
      title: "Innovation",
      description: "Nous encourageons l&#39;innovation et l&#39;adoption de nouvelles méthodes de développement d&#39;entreprise."
    },
    {
      icon: faHandshake,
      title: "Intégrité",
      description: "La transparence et l&#39;honnêteté guident chacune de nos relations avec les entrepreneurs que nous accompagnons."
    },
    {
      icon: faTrophy,
      title: "Excellence",
      description: "Nous visons l&#39;excellence dans chaque programme d&#39;accompagnement, en dépassant les attentes des entrepreneurs."
    }
  ];

  const teamMembers = [
    {
      name: "Khadija Diallo",
      position: "Fondatrice & Directrice Générale",
      description: "Entrepreneuse expérimentée, fondatrice de Sunu Entreprenariat avec une vision claire pour l&#39;écosystème entrepreneurial sénégalais.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      specialties: ["Vision Stratégique", "Leadership", "Développement d&#39;Écosystème"]
    },
    {
      name: "Rabyatou Diallo",
      position: "Directrice des Opérations",
      description: "Experte en développement d&#39;entreprise avec 10 ans d&#39;expérience dans l&#39;accompagnement d&#39;entrepreneurs sénégalais.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop&crop=face",
      specialties: ["Stratégie d&#39;Entreprise", "Coaching", "Développement Business"]
    },
    {
      name: "Aminata Sow",
      position: "Responsable Formation",
      description: "Formatrice expérimentée, spécialisée dans le développement des compétences entrepreneuriales et le leadership.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      specialties: ["Formation", "Leadership", "Gestion d&#39;Équipe"]
    },
    {
      name: "Ousmane Ba",
      position: "Coordinateur Événements",
      description: "Expert en organisation d&#39;événements entrepreneuriaux et en développement de réseaux professionnels.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      specialties: ["Événementiel", "Networking", "Partenariats"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 sm:pt-24 lg:pt-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-playfair font-bold text-4xl md:text-5xl text-black leading-tight">
                Notre Mission, Votre Réussite
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Depuis notre création à Dakar, nous combinons expertise en développement 
                d&#39;entreprise et connaissance profonde de l&#39;écosystème entrepreneurial 
                sénégalais pour accompagner les porteurs de projets vers le succès.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Entrepreneurs en formation ensemble"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
                Notre Parcours
              </h2>
              <p className="text-xl text-gray-600">
                Une vision née de la passion pour l&#39;entrepreneuriat au Sénégal
              </p>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-black">Sunu Entreprenariat</strong> est née d&#39;une vision simple mais ambitieuse : 
                accompagner les entrepreneurs sénégalais dans la quête de visibilité et le développement 
                de leur structure. Nous mettons tout en place pour que les entrepreneurs puissent faire 
                évoluer leur business grâce à des programmes d&#39;accompagnement adaptés.
              </p>
              
              <p>
                Fondée en 2020 par <strong className="text-black">Khadija DIALLO</strong>, ancienne entrepreneuse
                ayant réussi sa première entreprise, notre organisation a rapidement évolué pour devenir 
                un acteur incontournable de l&#39;écosystème entrepreneurial dakarois. Notre approche unique 
                combine formations pratiques, networking ciblé et accompagnement personnalisé.
              </p>
              
              <p>
                Aujourd&#39;hui, nous sommes fiers d&#39;avoir accompagné plus de <strong className="text-black">200 entrepreneurs</strong> 
                dans leur développement, des porteurs de projets aux dirigeants d&#39;entreprises établies. 
                Notre expertise couvre tous les aspects du développement d&#39;entreprise : de la structuration 
                juridique au développement commercial, en passant par la recherche de financement.
              </p>
              
              <p>
                Ce qui nous distingue, c&#39;est notre capacité à créer un écosystème bienveillant où 
                entrepreneurs, mentors et partenaires collaborent pour créer de la valeur et générer 
                des emplois durables au Sénégal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chaque programme et chaque accompagnement que nous proposons
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                    <FontAwesomeIcon icon={value.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-black">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts et entrepreneurs expérimentés qui accompagnent votre croissance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                position={member.position}
                description={member.description}
                image={member.image}
                specialties={member.specialties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Accompagner les entrepreneurs sénégalais dans la quête de visibilité et 
                le développement de leur structure. À travers nos événements, forums, 
                ateliers de formation et accompagnement personnalisé, nous créons les 
                conditions optimales pour faire évoluer leur business.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nous nous engageons à être le catalyseur de la réussite entrepreneuriale 
                au Sénégal en créant un écosystème dynamique où innovation, collaboration 
                et croissance durable se rencontrent.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl">
                Notre Vision
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Être reconnu comme la référence en matière d&#39;accompagnement entrepreneurial 
                en Afrique de l&#39;Ouest, en servant de modèle pour le développement d&#39;écosystèmes 
                entrepreneuriaux florissants sur tout le continent.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nous aspirons à créer une génération d&#39;entrepreneurs africains capables 
                de créer des emplois durables, d&#39;innover et de contribuer significativement 
                au développement économique et social de leurs communautés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 