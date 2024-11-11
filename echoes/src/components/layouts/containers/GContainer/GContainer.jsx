import { componentStyles } from 'GUtils';
import PropTypes from 'prop-types';
const GContainer = ({
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

GContainer.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  display: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
  ]),
  style: PropTypes.object,
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
  gap: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  as: PropTypes.string,
  radius: PropTypes.string,
};

export default GContainer;
