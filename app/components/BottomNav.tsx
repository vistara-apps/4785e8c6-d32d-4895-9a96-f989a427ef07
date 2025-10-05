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
      className="fixed bottom-0 left-0 right-0 glass-card border-t border-border pb-safe" 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-around py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 touch-manipulation ${
                  isActive 
                    ? 'text-accent bg-accent bg-opacity-10' 
                    : 'text-muted hover:text-fg'
                }`}
                aria-label={`Navigate to ${item.label}`}
                aria-current={isActive ? 'page' : undefined}
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
