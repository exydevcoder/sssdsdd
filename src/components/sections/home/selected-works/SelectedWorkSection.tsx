import { TextRevealCard } from '@/components/ui/text-reveal-card';
import HorizontalScrollSlider from './HorizontalScrollSlider';

export default function SelectedWorkSection() {
  return (
    <section className="section">
      <div className="inner-section">
        <div className="flex items-center justify-center">
          <TextRevealCard text="Selected Works" revealText="Selected Works"/>
        </div>
        <HorizontalScrollSlider />
      </div>
    </section>
  );
}
