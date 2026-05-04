export function BearLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LuckyBear"
    >
      <defs>
        <linearGradient id="bearGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cfd8e3" />
        </linearGradient>
        <linearGradient id="bearAccent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      {/* Ears */}
      <circle cx="16" cy="18" r="8" fill="url(#bearGrad)" />
      <circle cx="48" cy="18" r="8" fill="url(#bearGrad)" />
      <circle cx="16" cy="18" r="4" fill="url(#bearAccent)" opacity="0.8" />
      <circle cx="48" cy="18" r="4" fill="url(#bearAccent)" opacity="0.8" />
      {/* Head */}
      <circle cx="32" cy="34" r="20" fill="url(#bearGrad)" />
      {/* Snout */}
      <ellipse cx="32" cy="42" rx="10" ry="8" fill="#e8eef5" />
      {/* Eyes */}
      <circle cx="24" cy="32" r="2.5" fill="#0a0e1a" />
      <circle cx="40" cy="32" r="2.5" fill="#0a0e1a" />
      <circle cx="25" cy="31" r="0.8" fill="#fff" />
      <circle cx="41" cy="31" r="0.8" fill="#fff" />
      {/* Nose */}
      <ellipse cx="32" cy="40" rx="2.5" ry="2" fill="#0a0e1a" />
      {/* Mouth */}
      <path
        d="M 28 45 Q 32 48 36 45"
        stroke="#0a0e1a"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
