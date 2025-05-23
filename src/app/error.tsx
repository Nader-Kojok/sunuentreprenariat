'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-gray-200 mb-4">
            Oops!
          </h1>
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-black mb-4">
            Quelque chose s&apos;est mal passé
          </h2>
        </div>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Une erreur inattendue s&apos;est produite. Nous nous excusons pour le désagrément.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={reset}
            size="lg" 
            className="bg-black text-white hover:bg-gray-800"
          >
            Essayer de nouveau
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-black text-black hover:bg-black hover:text-white"
            onClick={() => window.location.href = '/'}
          >
            Retour à l&apos;accueil
          </Button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left bg-gray-50 p-4 rounded-lg max-w-2xl mx-auto">
            <summary className="cursor-pointer font-medium mb-2">
              Détails de l&apos;erreur (développement)
            </summary>
            <pre className="text-sm text-gray-700 overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
} 