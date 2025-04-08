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
      className="rounded bg-red-500 px-4 py-2 text-white"
    >
      Trigger Error
    </button>
  );
}
