const Price = ({ price }) => {
  let result = '';

  switch (price) {
    case '_1':
      result = '€';
      break;
    case '_2':
      result = '€ €';
      break;
    case '_3':
      result = '€ € €';
      break;
    case '_4':
      result = '€ € € €';
      break;

    default:
      break;
  }
  return <>{result}</>;
};

export default Price;
