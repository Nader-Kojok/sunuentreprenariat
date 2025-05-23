import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, service } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont requis.' },
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
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      message,
      service,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement actual email sending logic
    // You might want to use services like:
    // - Resend
    // - SendGrid
    // - Nodemailer with Gmail/SMTP
    
    return NextResponse.json(
      { 
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.' },
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