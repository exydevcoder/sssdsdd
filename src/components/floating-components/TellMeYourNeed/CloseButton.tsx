import { MsgIcon } from '@/components/icon';

export default function CloseButton() {
  return (
    <div className="w-full flex items-end justify-end mt-6">
      <button className="cta-btn">
        <MsgIcon />
      </button>
    </div>
  );
}
