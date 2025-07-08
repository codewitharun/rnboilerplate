import React from 'react';
import WorkerDashboard from '@src/components/WorkerComponents/WorkerDashboard';
interface AppProps {
  navigation: any;
}

const WorkerDashboardScreen: React.FC<AppProps> = () => {
  return <WorkerDashboard />;
};

export default WorkerDashboardScreen;
