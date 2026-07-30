'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="section-padding min-h-[60vh] flex items-center justify-center">
      <div className="text-center container-page">
        <h1 className="text-4xl font-bold text-neutral-800">Something went wrong</h1>
        <p className="mt-4 text-neutral-500">An unexpected error occurred. Please try again.</p>
        <button onClick={reset} className="mt-8 inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors">
          Try Again
        </button>
      </div>
    </div>
  );
}
