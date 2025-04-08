'use client';

// app/test-error/error-trigger.tsx
import { useState } from 'react';

export default function ErrorTrigger() {
  const [shouldError, setShouldError] = useState(false);
  
  if (shouldError) {
    throw new Error('Intentional error for testing');
  }
  
  return (
    <button 
      onClick={() => setShouldError(true)}
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      Trigger Error
    </button>
  );
}