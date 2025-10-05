export const GRADE_COLORS = {
  A: '#10b981',
  B: '#3b82f6',
  C: '#f59e0b',
  D: '#f97316',
  F: '#ef4444',
} as const;

export const RISK_PROFILES = {
  conservative: {
    label: 'Conservative',
    description: 'Focus on stability and capital preservation',
    maxVolatility: 0.3,
  },
  balanced: {
    label: 'Balanced',
    description: 'Mix of growth and stability',
    maxVolatility: 0.5,
  },
  aggressive: {
    label: 'Aggressive',
    description: 'Maximum growth potential',
    maxVolatility: 0.8,
  },
} as const;

export const MICRO_TRANSACTION_PRICES = {
  deepDive: 0.0001,
  rebalancingPlan: 0.0005,
  digestSubscription: 0.002,
} as const;

export const NOTIFICATION_SETTINGS = {
  dailyDigestTime: '08:00',
  maxNotificationsPerDay: 2,
  enableGradeAlerts: true,
  enableTrendAlerts: true,
} as const;

export const API_ENDPOINTS = {
  baseRpc: process.env.NEXT_PUBLIC_BASE_RPC_URL || 'https://mainnet.base.org',
  coinGecko: 'https://api.coingecko.com/api/v3',
  definedFi: 'https://api.defined.fi/v1',
} as const;

export const CACHE_DURATIONS = {
  tokenPrices: 60, // 1 minute
  portfolioBalances: 60, // 1 minute
  news: 3600, // 1 hour
  marketData: 300, // 5 minutes
} as const;
