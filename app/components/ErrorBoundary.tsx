'use client';

import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="glass-card p-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-danger bg-opacity-10 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-danger" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
              <p className="text-sm text-muted mb-4">
                We encountered an error while loading this component. Please try refreshing the page.
              </p>
            </div>
            
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-4 py-2 bg-accent bg-opacity-10 text-accent rounded-lg hover:bg-opacity-20 transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm font-medium">Refresh Page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ErrorState({ 
  title = "Something went wrong",
  message = "We encountered an error. Please try again.",
  onRetry,
  showRefresh = true
}: {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showRefresh?: boolean;
}) {
  return (
    <div className="glass-card p-6 text-center fade-in">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-danger bg-opacity-10 flex items-center justify-center">
          <AlertTriangle className="w-6 h-6 text-danger" />
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted mb-4">{message}</p>
        </div>
        
        <div className="flex gap-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex items-center gap-2 px-4 py-2 bg-accent bg-opacity-10 text-accent rounded-lg hover:bg-opacity-20 active:scale-95 transition-all duration-200 touch-manipulation"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm font-medium">Try Again</span>
            </button>
          )}
          
          {showRefresh && (
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-4 py-2 border border-border text-muted rounded-lg hover:text-fg hover:border-accent active:scale-95 transition-all duration-200 touch-manipulation"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm font-medium">Refresh</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function EmptyState({
  title = "No data available",
  message = "There's nothing to show here yet.",
  action,
  icon: Icon = AlertTriangle
}: {
  title?: string;
  message?: string;
  action?: { label: string; onClick: () => void };
  icon?: any;
}) {
  return (
    <div className="glass-card p-6 text-center fade-in">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-muted bg-opacity-10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-muted" />
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted mb-4">{message}</p>
        </div>
        
        {action && (
          <button
            onClick={action.onClick}
            className="flex items-center gap-2 px-4 py-2 bg-accent bg-opacity-10 text-accent rounded-lg hover:bg-opacity-20 active:scale-95 transition-all duration-200 touch-manipulation"
          >
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        )}
      </div>
    </div>
  );
}