'use client';

import { BarChart3 } from 'lucide-react';
import { useState } from 'react';

interface ChartData {
  label: string;
  value: number;
  change: number;
}

export function PerformanceChart() {
  const [activeTab, setActiveTab] = useState('7D');
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  
  const chartData: Record<string, ChartData[]> = {
    '7D': [
      { label: 'Mon', value: 65, change: 2.1 },
      { label: 'Tue', value: 72, change: 4.2 },
      { label: 'Wed', value: 58, change: -1.8 },
      { label: 'Thu', value: 80, change: 6.5 },
      { label: 'Fri', value: 75, change: 3.2 },
      { label: 'Sat', value: 85, change: 8.5 },
      { label: 'Sun', value: 78, change: 1.9 },
    ],
    '30D': [
      { label: 'Week 1', value: 70, change: 3.5 },
      { label: 'Week 2', value: 65, change: -2.1 },
      { label: 'Week 3', value: 82, change: 7.2 },
      { label: 'Week 4', value: 78, change: 4.8 },
    ],
    '90D': [
      { label: 'Month 1', value: 68, change: 2.8 },
      { label: 'Month 2', value: 75, change: 5.1 },
      { label: 'Month 3', value: 80, change: 6.7 },
    ],
  };
  
  const currentData = chartData[activeTab];
  const maxValue = Math.max(...currentData.map(d => d.value));
  
  return (
    <div className="glass-card p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-accent" aria-hidden="true" />
          Performance
        </h3>
        <div className="flex gap-1 sm:gap-2" role="tablist" aria-label="Performance time period">
          {['7D', '30D', '90D'].map((period) => (
            <button
              key={period}
              onClick={() => setActiveTab(period)}
              className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-md transition-all duration-200 touch-manipulation ${
                activeTab === period
                  ? 'bg-accent bg-opacity-10 text-accent'
                  : 'text-muted hover:text-fg hover:bg-surface'
              }`}
              role="tab"
              aria-selected={activeTab === period}
              aria-controls={`chart-${period}`}
              type="button"
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      
      <div 
        className="relative h-40 sm:h-48 flex items-end justify-between gap-1 sm:gap-2"
        role="img"
        aria-label={`Performance chart for ${activeTab} showing portfolio changes`}
      >
        {currentData.map((data, i) => {
          const heightPercentage = (data.value / maxValue) * 100;
          const isHovered = hoveredBar === i;
          const isPositive = data.change >= 0;
          
          return (
            <div
              key={i}
              className="relative flex-1 group"
              onMouseEnter={() => setHoveredBar(i)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              <div
                className={`w-full bg-gradient-to-t rounded-t-md transition-all duration-300 cursor-pointer ${
                  isPositive 
                    ? 'from-accent to-primary' 
                    : 'from-danger to-orange-500'
                } ${
                  isHovered ? 'opacity-90 scale-105' : 'opacity-80 hover:opacity-90'
                }`}
                style={{ height: `${heightPercentage}%` }}
                role="button"
                tabIndex={0}
                aria-label={`${data.label}: ${isPositive ? '+' : ''}${data.change}% change`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setHoveredBar(hoveredBar === i ? null : i);
                  }
                }}
              />
              
              {/* Tooltip */}
              {isHovered && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-bg border border-border rounded text-xs whitespace-nowrap z-10 shadow-lg">
                  <div className="text-center">
                    <div className="font-medium">{data.label}</div>
                    <div className={`${isPositive ? 'text-success' : 'text-danger'}`}>
                      {isPositive ? '+' : ''}{data.change}%
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-between mt-3 sm:mt-4 text-xs text-muted">
        {currentData.map((data, i) => (
          <span key={i} className="text-center flex-1">
            {data.label}
          </span>
        ))}
      </div>
      
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border grid grid-cols-3 gap-2 sm:gap-4">
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">Best Day</p>
          <p className="text-xs sm:text-sm font-semibold text-success">+8.5%</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">Worst Day</p>
          <p className="text-xs sm:text-sm font-semibold text-danger">-2.1%</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">Avg Daily</p>
          <p className="text-xs sm:text-sm font-semibold">+3.2%</p>
        </div>
      </div>
    </div>
  );
}
