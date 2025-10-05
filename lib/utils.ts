export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPercent(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}

export function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function getGradeColor(grade: string): string {
  const colors = {
    A: 'text-green-400',
    B: 'text-blue-400',
    C: 'text-yellow-400',
    D: 'text-orange-400',
    F: 'text-red-400',
  };
  return colors[grade as keyof typeof colors] || 'text-muted';
}

export function calculateHealthScore(
  marketCap: number,
  volume24h: number,
  priceChange24h: number,
  sentimentScore: number
): number {
  // Weighted scoring algorithm
  const marketCapScore = Math.min((marketCap / 1000000000) * 20, 30);
  const volumeScore = Math.min((volume24h / 100000000) * 20, 25);
  const priceScore = Math.max(0, Math.min(priceChange24h * 2 + 20, 25));
  const sentimentScoreWeighted = sentimentScore * 20;
  
  return Math.round(marketCapScore + volumeScore + priceScore + sentimentScoreWeighted);
}

export function scoreToGrade(score: number): 'A' | 'B' | 'C' | 'D' | 'F' {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

export function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}
