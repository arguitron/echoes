import PropTypes from 'prop-types';
import { componentStyles } from 'GUtils';
const GText = ({
  children,
  size = 'm',
  margin = '0',
  padding = '0',
  as = 'p',
  color = 'black',
  style,
  className,
}) => {
  const Text = as;
  const fontSize = componentStyles('fontSize', size);
  const appliedMargin = componentStyles('margin', margin);
  const appliedPadding = componentStyles('padding', padding);
  return (
    <Text
      className={className}
      style={{
        color,
        ...appliedPadding,
        ...appliedMargin,
        fontSize: fontSize,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

// GText.propTypes = {
//   as: PropTypes.oneOf(['p', 'span']),
//   size: PropTypes.string,
//   margin: PropTypes.string,
//   padding: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };

export default GText;
