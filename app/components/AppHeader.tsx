'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { Bell, Settings2 } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="glass-card border-b border-border sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center font-bold text-bg"
              aria-label="PortfolioAI Logo"
            >
              AI
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">PortfolioAI</h1>
              <p className="text-xs text-muted">Your Crypto Copilot</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-3" role="navigation" aria-label="Main navigation">
            <button 
              className="p-2 hover:bg-surface rounded-lg transition-colors touch-manipulation min-h-[44px] min-w-[44px]"
              aria-label="Notifications"
              type="button"
            >
              <Bell className="w-5 h-5 text-muted" aria-hidden="true" />
            </button>
            <button 
              className="p-2 hover:bg-surface rounded-lg transition-colors touch-manipulation min-h-[44px] min-w-[44px]"
              aria-label="Settings"
              type="button"
            >
              <Settings2 className="w-5 h-5 text-muted" aria-hidden="true" />
            </button>
            <Wallet>
              <ConnectWallet className="btn-primary" aria-label="Connect Wallet">
                <Avatar className="w-6 h-6" />
                <Name className="text-sm font-medium" />
              </ConnectWallet>
            </Wallet>
          </nav>
        </div>
      </div>
    </header>
  );
}
