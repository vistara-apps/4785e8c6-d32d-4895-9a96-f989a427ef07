'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Plus } from 'lucide-react';
import { AddTokenModal } from './AddTokenModal';
import { AddTokenForm } from '@/lib/types';
import { PortfolioStorage, StoredToken } from '@/lib/portfolio-storage';

interface Token {
  symbol: string;
  name: string;
  amount: number;
  value: number;
  change24h: number;
  grade: string;
  icon: string;
  isUserAdded?: boolean;
  purchasePrice?: number;
  id?: string; // For user-added tokens
}

// Default/demo tokens
const defaultTokens: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', amount: 12.5, value: 28500, change24h: 3.2, grade: 'A', icon: '⟠' },
  { symbol: 'USDC', name: 'USD Coin', amount: 15000, value: 15000, change24h: 0.01, grade: 'A', icon: '◎' },
  { symbol: 'UNI', name: 'Uniswap', amount: 850, value: 8925, change24h: -1.5, grade: 'B', icon: '🦄' },
  { symbol: 'LINK', name: 'Chainlink', amount: 420, value: 7140, change24h: 5.8, grade: 'B', icon: '⬡' },
  { symbol: 'AAVE', name: 'Aave', amount: 95, value: 6840, change24h: 2.1, grade: 'C', icon: '👻' },
];

export function TokenHoldings() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [tokens, setTokens] = useState<Token[]>(defaultTokens);

  // Load stored tokens on component mount
  useEffect(() => {
    const loadStoredTokens = () => {
      const storedTokens = PortfolioStorage.getTokens();
      const userTokens: Token[] = storedTokens.map(stored => ({
        id: stored.id,
        symbol: stored.symbol,
        name: stored.name,
        amount: stored.amount,
        value: stored.amount * stored.purchasePriceUsd, // Calculate current value
        change24h: 0, // Will be updated with real market data later
        grade: 'C', // Default grade for user tokens
        icon: '🪙',
        isUserAdded: true,
        purchasePrice: stored.purchasePriceUsd,
      }));
      
      setTokens([...defaultTokens, ...userTokens]);
    };

    loadStoredTokens();
  }, []);

  useEffect(() => {
    const handleOpenModal = () => {
      setIsAddModalOpen(true);
    };

    window.addEventListener('openAddTokenModal', handleOpenModal);
    return () => window.removeEventListener('openAddTokenModal', handleOpenModal);
  }, []);

  const handleAddToken = (tokenForm: AddTokenForm) => {
    // Check if token already exists
    const existingToken = tokens.find(token => 
      token.symbol.toLowerCase() === tokenForm.tokenSymbol.toLowerCase()
    );
    
    if (existingToken) {
      // If token exists, you could update the amount or show an error
      // For now, let's just add it as a separate entry
      console.log('Token already exists, adding as separate entry');
    }
    
    // Save to storage
    const storedToken = PortfolioStorage.addToken(tokenForm);
    
    // Create UI token object
    const newToken: Token = {
      id: storedToken.id,
      symbol: storedToken.symbol,
      name: storedToken.name,
      amount: storedToken.amount,
      value: storedToken.amount * storedToken.purchasePriceUsd, // Initial value based on purchase price
      change24h: 0, // Will be updated when we fetch real market data
      grade: 'C', // Default grade for new tokens
      icon: '🪙', // Default icon for user-added tokens
      isUserAdded: true,
      purchasePrice: storedToken.purchasePriceUsd,
    };

    setTokens(prev => [...prev, newToken]);
  };
  
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Token Holdings</h3>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 text-sm text-accent hover:text-yellow-400 transition-colors"
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
              {token.isUserAdded && token.purchasePrice ? (
                <div className="text-right">
                  <p className="text-sm text-muted">
                    Bought at ${token.purchasePrice.toFixed(2)}
                  </p>
                  <p className="text-xs text-muted opacity-75">
                    User Added
                  </p>
                </div>
              ) : (
                <p className={`text-sm ${token.change24h >= 0 ? 'text-success' : 'text-danger'}`}>
                  {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                </p>
              )}
            </div>
            
            <ChevronRight className="w-5 h-5 text-muted" />
          </div>
        ))}
      </div>

      <AddTokenModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddToken={handleAddToken}
      />
    </div>
  );
}
