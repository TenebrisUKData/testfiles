// Author: Jdr785
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex flex-col items-center mt-4 mb-2">
      <Image src="/logo.png" width={160} height={160} alt="Reinformed.uk Logo" priority />
      <h1 className="text-3xl font-bold mt-4 text-center">Reinformed.uk</h1>
    </div>
  );
}
