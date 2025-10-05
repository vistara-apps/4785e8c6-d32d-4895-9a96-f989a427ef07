'use client';

export function PortfolioSummarySkeleton() {
  return (
    <div className="glass-card p-4 sm:p-6 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6 gap-4 sm:gap-0">
        <div className="flex-1">
          <div className="h-4 bg-surface rounded w-32 mb-2"></div>
          <div className="h-10 bg-surface rounded w-48"></div>
        </div>
        <div className="w-12 h-8 bg-surface rounded-full self-start"></div>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-surface rounded"></div>
          <div className="h-6 bg-surface rounded w-16"></div>
          <div className="h-4 bg-surface rounded w-8"></div>
        </div>
        <div className="h-10 bg-surface rounded w-32"></div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-2 sm:gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="text-center sm:text-left">
            <div className="h-3 bg-surface rounded w-16 mb-2 mx-auto sm:mx-0"></div>
            <div className="h-5 bg-surface rounded w-12 mx-auto sm:mx-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TokenHoldingsSkeleton() {
  return (
    <div className="glass-card p-4 sm:p-6 animate-pulse">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="h-6 bg-surface rounded w-32"></div>
        <div className="h-4 bg-surface rounded w-16"></div>
      </div>
      
      <div className="space-y-2 sm:space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="glass-card-hover p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-surface rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-4 bg-surface rounded w-12"></div>
                  <div className="h-5 bg-surface rounded w-6"></div>
                </div>
                <div className="h-3 bg-surface rounded w-20"></div>
              </div>
            </div>
            <div className="text-right mr-2 sm:mr-4">
              <div className="h-4 bg-surface rounded w-16 mb-1"></div>
              <div className="h-3 bg-surface rounded w-12"></div>
            </div>
            <div className="w-4 h-4 bg-surface rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QuickActionsSkeleton() {
  return (
    <div className="glass-card p-4 sm:p-6 animate-pulse">
      <div className="h-5 bg-surface rounded w-24 mb-4 sm:mb-6"></div>
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass-card-hover p-3 sm:p-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-surface rounded-lg mb-2 sm:mb-3"></div>
            <div className="h-4 bg-surface rounded w-16 mb-1"></div>
            <div className="h-3 bg-surface rounded w-20 mb-2"></div>
            <div className="h-3 bg-surface rounded w-12"></div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
          <div>
            <div className="h-4 bg-surface rounded w-20 mb-1"></div>
            <div className="h-3 bg-surface rounded w-32"></div>
          </div>
          <div className="h-8 bg-surface rounded w-24"></div>
        </div>
      </div>
    </div>
  );
}

export function PerformanceChartSkeleton() {
  return (
    <div className="glass-card p-4 sm:p-6 animate-pulse">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="h-5 bg-surface rounded w-24"></div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-8 h-6 bg-surface rounded"></div>
          ))}
        </div>
      </div>
      
      <div className="relative h-48 flex items-end justify-between gap-2">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="flex-1 bg-surface rounded-t-md"
            style={{ height: `${Math.random() * 80 + 20}%` }}
          />
        ))}
      </div>
      
      <div className="flex justify-between mt-4">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="h-3 bg-surface rounded w-6"></div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <div className="h-3 bg-surface rounded w-16 mb-1"></div>
            <div className="h-4 bg-surface rounded w-12"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NewsUpdatesSkeleton() {
  return (
    <div className="glass-card p-4 sm:p-6 animate-pulse">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="h-6 bg-surface rounded w-28"></div>
        <div className="h-4 bg-surface rounded w-16"></div>
      </div>
      
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card-hover p-4 border-l-4 border-l-surface">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-surface rounded"></div>
                <div className="h-3 bg-surface rounded w-8"></div>
              </div>
              <div className="h-3 bg-surface rounded w-12"></div>
            </div>
            <div className="h-4 bg-surface rounded w-48 mb-2"></div>
            <div className="h-3 bg-surface rounded w-full mb-3"></div>
            <div className="h-3 bg-surface rounded w-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
}