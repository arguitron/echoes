const sizeMap = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xlg: '32px',
};

const componentStyles = (key, input) => {
  if (key === 'fonSize' || key === 'gap' || key === 'radius') {
    return sizeMap[input] || input;
  }
  if (
    input.includes('top') ||
    input.includes('right') ||
    input.includes('bottom') ||
    input.includes('left')
  ) {
    const spacing = {};
    input.split(' ').forEach((part) => {
      const [side, size] = part.split('-');
      const spacingValue2 = sizeMap[size] || size || part;

      switch (side) {
        case 'top':
          spacing[`${key}Top`] = spacingValue2;
          break;
        case 'right':
          spacing[`${key}Right`] = spacingValue2;
          break;
        case 'bottom':
          spacing[`${key}Bottom`] = spacingValue2;
          break;
        case 'left':
          spacing[`${key}Left`] = spacingValue2;
          break;
        default:
          break;
      }
    });
    return spacing;
  }
  if (input.includes(' ')) {
    let spacingValue = [];
    input.split(' ').forEach((part) => {
      spacingValue = [...spacingValue, sizeMap[part] || part];
    });
    return { [key]: spacingValue.join(' ').trim() };
  }
  return { [key]: sizeMap[input] || input };
};

export default componentStyles;
