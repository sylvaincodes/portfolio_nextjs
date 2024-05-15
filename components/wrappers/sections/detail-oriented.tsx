import clsx from 'clsx';
import { SectionTitle } from './section-title';
import Container from '@/components/ui/container';


function DetailOriented() {
    return (
        <div className={clsx('mb-8')}>
            <Container>
                <SectionTitle
                    title="Comprehensible and Optimized Code."
                    caption="Pretty & Optimized"
                    description="Writing clean code is a top priority while keeping it as optimized as possible."
                />
            </Container>
        </div>
    );
}

export default DetailOriented;
