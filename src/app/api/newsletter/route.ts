import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { error: 'L\'adresse email est requise.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Veuillez fournir une adresse email valide.' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database/mailing list service
    // 2. Send welcome email
    // 3. Handle existing subscribers
    
    // For now, we'll just log the data and return success
    console.log('Newsletter subscription:', {
      email,
      name: name || 'Anonymous',
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement actual newsletter service integration
    // You might want to use services like:
    // - Mailchimp
    // - ConvertKit
    // - Brevo (Sendinblue)
    // - EmailOctopus
    
    return NextResponse.json(
      { 
        message: 'Merci pour votre inscription ! Vous recevrez bientôt nos dernières actualités.',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de votre inscription. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Méthode non autorisée' },
    { status: 405 }
  )
} 