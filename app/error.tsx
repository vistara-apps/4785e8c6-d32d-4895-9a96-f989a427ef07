'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { AppHeader } from './components/AppHeader';
import { BottomNav } from './components/BottomNav';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen pb-20 sm:pb-24">
      <AppHeader />
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-7xl">
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="glass-card p-8 text-center max-w-md mx-auto fade-in">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-danger bg-opacity-10 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-danger" />
              </div>
              
              <div>
                <h1 className="text-2xl font-bold mb-3">Oops! Something went wrong</h1>
                <p className="text-muted mb-6 leading-relaxed">
                  We encountered an unexpected error while loading PortfolioAI. 
                  Don't worry, your data is safe.
                </p>
                
                {process.env.NODE_ENV === 'development' && (
                  <details className="text-left mb-6 p-3 bg-surface rounded-lg">
                    <summary className="cursor-pointer text-sm font-medium mb-2">
                      Error Details
                    </summary>
                    <pre className="text-xs text-muted overflow-auto">
                      {error.message}
                    </pre>
                  </details>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={reset}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-accent bg-opacity-10 text-accent rounded-lg hover:bg-opacity-20 active:scale-95 transition-all duration-200 touch-manipulation"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="font-medium">Try Again</span>
                </button>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-border text-muted rounded-lg hover:text-fg hover:border-accent active:scale-95 transition-all duration-200 touch-manipulation"
                >
                  <Home className="w-4 h-4" />
                  <span className="font-medium">Go Home</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
