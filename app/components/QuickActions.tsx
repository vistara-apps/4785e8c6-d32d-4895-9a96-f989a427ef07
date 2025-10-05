'use client';

import { Sparkles, RefreshCw, Share2, TrendingUp } from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      icon: Sparkles,
      title: 'AI Deep Dive',
      description: 'Get detailed analysis',
      price: '0.0001 ETH',
      color: 'from-accent to-yellow-500',
    },
    {
      icon: RefreshCw,
      title: 'Rebalancing Plan',
      description: 'Optimize your portfolio',
      price: '0.0005 ETH',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: TrendingUp,
      title: 'Trend Scanner',
      description: 'Find opportunities',
      price: 'Free',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Share2,
      title: 'Share Grade',
      description: 'Show your progress',
      price: 'Free',
      color: 'from-pink-500 to-rose-500',
    },
  ];
  
  return (
    <div className="glass-card p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          
          return (
            <button
              key={action.title}
              className="glass-card-hover p-3 sm:p-4 text-left group active:scale-95 transition-all duration-200 touch-manipulation"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 group-active:scale-105 transition-transform duration-200`}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              
              <h4 className="font-semibold mb-1 text-xs sm:text-sm">{action.title}</h4>
              <p className="text-xs text-muted mb-2 leading-tight">{action.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-accent">{action.price}</span>
              </div>
            </button>
          );
        })}
      </div>
      
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
          <div>
            <p className="text-sm font-medium mb-1">Daily Digest</p>
            <p className="text-xs text-muted">Subscribe for daily insights</p>
          </div>
          <button className="btn-secondary text-sm px-4 py-2 touch-manipulation active:scale-95 transition-transform duration-200">
            0.002 ETH/mo
          </button>
        </div>
      </div>
    </div>
  );
}
