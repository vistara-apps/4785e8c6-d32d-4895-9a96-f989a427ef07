'use client';

import { AlertCircle, TrendingUp, Info } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  impact: 'high' | 'medium' | 'low';
  token: string;
  time: string;
}

export function NewsUpdates() {
  const news: NewsItem[] = [
    {
      id: '1',
      title: 'Ethereum Upgrade Announced',
      summary: 'Major network upgrade scheduled for Q2 2024 with improved scalability',
      impact: 'high',
      token: 'ETH',
      time: '2h ago',
    },
    {
      id: '2',
      title: 'Uniswap V4 Launch Date',
      summary: 'New version promises lower fees and better liquidity management',
      impact: 'medium',
      token: 'UNI',
      time: '5h ago',
    },
    {
      id: '3',
      title: 'DeFi TVL Reaches New High',
      summary: 'Total value locked in DeFi protocols surpasses previous records',
      impact: 'low',
      token: 'AAVE',
      time: '8h ago',
    },
  ];
  
  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'high':
        return <AlertCircle className="w-4 h-4 text-danger" />;
      case 'medium':
        return <TrendingUp className="w-4 h-4 text-warning" />;
      default:
        return <Info className="w-4 h-4 text-muted" />;
    }
  };
  
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'border-l-danger';
      case 'medium':
        return 'border-l-warning';
      default:
        return 'border-l-muted';
    }
  };
  
  return (
    <div className="glass-card p-4 sm:p-6 fade-in">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold">News Updates</h3>
        <button 
          className="text-sm text-accent hover:text-yellow-400 active:text-yellow-300 transition-colors touch-manipulation"
          aria-label="View all news updates"
        >
          View All
        </button>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {news.map((item, index) => (
          <div
            key={item.id}
            className={`glass-card-hover p-3 sm:p-4 border-l-4 ${getImpactColor(item.impact)} cursor-pointer active:scale-[0.98] transition-all duration-200 touch-manipulation scale-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
            role="article"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                // Handle article click
              }
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {getImpactIcon(item.impact)}
                <span className="text-xs font-medium text-accent">{item.token}</span>
              </div>
              <time className="text-xs text-muted" dateTime={item.time}>
                {item.time}
              </time>
            </div>
            
            <h4 className="font-semibold mb-2 text-sm sm:text-base leading-tight">{item.title}</h4>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">{item.summary}</p>
            
            <button 
              className="mt-3 text-sm text-accent hover:text-yellow-400 active:text-yellow-300 transition-colors touch-manipulation inline-flex items-center gap-1"
              aria-label={`Read more about ${item.title}`}
            >
              Read more →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
