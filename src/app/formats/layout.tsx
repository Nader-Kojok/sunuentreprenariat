import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Formats | Sunu Entreprenariat',
  description: 'Découvrez nos trois formats phares : BizTalk, Foire Sunu Entreprenariat et Webinaires. Des formats d\'accompagnement uniques pour entrepreneurs sénégalais.',
  keywords: ['BizTalk', 'Foire entrepreneuriat', 'Webinaires', 'Formation entrepreneuriale', 'Sénégal', 'Accompagnement business'],
  openGraph: {
    title: 'Nos Formats | Sunu Entreprenariat',
    description: 'Découvrez nos trois formats phares : BizTalk, Foire Sunu Entreprenariat et Webinaires',
    type: 'website',
  },
};

export default function FormatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 