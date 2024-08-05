import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
    <Image
        src="/logo.png"
        width={48}
        height={48}
        alt="Inimisttech.com logo"
    />
      <p className="text-[44px]">IniTech</p>
    </div>
  );
}
