"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLocationDot, 
  faPhone, 
  faEnvelope,
  faClock,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { 
  faWhatsapp,
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        budget: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: faLocationDot,
      title: "Adresse",
      content: "Plateau, Dakar\nSénégal",
      link: "https://maps.google.com"
    },
    {
      icon: faPhone,
      title: "Téléphone",
      content: "+221 12 345 67 89",
      link: "tel:+221123456789"
    },
    {
      icon: faEnvelope,
      title: "Email",
      content: "contact@sunuentreprenariat.sn",
      link: "mailto:contact@sunuentreprenariat.sn"
    },
    {
      icon: faClock,
      title: "Horaires",
      content: "Lun - Ven: 8h00 - 18h00\nSam: 9h00 - 14h00",
      link: null
    }
  ];

  const services = [
    "Stratégie Digitale",
    "Marketing des Réseaux Sociaux",
    "Création de Contenu",
    "Développement Web",
    "SEO & Analytiques",
    "Développement de Marque",
    "Consultation",
    "Autre"
  ];

  const budgetRanges = [
    "Moins de 500 000 FCFA",
    "500 000 - 1 000 000 FCFA",
    "1 000 000 - 2 500 000 FCFA",
    "2 500 000 - 5 000 000 FCFA",
    "Plus de 5 000 000 FCFA",
    "À discuter"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 sm:pt-24 lg:pt-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-black leading-tight">
              Contactez-Nous
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prêt à transformer votre présence digitale ? Discutons de votre projet 
              et découvrons comment nous pouvons vous accompagner vers le succès.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins text-2xl">
                    Demande de Devis Gratuit
                  </CardTitle>
                  <p className="text-gray-600">
                    Remplissez ce formulaire et nous vous recontacterons dans les 24h
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-senegal-green rounded-full flex items-center justify-center mx-auto">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-poppins font-semibold text-xl text-black">
                        Merci pour votre message !
                      </h3>
                      <p className="text-gray-600">
                        Nous avons bien reçu votre demande et vous recontacterons très bientôt.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Entreprise</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Souhaité *</Label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            <option value="">Sélectionnez un service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Estimé</Label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            <option value="">Sélectionnez un budget</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-3 py-2 text-sm border border-input bg-background rounded-md ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                          placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-black text-white hover:bg-gray-800"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer ma Demande"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={info.icon} className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-poppins font-semibold text-lg text-black">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-gray-600 hover:text-black transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="font-poppins font-semibold text-lg text-black mb-4">
                  Suivez-Nous
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://wa.me/221123456789" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                  </a>
                </div>
              </Card>

              {/* Quick Response */}
              <Card className="p-6 bg-gray-50">
                <h3 className="font-poppins font-semibold text-lg text-black mb-2">
                  Réponse Rapide Garantie
                </h3>
                <p className="text-gray-600 text-sm">
                  Nous nous engageons à répondre à toutes les demandes dans les 24h. 
                  Pour les urgences, contactez-nous directement par WhatsApp.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-black">
              Notre Localisation
            </h2>
            <p className="text-xl text-gray-600">
              Rendez-nous visite au cœur de Dakar
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center space-y-4">
              <FontAwesomeIcon icon={faLocationDot} className="w-16 h-16 text-gray-400" />
              <div>
                <h3 className="font-poppins font-semibold text-xl text-gray-600">
                  Carte Interactive
                </h3>
                <p className="text-gray-500">
                  Plateau, Dakar - Sénégal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 