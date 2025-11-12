import * as React from "react";

export type SkewNavItem = {
  icon: string; // e.g. "icon-reorder"
  href?: string;
  label?: string; // a11y label
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type SkewNavProps = {
  items: SkewNavItem[];
  rotateDeg?: number; // default: -35
  skew?: { x?: number; y?: number }; // default: {x:20,y:5}
  sizeEm?: number; // default: 2.5
  theme?: Partial<{
    bg: string;
    fg: string;
    hoverBg: string;
    hoverFg: string;
    side1: string;
    side2: string;
    shadow: string;
    ring: string;
    bodyBg: string;
  }>;
  className?: string;
  glass?: boolean;
};

export const SkewNav: React.FC<SkewNavProps> = ({
  items,
  rotateDeg = -35,
  skew = { x: 20, y: 5 },
  sizeEm = 2.5,
  theme,
  className,
  glass = false,
}) => {
  const style = React.useMemo<React.CSSProperties>(
    () => ({
      ["--sk-bg" as any]: theme?.bg ?? (glass ? "rgba(0,0,0,0.55)" : "#000"),
      ["--sk-fg" as any]: theme?.fg ?? "#575757",
      ["--sk-hover-bg" as any]:
        theme?.hoverBg ?? (glass ? "rgba(255,110,66,0.85)" : "#ff6e42"),
      ["--sk-hover-fg" as any]: theme?.hoverFg ?? "#fffcfb",
      ["--sk-side1" as any]: theme?.side1 ?? "#121212",
      ["--sk-side2" as any]: theme?.side2 ?? "#181818",
      ["--sk-shadow" as any]: theme?.shadow ?? "#e1e1e1",
      ["--sk-ring" as any]: theme?.ring ?? "#b65234",
      ["--sk-height-em" as any]: `${sizeEm}`,
      ["--sk-rotate" as any]: `${rotateDeg}deg`,
      ["--sk-skew-x" as any]: `${skew.x ?? 20}deg`,
      ["--sk-skew-y" as any]: `${skew.y ?? 5}deg`,
      ["--sk-body" as any]: theme?.bodyBg ?? undefined,
    }),
    [rotateDeg, skew.x, skew.y, sizeEm, theme, glass]
  );

  return (
    <nav
      aria-label="Skew navigation"
      className={
        "sk-container skw-nav" +
        (glass ? " glass" : "") +
        (className ? ` ${className}` : "")
      }
      style={style}
    >
      {/* Optional runway/shadow plane for enhanced glass look */}
      {glass && <div className="skw-shadow" aria-hidden="true" />}

      <ul className="sk-list" role="list">
        {items.map((it, idx) => (
          <li key={idx} className="sk-li" role="listitem">
            <a
              className={"sk-item skw-tile" + (glass ? " sk-glass" : "")}
              href={it.href ?? "#"}
              onClick={it.onClick}
              aria-label={it.label ?? it.icon}
            >
              <i className={it.icon} aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
