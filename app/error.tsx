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

        <p className="mx-auto max-w-md text-lg text-gray-600">
          We apologize for the inconvenience. An error occurred while rendering this page.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Try again
          </button>

          <Link
            href="/"
            className="rounded-md border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Go to homepage
          </Link>
        </div>

        {error.digest && <p className="text-sm text-gray-500">Error ID: {error.digest}</p>}
      </div>
    </div>
  );
}
