'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Plus } from 'lucide-react';
import { UserToken } from '@/lib/types';
import { AddTokenForm } from './AddTokenForm';

interface Token {
  id: string;
  symbol: string;
  name: string;
  amount: number;
  value: number;
  change24h: number;
  grade: string;
  icon: string;
  purchasePrice?: number;
}

const DEFAULT_TOKENS: Token[] = [
  { id: '1', symbol: 'ETH', name: 'Ethereum', amount: 12.5, value: 28500, change24h: 3.2, grade: 'A', icon: '⟠', purchasePrice: 2200 },
  { id: '2', symbol: 'USDC', name: 'USD Coin', amount: 15000, value: 15000, change24h: 0.01, grade: 'A', icon: '◎', purchasePrice: 1.00 },
  { id: '3', symbol: 'UNI', name: 'Uniswap', amount: 850, value: 8925, change24h: -1.5, grade: 'B', icon: '🦄', purchasePrice: 9.50 },
  { id: '4', symbol: 'LINK', name: 'Chainlink', amount: 420, value: 7140, change24h: 5.8, grade: 'B', icon: '⬡', purchasePrice: 15.20 },
  { id: '5', symbol: 'AAVE', name: 'Aave', amount: 95, value: 6840, change24h: 2.1, grade: 'C', icon: '👻', purchasePrice: 65.00 },
];

export function TokenHoldings() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tokens, setTokens] = useState<Token[]>(DEFAULT_TOKENS);

  // Load tokens from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTokens = localStorage.getItem('portfolio-tokens');
      if (savedTokens) {
        try {
          setTokens(JSON.parse(savedTokens));
        } catch (error) {
          console.error('Error loading tokens from localStorage:', error);
        }
      }
    }
  }, []);

  // Save tokens to localStorage whenever tokens change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-tokens', JSON.stringify(tokens));
    }
  }, [tokens]);

  const handleAddToken = (newToken: Omit<UserToken, 'id'>) => {
    const token: Token = {
      id: Date.now().toString(),
      symbol: newToken.symbol,
      name: newToken.name,
      amount: newToken.amount,
      purchasePrice: newToken.purchasePrice,
      // Mock current price and calculate value (in real app, this would come from API)
      value: newToken.amount * newToken.purchasePrice,
      change24h: Math.random() * 10 - 5, // Random change for demo
      grade: 'B', // Default grade for new tokens
      icon: '🪙', // Default icon for new tokens
    };
    
    setTokens(prev => [...prev, token]);
  };
  
  return (
    <>
      <div className="glass-card p-6" data-testid="token-holdings">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Token Holdings</h3>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowAddForm(true)}
              data-testid="add-token-button"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-bg rounded-lg hover:bg-yellow-500 transition-colors font-medium text-sm"
            >
              <Plus className="w-4 h-4" />
              Add Token
            </button>
            <button className="text-sm text-accent hover:text-yellow-400 transition-colors">
              View All
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          {tokens.map((token) => (
            <div
              key={token.id}
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
                  <p className="text-xs text-muted">
                    {token.amount.toLocaleString()} tokens
                    {token.purchasePrice && (
                      <span className="ml-2">• Bought at ${token.purchasePrice.toFixed(2)}</span>
                    )}
                  </p>
                </div>
              </div>
              
              <div className="text-right mr-4">
                <p className="font-semibold">
                  ${token.value.toLocaleString()}
                </p>
                <p className={`text-sm ${token.change24h >= 0 ? 'text-success' : 'text-danger'}`}>
                  {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                </p>
                {token.purchasePrice && (
                  <p className="text-xs text-muted">
                    ${(token.value / token.amount).toFixed(2)} current
                  </p>
                )}
              </div>
              
              <ChevronRight className="w-5 h-5 text-muted" />
            </div>
          ))}
        </div>
      </div>

      <AddTokenForm 
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        onAddToken={handleAddToken}
      />
    </>
  );
}
