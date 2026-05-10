const LOGO_SRC = '/brand/tensorgrids-mark.png'

type LogoProps = {
  className?: string
  /** `nav`: header / footer · `hero`: large landing (if used) */
  variant?: 'nav' | 'hero'
  imgClassName?: string
}

/**
 * Logo image is a transparent PNG (`tensorgrids-mark.png`). Background was removed
 * so it sits cleanly on white and sky hero backgrounds.
 */
export function Logo({ className = '', variant = 'nav', imgClassName = '' }: LogoProps) {
  const imgClass =
    variant === 'hero'
      ? 'h-full max-h-[min(18rem,50vh)] w-auto max-w-full object-contain object-center'
      : 'h-8 w-auto max-h-10 max-w-[200px] object-contain object-left sm:h-9 sm:max-w-[220px]'

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={LOGO_SRC}
        alt="TensorGrids"
        className={`${imgClass} ${imgClassName}`.trim()}
        decoding="async"
        fetchPriority={variant === 'nav' ? 'high' : 'auto'}
      />
    </div>
  )
}
