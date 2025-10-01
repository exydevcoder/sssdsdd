import { TracingBeam } from '@/components/ui/tracing-beam';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export default function Beam() {
  return (
    <TracingBeam>
      <div className="flex flex-col gap-7 pl-10 sm:pl-20 pt-10">
        <StepOne />
        <StepTwo />
        <StepThree />
      </div>
    </TracingBeam>
  );
}
