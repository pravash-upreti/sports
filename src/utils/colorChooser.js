import colors from '../constants/colors';

export function getOneRandomColor() {
  const min = 0;
  const max = colors.length - 1;
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return colors[randomNumber];
}
