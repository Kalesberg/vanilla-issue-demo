import { Sprinkles } from '../../theme/sprinkles.css';
import { vars } from '../../theme/vars.css';

interface CycleProps {
  size?: number;
  cycleProgress: number;
  color?: Sprinkles['color'];
}

const Cycle = ({ size, cycleProgress, color }: CycleProps) => {
  const isCycleRollover = false;

  const strokeColor = (pathIndex: number) => {
    if (isCycleRollover) {
      return 'orange';
    } else if (pathIndex <= Math.floor(cycleProgress)) {
      if (color) {
        return vars.color[`${color}`];
      } else {
        return '#FFC929';
      }
    } else {
      return '#636366';
    }
  };

  return (
    <svg
      width={size ? size : '26'}
      height={size ? size : '26'}
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12.8334 3.20834V0' stroke={strokeColor(1)} strokeWidth='2' />
      <path d='M17.6459 4.49775L19.2501 1.71924' stroke={strokeColor(2)} strokeWidth='2' />
      <path d='M23.9471 6.41658L21.1686 8.02075' stroke={strokeColor(3)} strokeWidth='2' />
      <path d='M22.4584 12.8335L25.6667 12.8335' stroke={strokeColor(4)} strokeWidth='2' />
      <path d='M23.9471 19.2502L21.1686 17.646' stroke={strokeColor(5)} strokeWidth='2' />
      <path d='M19.25 23.9475L17.6459 21.1689' stroke={strokeColor(6)} strokeWidth='2' />
      <path d='M12.8334 25.6668L12.8334 22.4585' stroke={strokeColor(7)} strokeWidth='2' />
      <path d='M6.4167 23.9475L8.02087 21.1689' stroke={strokeColor(8)} strokeWidth='2' />
      <path d='M4.49756 17.6458L1.71906 19.25' stroke={strokeColor(9)} strokeWidth='2' />
      <path d='M-1.19209e-07 12.8335H3.20834' stroke={strokeColor(10)} strokeWidth='2' />
      <path d='M4.49756 8.02092L1.71906 6.41675' stroke={strokeColor(11)} strokeWidth='2' />
      <path d='M8.02086 4.49775L6.41669 1.71924' stroke={strokeColor(12)} strokeWidth='2' />
    </svg>
  );
};

export default Cycle;
