export type LogoProps = {
  size?: number;
  colorLightning?: string;
  colorLetter?: string;
};

export default function Logo({
  size = 25,
  colorLightning = '#FFCC00',
  colorLetter = '#1A232B',
}: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 400 400'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.37598 378.204C3.20208 377.55 71.3484 205.478 71.3484 205.478C71.2565 205.337 20.5969 218.976 20.5969 218.976C21.5183 218.942 54.3034 22.1403 54.0704 21.9357L168.456 21.6929L100.216 145.341L179.023 134.7C179.92 135.346 2.37598 378.204 2.37598 378.204Z'
        fill={colorLightning}
      />
      <path
        d='M261.986 89.0738C261.986 89.0738 172.371 99.857 172.825 99.4515L222.651 21.7917C523.094 109.454 414.14 396.295 66.9189 377.417L261.986 89.0738Z'
        fill={colorLetter}
      />
    </svg>
  );
}
