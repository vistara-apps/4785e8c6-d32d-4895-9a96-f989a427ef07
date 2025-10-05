'use client';

import { BarChart3 } from 'lucide-react';

export function PerformanceChart() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Performance</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-accent bg-opacity-10 text-accent rounded-md">
            7D
          </button>
          <button className="px-3 py-1 text-sm text-muted hover:text-fg rounded-md">
            30D
          </button>
          <button className="px-3 py-1 text-sm text-muted hover:text-fg rounded-md">
            90D
          </button>
        </div>
      </div>
      
      <div className="relative h-48 flex items-end justify-between gap-2">
        {[65, 72, 58, 80, 75, 85, 78].map((height, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-accent to-primary rounded-t-md transition-all duration-300 hover:opacity-80"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      
      <div className="flex justify-between mt-4 text-xs text-muted">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
      
      <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-muted mb-1">Best Day</p>
          <p className="text-sm font-semibold text-success">+8.5%</p>
        </div>
        <div>
          <p className="text-xs text-muted mb-1">Worst Day</p>
          <p className="text-sm font-semibold text-danger">-2.1%</p>
        </div>
        <div>
          <p className="text-xs text-muted mb-1">Avg Daily</p>
          <p className="text-sm font-semibold">+3.2%</p>
        </div>
      </div>
    </div>
  );
}
