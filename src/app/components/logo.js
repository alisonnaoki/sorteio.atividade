// components/Logo.js
import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="/images/megasena.png"
      alt="Logo da Mega Sena"
      width={100}
      height={100}
    />
  );
};

export default Logo;