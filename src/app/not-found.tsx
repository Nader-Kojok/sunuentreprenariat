import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="font-playfair text-9xl font-bold text-gray-200">404</h1>
            <div className="relative -mt-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-black">
                Page Non Trouvée
              </h2>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Désolé, la page que vous recherchez semble avoir été déplacée, supprimée ou n&apos;existe pas. 
            Retournez à l&apos;accueil ou explorez nos autres pages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
              <Link href="/">
                Retour à l&apos;Accueil
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="border-black text-black hover:bg-black hover:text-white">
              <Link href="/contact">
                Nous Contacter
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/about" className="group p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <h3 className="font-poppins font-semibold text-lg mb-2 group-hover:text-black">À Propos</h3>
              <p className="text-gray-600">Découvrez notre mission et notre vision</p>
            </Link>
            
            <Link href="/services" className="group p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <h3 className="font-poppins font-semibold text-lg mb-2 group-hover:text-black">Nos Services</h3>
              <p className="text-gray-600">Explorez nos programmes d&apos;accompagnement</p>
            </Link>
            
            <Link href="/blog" className="group p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
              <h3 className="font-poppins font-semibold text-lg mb-2 group-hover:text-black">Blog</h3>
              <p className="text-gray-600">Lisez nos derniers articles et conseils</p>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 