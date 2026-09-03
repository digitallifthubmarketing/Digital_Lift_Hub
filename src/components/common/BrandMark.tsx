type BrandMarkProps = {
  className?: string;
};

const BrandMark = ({ className = "h-10 w-10" }: BrandMarkProps) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    role="img"
    aria-label="Digital Lift Hub logo"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="56" height="56" rx="16" fill="#111c3d" />
    <rect x="12" y="12" width="40" height="40" rx="12" fill="#f4ebd7" />
    <path d="M20 42V22H26V42H20ZM26 42V30.5H36V42H26ZM36 42V22H43V42H36Z" fill="#111c3d" />
    <path d="M18 17H46" stroke="#f4c95d" strokeWidth="2.4" strokeLinecap="round" opacity="0.9" />
  </svg>
);

export default BrandMark;