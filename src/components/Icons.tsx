import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const CartIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 4h2l2.4 10.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" />
    <circle cx="10" cy="20" r="1.4" />
    <circle cx="18" cy="20" r="1.4" />
  </svg>
)

export const ClockIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const UsersIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.5a3.2 3.2 0 0 1 0 6" />
    <path d="M17.5 14.2A5.5 5.5 0 0 1 20.5 19" />
  </svg>
)

export const GaugeIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 18a8 8 0 1 1 16 0" />
    <path d="M12 18l4-5" />
  </svg>
)

export const FireIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3s4.5 3.6 4.5 8a4.5 4.5 0 0 1-9 0c0-1.6.7-2.9 1.6-4" />
    <path d="M12 21a5 5 0 0 0 5-5c0-2-1.3-3.7-2.6-5" />
  </svg>
)

export const ChevronIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const ArrowIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const PhoneIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4.5 5.5A2 2 0 0 1 6.5 4h2l1.4 3.5-1.8 1.4a12 12 0 0 0 5 5l1.4-1.8L18 12.5v2a2 2 0 0 1-2 2A12.5 12.5 0 0 1 4.5 5.5Z" />
  </svg>
)

export const MailIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
)

export const PinIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const Clock2Icon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const LeafIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 20c8 1 15-3 15-12 0 0-9-2-13 3-2.4 3-2 7-2 9Z" />
    <path d="M4 20c2-4 5-7 9-9" />
  </svg>
)

export const BoxIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z" />
    <path d="M3.5 7.5 12 12l8.5-4.5" />
    <path d="M12 12v9" />
  </svg>
)

export const TruckIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 6.5h11v9H3z" />
    <path d="M14 9.5h3.5l2.5 3v3H14z" />
    <circle cx="7" cy="18" r="1.8" />
    <circle cx="17" cy="18" r="1.8" />
  </svg>
)

export const SparkIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3.5 13.8 9l5.7 1.4-4.3 3.9 1 5.7L12 17.2 7.8 20l1-5.7L4.5 10.4 10.2 9 12 3.5Z" />
  </svg>
)

export const CheckIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
)

export const MenuIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const SunIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
  </svg>
)

export const MoonIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4 8.5 8.5 0 1 0 20 14.2Z" />
  </svg>
)

export const FacebookIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M14.5 8.5H16.5V5.5H14.5C12.6 5.5 11.5 6.8 11.5 8.7V11H9v3h2.5v6h3v-6H17l.5-3H14.5V9.2c0-.5.2-.7.7-.7Z" />
  </svg>
)

export const InstagramIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

export const XIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4.5 4.5 19.5 19.5" />
    <path d="M19.5 4.5 4.5 19.5" />
  </svg>
)

export const TwitterIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 5.5 10.5 12 4.4 18.5" />
    <path d="M19.6 5.5 13.5 12l6.1 6.5" />
    <path d="M10.5 12h3" />
  </svg>
)

export const GooglePlayBadge = () => (
  <svg width="160" height="48" viewBox="0 0 160 48" role="img" aria-label="Get it on Google Play">
    <rect width="160" height="48" rx="9" fill="#12100e" />
    <rect x="0.75" y="0.75" width="158.5" height="46.5" rx="8.25" fill="none" stroke="#4b463f" strokeWidth="1.5" />
    <path
      d="M17 14.6v18.8l9.6-9.4L17 14.6Z"
      fill="#34A853"
    />
    <path d="M17 14.6l9.6 9.4 3.3-3.2-9.9-5.6-3-.6Z" fill="#FBBC04" />
    <path d="M17 33.4l9.6-9.4 3.3 3.2-9.9 5.6-3 .6Z" fill="#EA4335" />
    <path d="M29.9 20.8 26.6 24l3.3 3.2 3.7-2.1c1-.6 1-2 0-2.6l-3.7-1.7Z" fill="#4285F4" />
    <text x="44" y="21" fill="#f4f1ea" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="0.5">
      GET IT ON
    </text>
    <text x="44" y="35" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700">
      Google Play
    </text>
  </svg>
)

export const AppStoreBadge = () => (
  <svg width="160" height="48" viewBox="0 0 160 48" role="img" aria-label="Download on the App Store">
    <rect width="160" height="48" rx="9" fill="#12100e" />
    <rect x="0.75" y="0.75" width="158.5" height="46.5" rx="8.25" fill="none" stroke="#4b463f" strokeWidth="1.5" />
    <path
      d="M27.6 24.6c0-2.5 2-3.7 2.1-3.8-1.1-1.7-2.9-1.9-3.6-1.9-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.9 1.2 1.9 2.6 3.2 2.5 1.3-.05 1.8-.8 3.3-.8 1.5 0 2 .8 3.3.8 1.4 0 2.2-1.2 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.03-.01-2.7-1.05-2.9-4.2Z"
      fill="#ffffff"
    />
    <path
      d="M25.2 15.6c.7-.9 1.2-2.1 1.1-3.3-1.1.05-2.4.7-3.1 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.4-.6 3.1-1.5Z"
      fill="#ffffff"
    />
    <text x="44" y="21" fill="#f4f1ea" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="0.5">
      Download on the
    </text>
    <text x="44" y="35" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700">
      App Store
    </text>
  </svg>
)
