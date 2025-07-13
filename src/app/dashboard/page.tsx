import { Header } from '../../features/shared/components/header';
import { DashboardContent } from '../../features/dashboard/components/dashboard-content';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DashboardContent />
    </div>
  );
}