'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <div className="space-y-6 px-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Something went wrong</h1>
        
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          We apologize for the inconvenience. An error occurred while rendering this page.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Try again
          </button>
          
          <Link 
            href="/"
            className="px-5 py-2.5 rounded-md border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium transition-colors"
          >
            Go to homepage
          </Link>
        </div>

        {error.digest && (
          <p className="text-sm text-gray-500">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}