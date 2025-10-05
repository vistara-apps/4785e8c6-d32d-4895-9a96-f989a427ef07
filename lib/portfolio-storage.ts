import { AddTokenForm } from './types';

export interface StoredToken {
  symbol: string;
  name: string;
  amount: number;
  purchasePriceUsd: number;
  purchaseDate: string; // ISO string
  id: string; // unique identifier
}

const STORAGE_KEY = 'crypto_portfolio_tokens';

export class PortfolioStorage {
  static getTokens(): StoredToken[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading tokens from storage:', error);
      return [];
    }
  }

  static addToken(tokenForm: AddTokenForm): StoredToken {
    const newToken: StoredToken = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      symbol: tokenForm.tokenSymbol.toUpperCase(),
      name: tokenForm.tokenName,
      amount: tokenForm.amount,
      purchasePriceUsd: tokenForm.purchasePriceUsd,
      purchaseDate: new Date().toISOString(),
    };

    const tokens = this.getTokens();
    tokens.push(newToken);
    this.saveTokens(tokens);
    
    return newToken;
  }

  static removeToken(tokenId: string): void {
    const tokens = this.getTokens().filter(token => token.id !== tokenId);
    this.saveTokens(tokens);
  }

  static updateToken(tokenId: string, updates: Partial<Omit<StoredToken, 'id'>>): void {
    const tokens = this.getTokens();
    const tokenIndex = tokens.findIndex(token => token.id === tokenId);
    
    if (tokenIndex !== -1) {
      tokens[tokenIndex] = { ...tokens[tokenIndex], ...updates };
      this.saveTokens(tokens);
    }
  }

  private static saveTokens(tokens: StoredToken[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens));
    } catch (error) {
      console.error('Error saving tokens to storage:', error);
    }
  }

  static clearAll(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
}