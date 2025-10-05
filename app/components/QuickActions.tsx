'use client';

import { useState } from 'react';
import { Sparkles, RefreshCw, Share2, TrendingUp, Check } from 'lucide-react';

export function QuickActions() {
  const [clickedAction, setClickedAction] = useState<string | null>(null);
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
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-6">Quick Actions</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          const isClicked = clickedAction === action.title;
          
          const handleClick = () => {
            setClickedAction(action.title);
            // Simulate action completion
            setTimeout(() => {
              setClickedAction(null);
            }, 2000);
          };
          
          return (
            <button
              key={action.title}
              onClick={handleClick}
              disabled={isClicked}
              className={`glass-card-hover p-4 text-left group touch-manipulation min-h-[120px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg ${
                isClicked 
                  ? 'scale-95 bg-accent bg-opacity-5' 
                  : 'active:scale-[0.98] hover:scale-[1.02]'
              }`}
              aria-label={`${action.title}: ${action.description}`}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 transition-all duration-300 ${
                isClicked 
                  ? 'scale-110 rotate-12' 
                  : 'group-hover:scale-110 group-hover:rotate-3'
              }`}>
                {isClicked ? (
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce" />
                ) : (
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                )}
              </div>
              
              <h4 className="font-semibold mb-1 text-sm sm:text-base">{action.title}</h4>
              <p className="text-xs text-muted mb-2 line-clamp-2">{action.description}</p>
              
              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium transition-colors duration-200 ${
                  isClicked ? 'text-success' : 'text-accent'
                }`}>
                  {isClicked ? 'Processing...' : action.price}
                </span>
                {isClicked && (
                  <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                )}
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
