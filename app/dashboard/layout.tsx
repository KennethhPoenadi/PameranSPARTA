import Head from 'next/head';
import NavBar from './navbar';

export const metadata = {
  title: "TaskHunt",
  description: "Save our environment!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <div className="flex flex-col min-h-screen md:overflow-hidden">
          <div>
            <NavBar />
          </div>
          <div className="min-h-screen">{children}</div>
        </div>
      </main>
    </>
  );
}
