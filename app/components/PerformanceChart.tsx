'use client';

import { useState } from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

interface ChartData {
  label: string;
  value: number;
  change: number;
}

export function PerformanceChart() {
  const [selectedPeriod, setSelectedPeriod] = useState('7D');
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const chartData: Record<string, ChartData[]> = {
    '7D': [
      { label: 'Mon', value: 65, change: 2.1 },
      { label: 'Tue', value: 72, change: 3.4 },
      { label: 'Wed', value: 58, change: -1.8 },
      { label: 'Thu', value: 80, change: 4.2 },
      { label: 'Fri', value: 75, change: -0.8 },
      { label: 'Sat', value: 85, change: 5.1 },
      { label: 'Sun', value: 78, change: -1.2 },
    ],
    '30D': [
      { label: 'Week 1', value: 70, change: 1.5 },
      { label: 'Week 2', value: 85, change: 4.2 },
      { label: 'Week 3', value: 65, change: -2.1 },
      { label: 'Week 4', value: 90, change: 6.8 },
    ],
    '90D': [
      { label: 'Month 1', value: 75, change: 2.8 },
      { label: 'Month 2', value: 85, change: 5.2 },
      { label: 'Month 3', value: 78, change: -1.5 },
    ],
  };

  const currentData = chartData[selectedPeriod];
  const maxValue = Math.max(...currentData.map(d => d.value));

  const periods = [
    { key: '7D', label: '7D' },
    { key: '30D', label: '30D' },
    { key: '90D', label: '90D' },
  ];

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold">Performance</h3>
        </div>
        <div className="flex gap-1 bg-surface rounded-lg p-1">
          {periods.map((period) => (
            <button
              key={period.key}
              onClick={() => setSelectedPeriod(period.key)}
              className={`px-3 py-1 text-sm rounded-md transition-all duration-200 touch-manipulation ${
                selectedPeriod === period.key
                  ? 'bg-accent text-bg font-medium'
                  : 'text-muted hover:text-fg hover:bg-border'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative h-48 mb-4">
        <div className="absolute inset-0 flex items-end justify-between gap-2">
          {currentData.map((data, i) => (
            <div
              key={i}
              className="flex-1 relative group cursor-pointer"
              onMouseEnter={() => setHoveredBar(i)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              <div
                className={`w-full bg-gradient-to-t rounded-t-md transition-all duration-300 ${
                  data.change >= 0 
                    ? 'from-success to-green-400' 
                    : 'from-danger to-red-400'
                } ${
                  hoveredBar === i 
                    ? 'opacity-100 shadow-lg scale-105' 
                    : 'opacity-80 hover:opacity-100'
                }`}
                style={{ height: `${(data.value / maxValue) * 100}%` }}
              />
              
              {hoveredBar === i && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-bg border border-border rounded-lg shadow-lg z-10 whitespace-nowrap">
                  <div className="text-sm font-semibold">{data.label}</div>
                  <div className={`text-xs ${data.change >= 0 ? 'text-success' : 'text-danger'}`}>
                    {data.change >= 0 ? '+' : ''}{data.change}%
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between text-xs text-muted mb-6">
        {currentData.map((data, i) => (
          <span key={i} className="text-center flex-1">{data.label}</span>
        ))}
      </div>
      
      <div className="pt-6 border-t border-border grid grid-cols-3 gap-4">
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">Best {selectedPeriod === '7D' ? 'Day' : selectedPeriod === '30D' ? 'Week' : 'Month'}</p>
          <p className="text-sm font-semibold text-success">
            +{Math.max(...currentData.map(d => d.change)).toFixed(1)}%
          </p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">Worst {selectedPeriod === '7D' ? 'Day' : selectedPeriod === '30D' ? 'Week' : 'Month'}</p>
          <p className="text-sm font-semibold text-danger">
            {Math.min(...currentData.map(d => d.change)).toFixed(1)}%
          </p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs text-muted mb-1">Average</p>
          <p className="text-sm font-semibold">
            +{(currentData.reduce((sum, d) => sum + d.change, 0) / currentData.length).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}
