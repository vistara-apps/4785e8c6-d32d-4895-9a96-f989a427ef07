'use client';

import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { AddTokenForm } from '@/lib/types';

interface AddTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToken: (token: AddTokenForm) => void;
}

export function AddTokenModal({ isOpen, onClose, onAddToken }: AddTokenModalProps) {
  const [formData, setFormData] = useState<AddTokenForm>({
    tokenName: '',
    tokenSymbol: '',
    amount: 0,
    purchasePriceUsd: 0,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: Record<string, string> = {};
    
    if (!formData.tokenName.trim()) {
      newErrors.tokenName = 'Token name is required';
    }
    
    if (!formData.tokenSymbol.trim()) {
      newErrors.tokenSymbol = 'Token symbol is required';
    }
    
    if (formData.amount <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }
    
    if (formData.purchasePriceUsd <= 0) {
      newErrors.purchasePriceUsd = 'Purchase price must be greater than 0';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    onAddToken({
      ...formData,
      tokenSymbol: formData.tokenSymbol.toUpperCase(),
    });

    // Reset form
    setFormData({
      tokenName: '',
      tokenSymbol: '',
      amount: 0,
      purchasePriceUsd: 0,
    });
    setErrors({});
    onClose();
  };

  const handleInputChange = (field: keyof AddTokenForm, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="glass-card w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Plus className="w-5 h-5 text-accent" />
              Add Token to Portfolio
            </h2>
            <button
              onClick={onClose}
              className="text-muted hover:text-fg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Token Name
              </label>
              <input
                type="text"
                value={formData.tokenName}
                onChange={(e) => handleInputChange('tokenName', e.target.value)}
                placeholder="e.g., Bitcoin"
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              {errors.tokenName && (
                <p className="text-danger text-sm mt-1">{errors.tokenName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Token Symbol
              </label>
              <input
                type="text"
                value={formData.tokenSymbol}
                onChange={(e) => handleInputChange('tokenSymbol', e.target.value)}
                placeholder="e.g., BTC"
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              {errors.tokenSymbol && (
                <p className="text-danger text-sm mt-1">{errors.tokenSymbol}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Amount
              </label>
              <input
                type="number"
                step="any"
                min="0"
                value={formData.amount || ''}
                onChange={(e) => handleInputChange('amount', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              {errors.amount && (
                <p className="text-danger text-sm mt-1">{errors.amount}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Purchase Price (USD)
              </label>
              <input
                type="number"
                step="any"
                min="0"
                value={formData.purchasePriceUsd || ''}
                onChange={(e) => handleInputChange('purchasePriceUsd', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              {errors.purchasePriceUsd && (
                <p className="text-danger text-sm mt-1">{errors.purchasePriceUsd}</p>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-border text-muted hover:text-fg hover:border-accent transition-colors rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 btn-primary"
              >
                Add Token
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}