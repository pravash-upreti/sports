import colors from '@/constants/colors';

export function getOneRandomColor(): string {
  const min = 0;
  const max = colors.length;
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return colors[randomNumber];
}
