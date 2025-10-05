'use client';

import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react';

export function PortfolioSummary() {
  const totalValue = 75957.46;
  const change24h = 2.34;
  const overallGrade = 'B';
  const isPositive = change24h > 0;
  
  return (
    <div className="glass-card p-4 sm:p-6 pulse-glow scale-in">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6 gap-4 sm:gap-0">
        <div className="flex-1">
          <p className="text-sm text-muted mb-1 fade-in">Total Portfolio Value</p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text break-all bounce-in">
            ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h2>
        </div>
        
        <div className={`grade-badge grade-${overallGrade.toLowerCase()} text-xl sm:text-2xl self-start bounce-in hover:scale-110 transition-transform duration-200`}>
          {overallGrade}
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          {isPositive ? (
            <TrendingUp className="w-5 h-5 text-success" />
          ) : (
            <TrendingDown className="w-5 h-5 text-danger" />
          )}
          <span className={`text-lg font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
            {isPositive ? '+' : ''}{change24h}%
          </span>
          <span className="text-sm text-muted">24h</span>
        </div>
        
        <button 
          className="flex items-center justify-center gap-2 px-4 py-2 bg-accent bg-opacity-10 text-accent rounded-lg hover:bg-opacity-20 active:bg-opacity-30 transition-all duration-200 touch-manipulation"
          aria-label="Get AI insights for your portfolio"
          type="button"
        >
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm font-medium">AI Insights</span>
        </button>
      </div>
      
      <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-2 sm:gap-4">
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">Assets</p>
          <p className="text-base sm:text-lg font-semibold">12</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">24h Volume</p>
          <p className="text-base sm:text-lg font-semibold">$227.4K</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">Profit/Loss</p>
          <p className="text-base sm:text-lg font-semibold text-success">+$12.3K</p>
        </div>
      </div>
    </div>
  );
}
