const Price = ({ price }) => {
  let result = '';

  switch (price) {
    case 'p1':
      result = '€';
      break;
    case 'p2':
      result = '€ €';
      break;
    case 'p3':
      result = '€ € €';
      break;
    case 'p4':
      result = '€ € € €';
      break;

    default:
      break;
  }
  return <>{result}</>;
};

export default Price;
