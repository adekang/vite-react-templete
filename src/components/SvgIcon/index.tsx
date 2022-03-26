import React, { memo, useMemo } from "react";

export type svgProps = {
  iconName: string;
  className: string;
  fill?: string;
  fontSize?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
};

const SvgIcon: React.FC<svgProps> = (props) => {
  const { fontSize, style, className, onClick, iconName, fill } = props;
  const symbolId = useMemo(() => `#icon-${iconName}`, [iconName]);

  return (
    <svg
      fontSize={fontSize!}
      style={{ ...svgStyle, fontSize, ...style }}
      aria-hidden="true"
      className={className!}
      onClick={onClick}
    >
      <use xlinkHref={symbolId} fill={fill!} />
    </svg>
  );
};

const svgStyle = {
  width: "1em",
  height: "1em",
  verticalAlign: "-0.15em",
  overflow: "hidden",
  fill: "currentColor", // 颜色值
  fontSize: "1.1em",
};

export default memo(SvgIcon);
