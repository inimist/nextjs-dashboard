import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
      </div>
      <div className="mt-4 flex grow flex-col col-start-4 gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <p className="text-xl text-red md:text-3xl">I'm Aavya Thakur!</p>
            <p className="text-xl text-red md:text-3xl">I'm 6 years old!</p>
            <p className="text-xl text-red md:text-3xl">My mother name is Poonam</p>
            <p className="text-xl text-red md:text-3xl">My father name is Arvind</p>
            <p className="text-xl text-red md:text-3xl">I like to watch TV and Mobile Phone whole day. This is my bad habbit. I know. Please dont beat me up.</p>
            <img src='https://previews.dropbox.com/p/thumb/ACSB-Vgjfm1DY89K6Qu81nNaZlvt6eNhL0hnqFr94askqBBIwJOTIYtdk5kQPox_9VLQXtYf1CnLs6TTkC9qcVjZf0wKDX9QzIEirhFMTeR1QoxxDV_dm7Mk2Xlkx57MEiQFM8NpwpscOSYmLzvl1UwWVV4ZY3qm01AL6rq638rlVdDBrwhV_Lo2KyXtJMOo7pbXi15lzXsmzW-EjShiyzJplHFBIDdg4PwD9L94qBTJQ4ZzwzsFOd0x4sqj1Ggc1Nm8Lha7GGDU0YBDSG7HJN-N8w3V_6Z2QBWdDzMmICIYRho2Udnc452m3g9OZPqVU8aD2pyeuCD4hHyYg_urNDEagQ65eU9-12edFvM4abQEEY_rtbEFs2Dsnozf-2ActrIiXx8NTlG-dk8boyOGy_Fn/p.jpeg' width="600" height="600" />
            <p className="text-xl text-red md:text-3xl">I like to read books and listen to stories.</p>
            <p className="text-xl text-red md:text-3xl">My favorite stories are Tom & Jerry, Snow White, Sleeping Beauty, Panchtantra and many others.</p> 
            <p className="text-xl text-red md:text-3xl">I dont like doing my home work. When I am asked to read or write I start to feel drowsy and asleep.</p>
            <p className="text-xl text-red md:text-3xl">My other bad habbit is to bite my fatther and mother. Sometimes I become a dog-like. I start to bark and bite like a dog.</p>
            <p className="text-xl text-red md:text-3xl">My another bad habbit is to slap and beat my parent. I want to get rid of this bad habbit.</p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-red transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
      <div className="mt-4 flex grow flex-col columns-xl gap-8 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <p className="text-xl text-red md:text-3xl">I'm Aavya Thakur!</p>
            <p className="text-xl text-red md:text-3xl">I'm 6 years old!</p>
            <p className="text-xl text-red md:text-3xl">My mother name is Poonam</p>
            <p className="text-xl text-red md:text-3xl">My father name is Arvind</p>
            <p className="text-xl text-red md:text-3xl">I like to watch TV and Mobile Phone whole day. This is my bad habbit. I know. Please dont beat me up.</p>
            <img src='https://previews.dropbox.com/p/thumb/ACSB-Vgjfm1DY89K6Qu81nNaZlvt6eNhL0hnqFr94askqBBIwJOTIYtdk5kQPox_9VLQXtYf1CnLs6TTkC9qcVjZf0wKDX9QzIEirhFMTeR1QoxxDV_dm7Mk2Xlkx57MEiQFM8NpwpscOSYmLzvl1UwWVV4ZY3qm01AL6rq638rlVdDBrwhV_Lo2KyXtJMOo7pbXi15lzXsmzW-EjShiyzJplHFBIDdg4PwD9L94qBTJQ4ZzwzsFOd0x4sqj1Ggc1Nm8Lha7GGDU0YBDSG7HJN-N8w3V_6Z2QBWdDzMmICIYRho2Udnc452m3g9OZPqVU8aD2pyeuCD4hHyYg_urNDEagQ65eU9-12edFvM4abQEEY_rtbEFs2Dsnozf-2ActrIiXx8NTlG-dk8boyOGy_Fn/p.jpeg' width="600" height="600" />
            <p className="text-xl text-red md:text-3xl">I like to read books and listen to stories.</p>
            <p className="text-xl text-red md:text-3xl">My favorite stories are Tom & Jerry, Snow White, Sleeping Beauty, Panchtantra and many others.</p> 
            <p className="text-xl text-red md:text-3xl">I dont like doing my home work. When I am asked to read or write I start to feel drowsy and asleep.</p>
            <p className="text-xl text-red md:text-3xl">My other bad habbit is to bite my fatther and mother. Sometimes I become a dog-like. I start to bark and bite like a dog.</p>
            <p className="text-xl text-red md:text-3xl">My another bad habbit is to slap and beat my parent. I want to get rid of this bad habbit.</p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-red transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
