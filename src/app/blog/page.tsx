"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "Tous",
    "Business Local", 
    "Financement",
    "Innovation & Tech",
    "Marché Sénégal",
    "Conseils Pratiques"
  ];

  const blogPosts = [
    {
      title: "Lancer Son Entreprise au Sénégal: Guide Complet 2024",
      excerpt: "De l'idée à la réalisation: toutes les étapes essentielles pour créer et formaliser votre entreprise au Sénégal, incluant les démarches administratives et financières.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      category: "Business Local",
      author: "Amadou Ndiaye",
      date: "15 Nov 2024",
      readTime: "8 min",
      slug: "lancer-entreprise-senegal-guide-2024"
    },
    {
      title: "Financement Participatif: Lever des Fonds Localement",
      excerpt: "Comment utiliser les tontines modernes, les plateformes de crowdfunding et les investisseurs locaux pour financer votre projet entrepreneurial au Sénégal.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
      category: "Financement",
      author: "Fatou Diallo",
      date: "12 Nov 2024",
      readTime: "6 min",
      slug: "financement-participatif-fonds-locaux"
    },
    {
      title: "Opportunités d'Affaires dans l'Agriculture Moderne",
      excerpt: "Découvrez les secteurs porteurs de l'agro-business au Sénégal: agriculture intelligente, transformation alimentaire et circuits courts.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      category: "Marché Sénégal",
      author: "Moustapha Seck",
      date: "8 Nov 2024",
      readTime: "10 min",
      slug: "opportunites-agriculture-moderne-senegal"
    },
    {
      title: "Digitaliser Sa PME: Outils et Stratégies Accessibles",
      excerpt: "Guide pratique pour intégrer le numérique dans votre petite entreprise sénégalaise sans gros budget: outils gratuits et solutions locales.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      category: "Innovation & Tech",
      author: "Aissatou Ba",
      date: "5 Nov 2024",
      readTime: "7 min",
      slug: "digitaliser-pme-outils-strategies"
    },
    {
      title: "Réseautage Entrepreneurial: Construire Sa Communauté",
      excerpt: "L'importance du networking dans l'écosystème entrepreneurial sénégalais: événements, associations et plateformes pour développer son réseau.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      category: "Conseils Pratiques",
      author: "Ibrahima Fall",
      date: "2 Nov 2024",
      readTime: "5 min",
      slug: "reseautage-entrepreneurial-communaute"
    },
    {
      title: "Exportation: Vendre Ses Produits à l'International",
      excerpt: "Stratégies pour développer votre marché à l'export depuis le Sénégal: formalités, partenariats et opportunités en Afrique de l'Ouest.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      category: "Business Local",
      author: "Khadija Thiam",
      date: "28 Oct 2024",
      readTime: "9 min",
      slug: "exportation-produits-international"
    },
    {
      title: "Entrepreneuriat Féminin: Défis et Solutions au Sénégal",
      excerpt: "Les spécificités de l'entrepreneuriat féminin au Sénégal: accès au financement, conciliation familiale et réseaux de soutien disponibles.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      category: "Marché Sénégal",
      author: "Mariama Sy",
      date: "25 Oct 2024",
      readTime: "8 min",
      slug: "entrepreneuriat-feminin-defis-solutions"
    },
    {
      title: "Innovation Sociale: Entreprendre Pour l'Impact",
      excerpt: "Comment créer une entreprise à impact social au Sénégal: modèles économiques, financements spécialisés et mesure de l'impact.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      category: "Innovation & Tech",
      author: "Ousmane Diop",
      date: "20 Oct 2024",
      readTime: "7 min",
      slug: "innovation-sociale-entreprendre-impact"
    },
    {
      title: "Gestion Financière pour Entrepreneurs Débutants",
      excerpt: "Les bases de la gestion financière adaptées aux réalités des entrepreneurs sénégalais: comptabilité simple, flux de trésorerie et planification.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      category: "Conseils Pratiques",
      author: "Abdou Kane",
      date: "15 Oct 2024",
      readTime: "6 min",
      slug: "gestion-financiere-entrepreneurs-debutants"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeFilter === "Tous" || post.category === activeFilter;
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 sm:pt-24 lg:pt-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-black leading-tight">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos derniers articles sur le marketing digital, 
              les tendances tech et les stratégies business adaptées au marché sénégalais.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-8">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" 
              />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
            
            {/* Categories Filter */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faFilter} className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700 font-medium">Filtrer:</span>
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
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                category={post.category}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
                slug={post.slug}
              />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun article trouvé pour cette recherche.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl">
              Restez Informé des Dernières Tendances
            </h2>
            <p className="text-xl text-gray-300">
              Abonnez-vous à notre newsletter pour recevoir nos insights exclusifs 
              sur le marketing digital au Sénégal directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="bg-white text-black"
              />
              <Button size="lg" className="bg-senegal-gold text-black hover:bg-yellow-400 font-semibold px-8">
                S&apos;abonner
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Pas de spam. Vous pouvez vous désabonner à tout moment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 