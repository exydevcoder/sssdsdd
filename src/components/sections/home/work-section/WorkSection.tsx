import { TextRevealCard } from '@/components/ui/text-reveal-card';
import Services from './Services';
import EmailMeBtn from '@/components/buttons/EmailMeBtn';
import BookMeBtn from '@/components/buttons/BookMeBtn';

export default function WorkSection() {
  return (
    <section className="section pb-[128px] md:pb-[256px]">
      <div className="inner-section flex flex-col gap-13">
        <div className="flex items-center justify-center">
          <TextRevealCard text="Selected Works" revealText="My Case Studies" />
        </div>
        <Services />
        <div className="flex flex-col gap-10 items-center justify-center py-6 md:py-10">
          <h3 className="max-w-[500px] text-center justify-center text-white text-4xl font-light leading-[48px]">You can send a mail or book a quick call with me</h3>
          <div className="flex items-center justify-center gap-1.5">
            <EmailMeBtn />
            <BookMeBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
