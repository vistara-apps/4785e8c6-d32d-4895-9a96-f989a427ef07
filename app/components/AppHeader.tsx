'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { Bell, Settings2 } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="glass-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center font-bold text-bg">
              AI
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">PortfolioAI</h1>
              <p className="text-xs text-muted">Your Crypto Copilot</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-surface rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-muted" />
            </button>
            <button className="p-2 hover:bg-surface rounded-lg transition-colors">
              <Settings2 className="w-5 h-5 text-muted" />
            </button>
            <Wallet>
              <ConnectWallet className="btn-primary">
                <Avatar className="w-6 h-6" />
                <Name className="text-sm font-medium" />
              </ConnectWallet>
            </Wallet>
          </div>
        </div>
      </div>
    </header>
  );
}
