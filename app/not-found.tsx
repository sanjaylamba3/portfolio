'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <div className="space-y-6 px-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Page Not Found</h1>
        
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Go to homepage
          </Link>
          
          <Link 
            href="/contact"
            className="px-5 py-2.5 rounded-md border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium transition-colors"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}