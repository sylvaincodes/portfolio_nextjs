"use client"
import clsx from 'clsx';
import { useState } from 'react';
import { SectionTitle } from '../sections/section-title';
import SectionContent from '../sections/section-content';
import { SectionButton } from '../sections/section-button';
import { GithubIcon } from 'lucide-react';
import { GitHubIcon, NpmIcon } from '@/components/ui/icons';
import AppWindow from '../wireframes/AppWindow';
import GitHubWireframe from '../wireframes/GitHub';
import NpmWireframe from '../wireframes/Npm';
import Container from '@/components/ui/container';


function ProjectsContents() {
    const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

    return (
        <>
            <Container>
                <SectionTitle
                    title="The next animation library."
                    caption="next-animation"
                    description="Add a scroll revealed animation to your react project."
                    button={{
                        title: 'learn more',
                        href: 'https://www.npmjs.com/package/next-animation',
                    }}
                />
            </Container>
            <SectionContent>
                <Container>
                    <div className={clsx('flex', 'lg:gap-12')}>
                        <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
                            <div className={clsx('flex flex-col gap-3')}>
                                <SectionButton
                                    title="Available on GitHub"
                                    icon={<GithubIcon className={clsx('my-2 h-16 w-16')} />}
                                    description="Access powerful and flexible package on GitHub with MIT license."
                                    active={currentState === 'github'}
                                    onClick={() => setCurrentState('github')}
                                />
                                <SectionButton
                                    title="npm package"
                                    icon={<NpmIcon className={clsx('my-2 h-16 w-16')} />}
                                    description="Install and use the package with ease thanks to its typed options."
                                    active={currentState === 'npm'}
                                    onClick={() => setCurrentState('npm')}
                                />
                            </div>
                        </div>
                        <div className={clsx('w-full', 'lg:w-auto')}>
                            <div className={clsx('-mt-[41px]')}>
                                <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                                    <AppWindow
                                        type="browser"
                                        browserTabs={[
                                            {
                                                icon: <GitHubIcon className="h-4 w-4" />,
                                                title: 'sylvaincodes/next-animation - GitHub',
                                                isActive: currentState === 'github',
                                            },
                                            {
                                                icon: <NpmIcon className="h-4 w-4" />,
                                                title: 'next-animation - npm',
                                                isActive: currentState === 'npm',
                                            },
                                        ]}
                                    >
                                        {currentState === 'github' && (
                                            <GitHubWireframe
                                                author="sylvaincodes"
                                                license="MIT"
                                                repository="next-animation"
                                                description="Add a scroll revealed animation to your react project."
                                            />
                                        )}
                                        {currentState === 'npm' && (
                                            <NpmWireframe
                                                packageName="next-animation"
                                                description="Add a scroll revealed animation to your react project."
                                                isWithTypeScript
                                            />
                                        )}
                                    </AppWindow>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </SectionContent>
        </>
    );
}

export default ProjectsContents;
