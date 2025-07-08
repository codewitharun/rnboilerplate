import React from 'react';
import AdminDashboard from '@src/components/AdminComponents/AdminDashboard';

interface AppProps {
  navigation: any;
}

const AdminDashboardScreen: React.FC<AppProps> = () => {
  return <AdminDashboard />;
};

export default AdminDashboardScreen;
