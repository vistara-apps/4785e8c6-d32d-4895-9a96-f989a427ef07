'use client';

import { Home, TrendingUp, Newspaper, User } from 'lucide-react';
import { useState } from 'react';

export function BottomNav() {
  const [active, setActive] = useState('portfolio');
  
  const navItems = [
    { id: 'portfolio', icon: Home, label: 'Portfolio' },
    { id: 'trends', icon: TrendingUp, label: 'Trends' },
    { id: 'digest', icon: Newspaper, label: 'Digest' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];
  
  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 glass-card border-t border-border pb-safe z-40" 
      role="navigation" 
      aria-label="Bottom navigation"
    >
      <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
        <div className="flex items-center justify-around py-2 sm:py-3" role="tablist">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex flex-col items-center gap-1 px-2 sm:px-4 py-2 rounded-lg transition-all duration-200 touch-manipulation min-h-[48px] active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg ${
                  isActive 
                    ? 'text-accent bg-accent bg-opacity-10' 
                    : 'text-muted hover:text-fg'
                }`}
                role="tab"
                aria-selected={isActive}
                aria-label={`${item.label} tab`}
                type="button"
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
