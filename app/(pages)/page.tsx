import HeroOne from '@/components/wrappers/hero/hero-one';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { Metadata } from 'next';

export default function Home() {
  return (
    <HeroOne />
  );
}

export const metadata: Metadata = {
  title: "Sylvaincodes · Front-end Developer",
  description: "An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design.",
  icons: {
    icon: "/logo/logo-16.png"
  },
  openGraph: mergeOpenGraph({
    title: "Sylvaincodes · Front-end Developer",
    url: '/'
  })
};