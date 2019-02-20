import getQueryParameters from '../getQueryParameters';

describe('getQueryParameters util', () => {
  it('should return the correct value', () => {
    const location = "?start=1";

    expect(getQueryParameters(location, 'start')).toBe('1');
  });

  it('should return null if parameter does not exist', () => {
    const location = "?started=1";

    expect(getQueryParameters(location, 'start')).toBeNull();
  });
});
