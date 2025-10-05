'use client';

import { ChevronRight } from 'lucide-react';

interface Token {
  symbol: string;
  name: string;
  amount: number;
  value: number;
  change24h: number;
  grade: string;
  icon: string;
}

export function TokenHoldings() {
  const tokens: Token[] = [
    { symbol: 'ETH', name: 'Ethereum', amount: 12.5, value: 28500, change24h: 3.2, grade: 'A', icon: '⟠' },
    { symbol: 'USDC', name: 'USD Coin', amount: 15000, value: 15000, change24h: 0.01, grade: 'A', icon: '◎' },
    { symbol: 'UNI', name: 'Uniswap', amount: 850, value: 8925, change24h: -1.5, grade: 'B', icon: '🦄' },
    { symbol: 'LINK', name: 'Chainlink', amount: 420, value: 7140, change24h: 5.8, grade: 'B', icon: '⬡' },
    { symbol: 'AAVE', name: 'Aave', amount: 95, value: 6840, change24h: 2.1, grade: 'C', icon: '👻' },
  ];
  
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Token Holdings</h3>
        <button className="text-sm text-accent hover:text-yellow-400 transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {tokens.map((token) => (
          <div
            key={token.symbol}
            className="glass-card-hover p-4 flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-2xl">
                {token.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold">{token.symbol}</h4>
                  <span className={`grade-badge grade-${token.grade.toLowerCase()}`}>
                    {token.grade}
                  </span>
                </div>
                <p className="text-sm text-muted">{token.name}</p>
              </div>
            </div>
            
            <div className="text-right mr-4">
              <p className="font-semibold">
                ${token.value.toLocaleString()}
              </p>
              <p className={`text-sm ${token.change24h >= 0 ? 'text-success' : 'text-danger'}`}>
                {token.change24h >= 0 ? '+' : ''}{token.change24h}%
              </p>
            </div>
            
            <ChevronRight className="w-5 h-5 text-muted" />
          </div>
        ))}
      </div>
    </div>
  );
}
