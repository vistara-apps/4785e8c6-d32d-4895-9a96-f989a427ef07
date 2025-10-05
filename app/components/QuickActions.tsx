'use client';

import { Sparkles, RefreshCw, Share2, TrendingUp, Plus } from 'lucide-react';

interface QuickAction {
  icon: any;
  title: string;
  description: string;
  price: string;
  color: string;
  onClick?: () => void;
}

export function QuickActions() {
  const actions: QuickAction[] = [
    {
      icon: Plus,
      title: 'Add Token',
      description: 'Add to your portfolio',
      price: 'Free',
      color: 'from-accent to-yellow-500',
      onClick: () => {
        // This will be handled by the parent component
        const event = new CustomEvent('openAddTokenModal');
        window.dispatchEvent(event);
      },
    },
    {
      icon: Sparkles,
      title: 'AI Deep Dive',
      description: 'Get detailed analysis',
      price: '0.0001 ETH',
      color: 'from-purple-500 to-pink-500',
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
  ];
  
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-6">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          
          return (
            <button
              key={action.title}
              onClick={action.onClick}
              className="glass-card-hover p-4 text-left group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              
              <h4 className="font-semibold mb-1 text-sm">{action.title}</h4>
              <p className="text-xs text-muted mb-2">{action.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-accent">{action.price}</span>
              </div>
            </button>
          );
        })}
      </div>
      
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium mb-1">Daily Digest</p>
            <p className="text-xs text-muted">Subscribe for daily insights</p>
          </div>
          <button className="btn-secondary text-sm px-4 py-2">
            0.002 ETH/mo
          </button>
        </div>
      </div>
    </div>
  );
}
