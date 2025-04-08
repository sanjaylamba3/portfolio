'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <div className="space-y-6 px-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Page Not Found</h1>

        <p className="mx-auto max-w-md text-lg text-gray-600">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Go to homepage
          </Link>

          <Link
            href="/contact"
            className="rounded-md border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}
