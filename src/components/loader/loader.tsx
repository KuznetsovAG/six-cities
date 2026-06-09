import { CSSProperties } from 'react';
import css from './loader.module.css';

type LoaderProps = {
  /** Diameter of the spinner in pixels. */
  size?: number;
  /** Thickness of the spinner ring in pixels. */
  thickness?: number;
  /** Color of the active (rotating) part of the ring. */
  color?: string;
  /** Color of the static track behind the rotating part. */
  trackColor?: string;
  /** Render relative to the viewport instead of the parent element. */
  fullScreen?: boolean;
  /** Accessible label announced to screen readers. */
  label?: string;
  className?: string;
};

export const Loader = ({
  size = 40,
  thickness = 4,
  color,
  trackColor,
  fullScreen = false,
  label = 'Загрузка…',
  className,
}: LoaderProps) => {
  const cssVars = {
    '--loader-size': `${size}px`,
    '--loader-thickness': `${thickness}px`,
    ...(color ? { '--loader-color': color } : {}),
    ...(trackColor ? { '--loader-track-color': trackColor } : {}),
  } as CSSProperties;

  const wrapperClassName = [
    css.wrapper,
    fullScreen ? css.fullScreen : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={wrapperClassName}
      style={cssVars}
      role="status"
      aria-live="polite"
    >
      <span className={css.spinner} aria-hidden="true" />
      <span className="visually-hidden">{label}</span>
    </div>
  );
};
