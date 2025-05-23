export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          
          {/* Logo placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-black rounded-full opacity-20"></div>
          </div>
        </div>
        
        <h2 className="font-poppins text-xl font-semibold text-black mb-2">
          Sunu Entreprenariat
        </h2>
        <p className="text-gray-600">
          Chargement en cours...
        </p>
      </div>
    </div>
  )
} 