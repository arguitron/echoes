import { componentStyles } from 'GUtils';
const GList = ({
  children,
  className,
  background,
  margin = '0',
  padding = '0',
  display,
  justifyContent,
  style,
  alignItems,
  gap,
  height,
  border,
  as = 'div',
  radius,
}) => {
  const Wrapper = as;
  const appliedMargin = componentStyles('margin', margin);
  const appliedPadding = componentStyles('padding', padding);
  const appliedGap = componentStyles('gap', gap);
  const appliedRadius = componentStyles('radius', radius);
  return (
    <Wrapper
      className={className}
      style={{
        ...appliedMargin,
        ...appliedPadding,
        background: background,
        display,
        justifyContent,
        alignItems,
        height,
        border,
        gap: appliedGap,
        radius: appliedRadius,
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
};

export default GList;
