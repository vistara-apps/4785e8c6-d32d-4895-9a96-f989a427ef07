import { PortfolioDashboard } from './components/PortfolioDashboard';
import { AppHeader } from './components/AppHeader';
import { BottomNav } from './components/BottomNav';

export default function Home() {
  return (
    <main className="min-h-screen pb-20 sm:pb-24">
      <AppHeader />
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-7xl">
        <PortfolioDashboard />
      </div>
      <BottomNav />
    </main>
  );
}
