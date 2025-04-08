// app/test-error/page.tsx
import ErrorTrigger from "./error-trigger";

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Error Testing Page</h1>
      <p className="mb-4">Click the button below to trigger an error:</p>
      <ErrorTrigger />
    </div>
  );
}
