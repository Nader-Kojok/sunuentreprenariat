"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const categories = [
    "Tous",
    "Accompagnement d'Entrepreneurs", 
    "Formations & Ateliers",
    "Événements & Networking",
    "Coaching Personnalisé",
    "Programmes Sectoriels"
  ];

  const portfolioItems = [
    {
      title: "Accompagnement - Startup AgriTech GreenSénégal",
      description: "Accompagnement complet d'une startup agricole technologique de l'idéation au développement commercial, incluant structuration juridique et recherche de financement.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
      category: "Accompagnement d'Entrepreneurs",
      client: "GreenSénégal",
      results: [
        "Structuration juridique et administrative complète",
        "Levée de fonds de 50 millions FCFA",
        "Développement de 3 produits innovants",
        "Création de 15 emplois directs"
      ],
      link: "#",
      technologies: ["Business Plan", "Étude de Marché", "Pitch Deck", "Recherche de Financement"]
    },
    {
      title: "Programme de Formation - Femmes Entrepreneures",
      description: "Cycle de formation de 6 mois destiné aux femmes entrepreneures avec modules pratiques en gestion d'entreprise, marketing et leadership.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
      category: "Formations & Ateliers",
      client: "25 Femmes Entrepreneures",
      results: [
        "25 participantes formées avec succès",
        "80% ont lancé leur activité",
        "Croissance moyenne CA de 200%",
        "Création de réseau de mentorat"
      ],
      link: "#",
      technologies: ["Modules de Formation", "Coaching Groupe", "Mentorat", "Suivi Post-Formation"]
    },
    {
      title: "Forum Entrepreneurial - Dakar Business Summit",
      description: "Organisation du plus grand événement entrepreneurial de l'année réunissant 300+ entrepreneurs, investisseurs et experts de l'écosystème sénégalais.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      category: "Événements & Networking",
      client: "Écosystème Entrepreneurial Dakar",
      results: [
        "300+ participants sur 2 jours",
        "50+ partenariats créés",
        "15 deals conclus pendant l'événement",
        "Couverture média nationale"
      ],
      link: "#",
      technologies: ["Événementiel", "Networking", "Conférences", "B2B Matchmaking"]
    },
    {
      title: "Coaching Personnalisé - Restaurant Teranga",
      description: "Accompagnement individuel intensif pour restructurer et développer une chaîne de restaurants traditionnels sénégalais face à la concurrence moderne.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      category: "Coaching Personnalisé",
      client: "Groupe Teranga",
      results: [
        "Restructuration opérationnelle complète",
        "Hausse de 150% du chiffre d'affaires",
        "Ouverture de 3 nouvelles succursales",
        "Optimisation des coûts de 30%"
      ],
      link: "#",
      technologies: ["Coaching One-to-One", "Analyse Financière", "Plan de Développement", "Suivi Mensuel"]
    },
    {
      title: "Programme Sectoriel - E-commerce Local",
      description: "Programme spécialisé de 4 mois pour accompagner 15 entrepreneurs dans le développement de boutiques en ligne adaptées au marché sénégalais.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      category: "Programmes Sectoriels",
      client: "15 E-commerçants",
      results: [
        "15 boutiques en ligne lancées",
        "Intégration paiements locaux réussie",
        "Formations techniques dispensées",
        "Réseau de partenaires développé"
      ],
      link: "#",
      technologies: ["Formation E-commerce", "Stratégie Digitale", "Partenariats", "Coaching Collectif"]
    },
    {
      title: "Atelier BizTalk - Stratégies de Financement",
      description: "Série d'ateliers pratiques sur les différentes sources de financement disponibles pour les entrepreneurs sénégalais, avec témoignages d'experts.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "Formations & Ateliers",
      client: "80 Entrepreneurs",
      results: [
        "4 sessions avec 80 participants",
        "20 dossiers de financement préparés",
        "12 entrepreneurs financés",
        "Partenariat avec 5 institutions"
      ],
      link: "#",
      technologies: ["Ateliers Pratiques", "Études de Cas", "Templates", "Networking"]
    }
  ];

  const filteredItems = activeFilter === "Tous" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 sm:pt-24 lg:pt-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-black leading-tight">
              Nos Success Stories d&apos;Accompagnement
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment Sunu Entreprenariat a accompagné des entrepreneurs sénégalais 
              dans leur parcours de croissance, de la création à l&apos;expansion de leurs entreprises.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faFilter} className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700 font-medium">Filtrer par catégorie:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={`
                    ${activeFilter === category 
                      ? "bg-black text-white hover:bg-gray-800" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
                client={item.client}
                results={item.results}
                link={item.link}
                technologies={item.technologies}
              />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun projet trouvé pour cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl">
              Votre Entreprise Sera Notre Prochaine Success Story
            </h2>
            <p className="text-xl text-gray-300">
              Rejoignez notre communauté d&apos;entrepreneurs accompagnés et bénéficiez de 
              l&apos;expertise de Sunu Entreprenariat pour développer votre business au Sénégal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3">
                Candidater pour un Accompagnement
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3"
              >
                Découvrir Nos Programmes
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 