'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { PortfolioSummary } from './PortfolioSummary';
import { ErrorBoundary } from './ErrorBoundary';
import { PortfolioSummarySkeleton, TokenHoldingsSkeleton } from './SkeletonCard';

// Lazy load components that are below the fold
const TokenHoldings = lazy(() => import('./TokenHoldings').then(module => ({ default: module.TokenHoldings })));
const PerformanceChart = lazy(() => import('./PerformanceChart').then(module => ({ default: module.PerformanceChart })));
const NewsUpdates = lazy(() => import('./NewsUpdates').then(module => ({ default: module.NewsUpdates })));
const QuickActions = lazy(() => import('./QuickActions').then(module => ({ default: module.QuickActions })));

export function PortfolioDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-6 slide-up">
        <PortfolioSummarySkeleton />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card p-6 animate-pulse">
            <div className="h-6 bg-surface rounded mb-6 w-24"></div>
            <div className="h-48 bg-surface rounded mb-4"></div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-3 bg-surface rounded mb-1 w-16"></div>
                  <div className="h-4 bg-surface rounded w-12"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-6 animate-pulse">
            <div className="h-6 bg-surface rounded mb-6 w-32"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass-card p-4 min-h-[120px]">
                  <div className="w-10 h-10 bg-surface rounded-lg mb-3"></div>
                  <div className="h-4 bg-surface rounded mb-1 w-20"></div>
                  <div className="h-3 bg-surface rounded mb-2 w-24"></div>
                  <div className="h-3 bg-surface rounded w-16"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <TokenHoldingsSkeleton />
        
        <div className="glass-card p-6 animate-pulse">
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 bg-surface rounded w-32"></div>
            <div className="h-4 bg-surface rounded w-16"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-surface rounded"></div>
                    <div className="h-3 bg-surface rounded w-8"></div>
                  </div>
                  <div className="h-3 bg-surface rounded w-12"></div>
                </div>
                <div className="h-4 bg-surface rounded mb-2 w-48"></div>
                <div className="h-3 bg-surface rounded w-64"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="space-y-6 slide-up">
        <PortfolioSummary />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Suspense fallback={
            <div className="glass-card p-6 animate-pulse">
              <div className="h-6 bg-surface rounded mb-6 w-24"></div>
              <div className="h-48 bg-surface rounded mb-4"></div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <div className="h-3 bg-surface rounded mb-1 w-16"></div>
                    <div className="h-4 bg-surface rounded w-12"></div>
                  </div>
                ))}
              </div>
            </div>
          }>
            <PerformanceChart />
          </Suspense>
          
          <Suspense fallback={
            <div className="glass-card p-6 animate-pulse">
              <div className="h-6 bg-surface rounded mb-6 w-32"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="glass-card p-4 min-h-[120px]">
                    <div className="w-10 h-10 bg-surface rounded-lg mb-3"></div>
                    <div className="h-4 bg-surface rounded mb-1 w-20"></div>
                    <div className="h-3 bg-surface rounded mb-2 w-24"></div>
                    <div className="h-3 bg-surface rounded w-16"></div>
                  </div>
                ))}
              </div>
            </div>
          }>
            <QuickActions />
          </Suspense>
        </div>
        
        <Suspense fallback={<TokenHoldingsSkeleton />}>
          <TokenHoldings />
        </Suspense>
        
        <Suspense fallback={
          <div className="glass-card p-6 animate-pulse">
            <div className="flex items-center justify-between mb-6">
              <div className="h-6 bg-surface rounded w-32"></div>
              <div className="h-4 bg-surface rounded w-16"></div>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-surface rounded"></div>
                      <div className="h-3 bg-surface rounded w-8"></div>
                    </div>
                    <div className="h-3 bg-surface rounded w-12"></div>
                  </div>
                  <div className="h-4 bg-surface rounded mb-2 w-48"></div>
                  <div className="h-3 bg-surface rounded w-64"></div>
                </div>
              ))}
            </div>
          </div>
        }>
          <NewsUpdates />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
