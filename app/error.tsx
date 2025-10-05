'use client';

import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card p-8 max-w-md w-full text-center">
        <AlertCircle className="w-16 h-16 text-danger mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-muted mb-6">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button onClick={reset} className="btn-primary w-full">
          Try again
        </button>
      </div>
    </div>
  );
}
