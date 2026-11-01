import { useLanguage } from '../i18n/LanguageContext'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function Logo({ variant = 'light', className = '' }: LogoProps) {
  const { lang } = useLanguage()

  return (
    <a
      className={`logo logo--${variant} ${className}`.trim()}
      href="#home"
      aria-label={lang === 'ar' ? 'ام اند ام لتأجير السيارات — الرئيسية' : 'M&M RENT A CAR — home'}
    >
      <span className="logo__mark">
        <svg viewBox="0 0 44 44" aria-hidden="true" focusable="false">
          <rect
            x="0.8"
            y="0.8"
            width="42.4"
            height="42.4"
            rx="10"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.32"
          />
          <path
            d="M8 29V15l7 9 7-9v14m2-14 6 14 6-14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinejoin="miter"
          />
          <path d="M8 34h28" fill="none" stroke="#b8c0c8" strokeWidth="2.2" />
        </svg>
      </span>
      <span className="logo__text">
        {lang === 'ar' ? (
          <>
            <strong className="logo__name logo__name--ar">{'\u0627\u0645 \u0627\u0646\u062f \u0627\u0645'}</strong>
            <span className="logo__sub">{'\u0644\u062a\u0623\u062c\u064a\u0631 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a'}</span>
          </>
        ) : (
          <>
            <strong className="logo__name">M&amp;M</strong>
            <span className="logo__sub">RENT A CAR</span>
          </>
        )}
      </span>
    </a>
  )
}
