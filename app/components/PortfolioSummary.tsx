'use client';

import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react';

export function PortfolioSummary() {
  const totalValue = 75957.46;
  const change24h = 2.34;
  const overallGrade = 'B';
  const isPositive = change24h > 0;
  
  return (
    <section className="glass-card p-4 sm:p-6 pulse-glow" aria-labelledby="portfolio-summary-title">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
        <div className="flex-1">
          <h2 id="portfolio-summary-title" className="text-sm text-muted mb-1">Total Portfolio Value</h2>
          <div className="text-3xl sm:text-4xl font-bold gradient-text break-words" aria-label={`Portfolio value: ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })} dollars`}>
            ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>
        
        <div 
          className={`grade-badge grade-${overallGrade.toLowerCase()} text-xl sm:text-2xl self-start`}
          aria-label={`Portfolio grade: ${overallGrade}`}
          role="img"
        >
          {overallGrade}
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2" role="status" aria-label={`24 hour change: ${isPositive ? 'positive' : 'negative'} ${change24h} percent`}>
          {isPositive ? (
            <TrendingUp className="w-5 h-5 text-success" aria-hidden="true" />
          ) : (
            <TrendingDown className="w-5 h-5 text-danger" aria-hidden="true" />
          )}
          <span className={`text-lg font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
            {isPositive ? '+' : ''}{change24h}%
          </span>
          <span className="text-sm text-muted">24h</span>
        </div>
        
        <button 
          className="flex items-center justify-center gap-2 px-4 py-2 bg-accent bg-opacity-10 text-accent rounded-lg hover:bg-opacity-20 active:bg-opacity-30 transition-all duration-200 touch-manipulation min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
          aria-label="Get AI insights for your portfolio"
          type="button"
        >
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm font-medium">AI Insights</span>
        </button>
      </div>
      
      <div className="mt-6 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-4" role="group" aria-label="Portfolio statistics">
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">Assets</p>
          <p className="text-lg font-semibold" aria-label="12 assets">12</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">24h Volume</p>
          <p className="text-lg font-semibold" aria-label="24 hour volume: 227.4 thousand dollars">$227.4K</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">Profit/Loss</p>
          <p className="text-lg font-semibold text-success" aria-label="Profit: positive 12.3 thousand dollars">+$12.3K</p>
        </div>
      </div>
    </section>
  );
}
