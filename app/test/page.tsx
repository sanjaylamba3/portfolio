// app/test-error/page.tsx
import ErrorTrigger from './error-trigger';

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl">Error Testing Page</h1>
      <p className="mb-4">Click the button below to trigger an error:</p>
      <ErrorTrigger />
    </div>
  );
}
