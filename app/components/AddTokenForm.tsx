'use client';

import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { UserToken } from '@/lib/types';

interface AddTokenFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToken: (token: Omit<UserToken, 'id'>) => void;
}

export function AddTokenForm({ isOpen, onClose, onAddToken }: AddTokenFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    amount: '',
    purchasePrice: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Token name is required';
    }
    
    if (!formData.symbol.trim()) {
      newErrors.symbol = 'Token symbol is required';
    }
    
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }
    
    if (!formData.purchasePrice || parseFloat(formData.purchasePrice) <= 0) {
      newErrors.purchasePrice = 'Purchase price must be greater than 0';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // Submit form
      onAddToken({
        name: formData.name.trim(),
        symbol: formData.symbol.trim().toUpperCase(),
        amount: parseFloat(formData.amount),
        purchasePrice: parseFloat(formData.purchasePrice),
      });
      
      // Reset form
      setFormData({
        name: '',
        symbol: '',
        amount: '',
        purchasePrice: '',
      });
      setErrors({});
      onClose();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="glass-card p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Add Token to Portfolio</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Token Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="e.g., Bitcoin"
              className={`w-full px-4 py-3 bg-surface border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                errors.name ? 'border-red-500' : 'border-border'
              }`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="symbol" className="block text-sm font-medium mb-2">
              Token Symbol
            </label>
            <input
              type="text"
              id="symbol"
              value={formData.symbol}
              onChange={(e) => handleInputChange('symbol', e.target.value)}
              placeholder="e.g., BTC"
              className={`w-full px-4 py-3 bg-surface border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                errors.symbol ? 'border-red-500' : 'border-border'
              }`}
            />
            {errors.symbol && (
              <p className="text-red-400 text-sm mt-1">{errors.symbol}</p>
            )}
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium mb-2">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              step="any"
              value={formData.amount}
              onChange={(e) => handleInputChange('amount', e.target.value)}
              placeholder="0.00"
              className={`w-full px-4 py-3 bg-surface border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                errors.amount ? 'border-red-500' : 'border-border'
              }`}
            />
            {errors.amount && (
              <p className="text-red-400 text-sm mt-1">{errors.amount}</p>
            )}
          </div>

          <div>
            <label htmlFor="purchasePrice" className="block text-sm font-medium mb-2">
              Purchase Price (USD)
            </label>
            <input
              type="number"
              id="purchasePrice"
              step="any"
              value={formData.purchasePrice}
              onChange={(e) => handleInputChange('purchasePrice', e.target.value)}
              placeholder="0.00"
              className={`w-full px-4 py-3 bg-surface border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                errors.purchasePrice ? 'border-red-500' : 'border-border'
              }`}
            />
            {errors.purchasePrice && (
              <p className="text-red-400 text-sm mt-1">{errors.purchasePrice}</p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-border rounded-lg hover:bg-surface transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-primary flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Token
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}