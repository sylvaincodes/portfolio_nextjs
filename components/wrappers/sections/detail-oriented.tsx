import clsx from 'clsx';
import { SectionTitle } from './section-title';
import Container from '@/components/ui/container';


function DetailOriented() {
    return (
        <div className={clsx('mb-8')}>
            <Container>
                <SectionTitle
                    title="Keen Eye for Spotting Small Details."
                    caption="Detail Oriented"
                    description="Awareness to ease of access, User Interface consistency, and improved User Experience."
                />
            </Container>
        </div>
    );
}

export default DetailOriented;
