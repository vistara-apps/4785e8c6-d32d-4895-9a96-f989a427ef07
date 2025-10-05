export interface User {
  fid: string;
  walletAddress: string;
  riskProfile: 'conservative' | 'balanced' | 'aggressive';
  notificationPreferences: {
    dailyDigest: boolean;
    gradeChanges: boolean;
    trendAlerts: boolean;
  };
  createdAt: Date;
  lastActiveAt: Date;
}

export interface Portfolio {
  userId: string;
  totalValueUsd: number;
  overallGrade: 'A' | 'B' | 'C' | 'D' | 'F';
  lastSyncedAt: Date;
  tokenHoldings: TokenHolding[];
}

export interface TokenHolding {
  portfolioId: string;
  tokenAddress: string;
  tokenSymbol: string;
  tokenName: string;
  amount: number;
  currentPriceUsd: number;
  valueUsd: number;
  healthScore: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  scoreReasons: string[];
  lastUpdatedAt: Date;
}

export interface Token {
  address: string;
  symbol: string;
  name: string;
  marketCapUsd: number;
  volume24hUsd: number;
  priceChangePercent24h: number;
  sentimentScore: number;
  trendCategory?: string;
  cachedAt: Date;
}

export interface NewsDigest {
  userId: string;
  date: Date;
  summaryItems: NewsItem[];
  readAt?: Date;
  createdAt: Date;
}

export interface NewsItem {
  title: string;
  summary: string;
  impact: 'high' | 'medium' | 'low';
  token: string;
  source: string;
  url: string;
}

export interface RebalancingPlan {
  userId: string;
  portfolioSnapshot: Portfolio;
  riskProfile: 'conservative' | 'balanced' | 'aggressive';
  recommendations: Recommendation[];
  reasoning: string;
  estimatedGasUsd: number;
  executedAt?: Date;
  createdAt: Date;
}

export interface Recommendation {
  action: 'buy' | 'sell' | 'hold';
  token: string;
  currentAllocation: number;
  targetAllocation: number;
  amountUsd: number;
  reasoning: string;
}

export interface Transaction {
  userId: string;
  type: 'digest_subscription' | 'rebalancing_plan' | 'deep_dive';
  amountEth: number;
  txHash: string;
  status: 'pending' | 'confirmed' | 'failed';
  createdAt: Date;
}
