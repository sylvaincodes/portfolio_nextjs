import Footer from '@/components/wrappers/footer/footer';
import HeaderOne from '@/components/wrappers/header/header-one';
import PageHeader from '@/components/wrappers/headings/page-header';
import ProjectsContents from '@/components/wrappers/projects/page-contents';
import PageImage from '@/components/wrappers/projects/page-image';

import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { Metadata } from 'next';

export default function Home() {
    return (
        <>
            <HeaderOne />
            <main className='py-20 flex flex-col gap-12'>
                <PageHeader title="projects"
                    description="Showcase of my front-end related work."
                    headerImage={<PageImage />}
                />
                <ProjectsContents />
            </main>
            <Footer />
        </>
    );
}

export const metadata: Metadata = {
    title: "Projects - Sylvaincodes · Front-end Developer",
    description: "An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design.",
    icons: {
        icon: "/logo/logo-16.png"
    },
    openGraph: mergeOpenGraph({
        title: "Sylvaincodes · Front-end Developer",
        url: '/'
    })
};