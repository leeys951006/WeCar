// app/page.tsx

import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans">
      <Head>
        <title>Next.js Home Page</title>
        <meta name="description" content="Welcome to our Next.js application!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to{' '}
          <a href="https://nextjs.org" className="text-blue-500 hover:underline">
            Next.js!
          </a>
        </h1>

        <p className="text-xl">
          Get started by editing <code className="font-mono bg-gray-200 p-1 rounded">app/page.tsx</code>
        </p>
      </main>

      <footer className="absolute bottom-0 w-full border-t border-gray-200 py-4 text-center">
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className="inline-block h-6" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
