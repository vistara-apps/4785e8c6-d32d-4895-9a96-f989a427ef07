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
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">News Updates</h3>
        <button className="text-sm text-accent hover:text-yellow-400 transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {news.map((item) => (
          <div
            key={item.id}
            className={`glass-card-hover p-4 border-l-4 ${getImpactColor(item.impact)}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {getImpactIcon(item.impact)}
                <span className="text-xs font-medium text-accent">{item.token}</span>
              </div>
              <span className="text-xs text-muted">{item.time}</span>
            </div>
            
            <h4 className="font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-muted">{item.summary}</p>
            
            <button className="mt-3 text-sm text-accent hover:text-yellow-400 transition-colors">
              Read more →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
