import React from 'react';
import { DashboardLayout } from '../dashboard/DashboardLayout';
import { Overview } from '../dashboard/Overview';

export function CreditAnalysisDashboard() {
  return (
    <DashboardLayout>
      <Overview />
    </DashboardLayout>
  );
}
