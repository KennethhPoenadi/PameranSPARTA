'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { SearchIcon } from 'lucide-react';

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      // Optionally show a loading indicator while the session status is being determined
      return;
    }
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  return (
    <main className="bg-gradient-to-b from-yellow-100 to-green-300 min-h-screen flex flex-col p-5">
      <h1 className="font-semibold text-3xl mb-7">Total Points:</h1>
      <form className="relative w-full max-w-md mx-auto mb-5">
        <div className="relative">
          <input
            type="search"
            placeholder="Search your reward"
            className="rounded-full w-full p-4 pr-12 shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <SearchIcon size={20} />
          </button>
        </div>
      </form>
      <div className="w-full max-w-md mx-auto">
        <div className="bg-blue-200 rounded-lg px-4 py-2 text-lg">
          Clothing Discount: "Get 20% Off on All Items at Fashion Street, Grand Mall."
        </div>
      </div>
    </main>
  );
}
