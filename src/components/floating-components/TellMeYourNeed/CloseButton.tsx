import { MsgIcon } from '@/components/icon';

interface CloseButtonProps {
  onClick: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button className="cta-btn" onClick={onClick}>
      <MsgIcon />
    </button>
  );
}
