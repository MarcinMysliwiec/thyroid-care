export const Colors = {
  primary: '#4c4159',
  secondary: '#ff84aa',
  third: '#B1ACFF',
  black: '#000000',
  dark: '#1A1A1A',
  darkGrey: '#4f4f4f',
  lightGrey: '#c1c1c1',
  white: '#ffffff',
}

export const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));


export const RandomRGB = (min = 0, max = 255) => {
  return {
    r: randomBetween(min, max),
    g: randomBetween(min, max),
    b: randomBetween(min, max),
  }
}

export const RandomHEX = (mode = 'normal') => {
  const color = (mode === 'normal') ? RandomRGB(92, 255) : RandomRGB(0, 127)

  let r = color.r.toString(16);
  let g = color.g.toString(16);
  let b = color.b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}
