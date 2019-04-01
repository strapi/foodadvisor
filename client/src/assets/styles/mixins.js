import colors from './colors';

const mixins = (color = colors.lightGreyAlpha) => ({
  bbox:
    'box-sizing: border-box;\n' +
    '-moz-box-sizing: border-box;\n' +
    '-webkit-box-sizing: border-box;',
  bshadow:
    `-webkit-box-shadow: inset 0 0 30px ${color};\n` +
    `-moz-box-shadow: inset 0 0 30px ${color};\n` +
    `box-shadow: inset 0 0 30px ${colors};`,
  overlay:
    `-webkit-box-shadow: inset 0px 0px 3px 1px ${color};\n` +
    `-moz-box-shadow: inset 0px 0px 3px 1px ${color};\n` +
    `box-shadow: inset 0px 0px 3px 1px ${colors};`
});

export default mixins;
