import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUser, 
  faEnvelope, 
  faPhone, 
  faBriefcase, 
  faCreditCard,
  faCheck,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

interface RegistrationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  eventTitle: string;
  eventPrice?: string;
  eventDate: string;
  eventLocation: string;
}

interface FormData {
  // Étape 1: Informations personnelles
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Étape 2: Informations complémentaires
  profession: string;
  company: string;
  interests: string;
  
  // Étape 3: Paiement
  paymentMethod: "wave" | "orange_money" | "card" | "";
  
  // Pour Wave/Orange Money
  phonePayment?: string;
  
  // Pour carte bancaire
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardholderName?: string;
}

const RegistrationModal = ({
  isOpen,
  onOpenChange,
  eventTitle,
  eventPrice = "Gratuit",
  eventDate,
  eventLocation
}: RegistrationModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    company: "",
    interests: "",
    paymentMethod: "",
  });
  
  const isPaid = eventPrice !== "Gratuit";
  const totalSteps = isPaid ? 4 : 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Ici vous pouvez ajouter la logique pour envoyer les données
    console.log("Inscription soumise:", formData);
    onOpenChange(false);
    setCurrentStep(1);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      profession: "",
      company: "",
      interests: "",
      paymentMethod: "",
    });
  };

  const canProceedStep1 = formData.firstName && formData.lastName && formData.email && formData.phone;
  const canProceedStep2 = formData.profession;
  const canProceedStep3 = !isPaid || formData.paymentMethod;

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Prénom *</Label>
          <div className="relative">
            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              id="firstName"
              placeholder="Votre prénom"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Nom *</Label>
          <div className="relative">
            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              id="lastName"
              placeholder="Votre nom"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <div className="relative">
          <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="votre.email@exemple.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Téléphone *</Label>
        <div className="relative">
          <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            id="phone"
            placeholder="+221 XX XXX XX XX"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="profession">Profession *</Label>
        <Select onValueChange={(value) => handleInputChange("profession", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre profession" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="developer">Développeur/Développeuse</SelectItem>
            <SelectItem value="designer">Designer</SelectItem>
            <SelectItem value="manager">Manager/Chef de projet</SelectItem>
            <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
            <SelectItem value="student">Étudiant(e)</SelectItem>
            <SelectItem value="consultant">Consultant(e)</SelectItem>
            <SelectItem value="marketing">Marketing/Communication</SelectItem>
            <SelectItem value="sales">Commercial</SelectItem>
            <SelectItem value="other">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company">Entreprise/Organisation</Label>
        <div className="relative">
          <FontAwesomeIcon icon={faBriefcase} className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            id="company"
            placeholder="Nom de votre entreprise"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="interests">Centres d&apos;intérêt</Label>
        <Select onValueChange={(value) => handleInputChange("interests", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Vos centres d&apos;intérêt principaux" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tech">Technologies</SelectItem>
            <SelectItem value="business">Business/Entrepreneuriat</SelectItem>
            <SelectItem value="design">Design/UX</SelectItem>
            <SelectItem value="marketing">Marketing Digital</SelectItem>
            <SelectItem value="fintech">Fintech</SelectItem>
            <SelectItem value="networking">Networking</SelectItem>
            <SelectItem value="innovation">Innovation</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderStep3 = () => {
    if (!isPaid) {
      return (
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faCheck} className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold">Événement gratuit</h3>
          <p className="text-gray-600">Parfait ! Cet événement est gratuit. Cliquez sur &quot;Confirmer&quot; pour finaliser votre inscription.</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Choisissez votre mode de paiement</h3>
          <div className="text-2xl font-bold text-green-600">{eventPrice}</div>
        </div>

        <RadioGroup 
          value={formData.paymentMethod} 
          onValueChange={(value) => handleInputChange("paymentMethod", value)}
          className="space-y-4"
        >
          {/* Wave Money */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
              <RadioGroupItem value="wave" id="wave" />
              <Label htmlFor="wave" className="flex items-center space-x-3 cursor-pointer flex-1">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
                <span className="font-medium">Wave</span>
              </Label>
            </div>
            {formData.paymentMethod === "wave" && (
              <div className="ml-8 space-y-2">
                <Label htmlFor="wavePhone">Numéro Wave</Label>
                <Input
                  id="wavePhone"
                  placeholder="+221 XX XXX XX XX"
                  value={formData.phonePayment || ""}
                  onChange={(e) => handleInputChange("phonePayment", e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Orange Money */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
              <RadioGroupItem value="orange_money" id="orange_money" />
              <Label htmlFor="orange_money" className="flex items-center space-x-3 cursor-pointer flex-1">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">OM</span>
                </div>
                <span className="font-medium">Orange Money</span>
              </Label>
            </div>
            {formData.paymentMethod === "orange_money" && (
              <div className="ml-8 space-y-2">
                <Label htmlFor="omPhone">Numéro Orange Money</Label>
                <Input
                  id="omPhone"
                  placeholder="+221 XX XXX XX XX"
                  value={formData.phonePayment || ""}
                  onChange={(e) => handleInputChange("phonePayment", e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Carte bancaire */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex items-center space-x-3 cursor-pointer flex-1">
                <FontAwesomeIcon icon={faCreditCard} className="w-6 h-6 text-gray-600" />
                <span className="font-medium">Carte bancaire</span>
              </Label>
            </div>
            {formData.paymentMethod === "card" && (
              <div className="ml-8 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Numéro de carte</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber || ""}
                    onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Date d&apos;expiration</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/AA"
                      value={formData.expiryDate || ""}
                      onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={formData.cvv || ""}
                      onChange={(e) => handleInputChange("cvv", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardholderName">Nom du titulaire</Label>
                  <Input
                    id="cardholderName"
                    placeholder="Nom comme sur la carte"
                    value={formData.cardholderName || ""}
                    onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
        </RadioGroup>
      </div>
    );
  };

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <FontAwesomeIcon icon={faCheck} className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Confirmez votre inscription</h3>
        <p className="text-gray-600">Vérifiez vos informations avant de finaliser</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Récapitulatif de l&apos;événement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Événement :</span>
            <span className="font-medium">{eventTitle}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date :</span>
            <span className="font-medium">{eventDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Lieu :</span>
            <span className="font-medium">{eventLocation}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Prix :</span>
            <span className="font-medium text-green-600">{eventPrice}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Vos informations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Nom complet :</span>
            <span className="font-medium">{formData.firstName} {formData.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email :</span>
            <span className="font-medium">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Téléphone :</span>
            <span className="font-medium">{formData.phone}</span>
          </div>
          {formData.profession && (
            <div className="flex justify-between">
              <span className="text-gray-600">Profession :</span>
              <span className="font-medium">{formData.profession}</span>
            </div>
          )}
          {isPaid && formData.paymentMethod && (
            <div className="flex justify-between">
              <span className="text-gray-600">Mode de paiement :</span>
              <span className="font-medium">
                {formData.paymentMethod === "wave" && "Wave"}
                {formData.paymentMethod === "orange_money" && "Orange Money"}
                {formData.paymentMethod === "card" && "Carte bancaire"}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Informations personnelles";
      case 2: return "Informations complémentaires";
      case 3: return isPaid ? "Paiement" : "Confirmation";
      case 4: return "Récapitulatif";
      default: return "Inscription à l'événement";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Inscription à l&apos;événement
          </DialogTitle>
          <p className="text-center text-gray-600">{eventTitle}</p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Étape {currentStep} sur {totalSteps}</span>
              <span>{Math.round(progress)}% terminé</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step title */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">{getStepTitle()}</h3>
          </div>

          {/* Step content */}
          <div className="min-h-[300px]">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
              <span>Précédent</span>
            </Button>

            {currentStep === totalSteps ? (
              <Button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                <span>Confirmer l&apos;inscription</span>
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && !canProceedStep1) ||
                  (currentStep === 2 && !canProceedStep2) ||
                  (currentStep === 3 && !canProceedStep3)
                }
                className="flex items-center space-x-2"
              >
                <span>Suivant</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal; 