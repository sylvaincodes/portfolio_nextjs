"use client"
import clsx from 'clsx';
import { useState } from 'react';

import { SectionTitle } from './section-title';
import SectionContent from './section-content';
import { SectionButton } from './section-button';
import TodoItem, { TodoItemState } from '../cards/todo-item';
import Container from '@/components/ui/container';
import { m } from 'framer-motion'

type Content = {
    state: TodoItemState;
    shows: Array<TodoItemState>;
    title: string;
    description: string;
};

const content: Array<Content> = [
    {
        state: 'typography',
        shows: ['typography'],
        title: 'Typography',
        description: 'Selecting the font type, font size, and font weight.',
    },
    {
        state: 'spacing',
        shows: ['typography', 'spacing'],
        title: 'Spacing',
        description: 'Positioning and adding spacing between elements.',
    },
    {
        state: 'colors',
        shows: ['typography', 'spacing', 'colors'],
        title: 'Colors',
        description: 'Choosing a color scheme with sufficient contrast.',
    },
    {
        state: 'effects',
        shows: ['typography', 'spacing', 'colors', 'effects'],
        title: 'Effects',
        description: 'Add effects like borders, shadows, rounded corners, etc.',
    },
];

function CleanIntuitive() {
    const [currentState, setCurrentState] = useState<Content | null>(null);
    const animation = {
        hide: { x: 100, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <>
            <section>
                <div className={clsx('mb-8')}>
                    <Container>
                        <SectionTitle
                            title="Eye Catching, Modern & Minimalist Design."
                            caption="Clean & Intuitive"
                            description="Keep the User Interface clean with a modern touch without
                        compromising the User Experience."
                        />
                    </Container>
                </div>
                <SectionContent>
                    <Container>
                        <div className={clsx('flex', 'lg:gap-12')}>
                            <m.div
                                initial="hide"
                                animate="show"
                                transition={{ delayChildren: 0.7, staggerChildren: 0.34 }}
                                className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
                            >
                                {content.map((item, i) => (
                                    <SectionButton
                                        key={item.state}
                                        title={item.title}
                                        description={item.description}
                                        icon={i + 1}
                                        active={currentState?.state === item.state}
                                        onClick={() => setCurrentState(item)}
                                    />
                                ))}
                            </m.div>
                            <m.div
                                initial={animation.hide}
                                whileInView={animation.show}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}

                                className={clsx('relative flex flex-1 items-center justify-center')}
                            >
                                <div
                                    className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
                                >
                                    <div>
                                        <TodoItem
                                            state={
                                                currentState
                                                    ? currentState.shows
                                                    : ['typography', 'spacing', 'colors', 'effects']
                                            }
                                        />
                                    </div>
                                    <div className={clsx('hidden', 'sm:block lg:hidden')}>
                                        <TodoItem
                                            state={
                                                currentState
                                                    ? currentState.shows
                                                    : ['typography', 'spacing', 'colors', 'effects']
                                            }
                                            title="UI Implementation"
                                            description="Start creating UI components using React and Tailwind CSS."
                                            date="10:00 AM · Tomorrow"
                                            tag1="Design"
                                            tag2="Components"
                                        />
                                    </div>
                                </div>
                            </m.div>
                        </div>
                    </Container>
                </SectionContent>
            </section>
        </>
    );
}

export default CleanIntuitive;
