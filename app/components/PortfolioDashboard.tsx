'use client';

import { PortfolioSummary } from './PortfolioSummary';
import { TokenHoldings } from './TokenHoldings';
import { PerformanceChart } from './PerformanceChart';
import { NewsUpdates } from './NewsUpdates';
import { QuickActions } from './QuickActions';

export function PortfolioDashboard() {
  return (
    <div className="space-y-4 sm:space-y-6 slide-up">
      <PortfolioSummary />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <PerformanceChart />
        <QuickActions />
      </div>
      
      <TokenHoldings />
      
      <NewsUpdates />
    </div>
  );
}
