'use client';

import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import  NavBar  from "@/app/dashboard/navbar";

const DynamicMapComponent = dynamic(() => import('./components/MapComponent'), { ssr: false });

const Home: React.FC = () => {
  const { data: session, status } = useSession(); // Get session data and status
  const router = useRouter();

  useEffect(() => {
    // Redirect to sign-in page if unauthenticated and not loading
    if (status === 'unauthenticated') {
      router.replace('/auth/signin');
    }
  }, [status, router]);

  // Render loading state while session is being fetched
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <main style={{ height: '100vh' }}>
      {status === 'authenticated' ? ( // Only render map if authenticated
      <section>
        <div>
          <NavBar/>
        </div>
        <div>
          <DynamicMapComponent />
        </div>
        </section>
      ) : (
        <p>Please sign in to access the map.</p> // Message for unauthenticated users
      )}
    </main>
  );
};

export default Home;
