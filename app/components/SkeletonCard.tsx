'use client';

interface SkeletonCardProps {
  className?: string;
  children?: React.ReactNode;
}

export function SkeletonCard({ className = '', children }: SkeletonCardProps) {
  return (
    <div className={`glass-card animate-pulse ${className}`}>
      {children}
    </div>
  );
}

export function SkeletonLine({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-surface rounded-md animate-pulse ${className}`}></div>
  );
}

export function SkeletonCircle({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-surface rounded-full animate-pulse ${className}`}></div>
  );
}

export function PortfolioSummarySkeleton() {
  return (
    <SkeletonCard className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
        <div className="flex-1">
          <SkeletonLine className="h-4 w-32 mb-2" />
          <SkeletonLine className="h-10 w-48" />
        </div>
        <SkeletonCircle className="w-12 h-12 self-start" />
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
        <div className="flex items-center gap-2">
          <SkeletonCircle className="w-5 h-5" />
          <SkeletonLine className="h-6 w-16" />
          <SkeletonLine className="h-4 w-8" />
        </div>
        <SkeletonLine className="h-10 w-32" />
      </div>
      
      <div className="pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="text-center sm:text-left">
            <SkeletonLine className="h-3 w-16 mb-1" />
            <SkeletonLine className="h-6 w-12" />
          </div>
        ))}
      </div>
    </SkeletonCard>
  );
}

export function TokenHoldingsSkeleton() {
  return (
    <SkeletonCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <SkeletonLine className="h-6 w-32" />
        <SkeletonLine className="h-4 w-16" />
      </div>
      
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="glass-card p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4 flex-1">
              <SkeletonCircle className="w-10 h-10 sm:w-12 sm:h-12" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <SkeletonLine className="h-4 w-12" />
                  <SkeletonLine className="h-5 w-6 rounded-full" />
                </div>
                <SkeletonLine className="h-3 w-20" />
              </div>
            </div>
            <div className="text-right mr-2 sm:mr-4">
              <SkeletonLine className="h-4 w-16 mb-1" />
              <SkeletonLine className="h-3 w-12" />
            </div>
            <SkeletonCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        ))}
      </div>
    </SkeletonCard>
  );
}