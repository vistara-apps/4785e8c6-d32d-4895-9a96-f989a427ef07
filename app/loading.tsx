import { AppHeader } from './components/AppHeader';
import { BottomNav } from './components/BottomNav';
import { 
  PortfolioSummarySkeleton,
  TokenHoldingsSkeleton,
  QuickActionsSkeleton,
  PerformanceChartSkeleton,
  NewsUpdatesSkeleton
} from './components/LoadingSkeletons';

export default function Loading() {
  return (
    <main className="min-h-screen pb-20 sm:pb-24">
      <AppHeader />
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-7xl">
        <div className="space-y-4 sm:space-y-6">
          <PortfolioSummarySkeleton />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <PerformanceChartSkeleton />
            <QuickActionsSkeleton />
          </div>
          
          <TokenHoldingsSkeleton />
          
          <NewsUpdatesSkeleton />
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
