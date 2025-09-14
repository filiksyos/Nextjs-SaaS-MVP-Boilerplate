
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, LineChart, PieChart } from 'lucide-react';

// Mock user data
const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

// Mock subscription data
const mockSubscription = {
  plan: 'Pro',
  status: 'Active',
  endDate: '2024-12-31',
};

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Simulate authentication check
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      // Redirect to a mock login page if not authenticated
      // In a real app, this would be your actual login page
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  if (!user) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </header>

      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Info */}
          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Name:</strong> {mockUser.name}</p>
              <p><strong>Email:</strong> {mockUser.email}</p>
            </CardContent>
          </Card>

          {/* Subscription Status */}
          <Card>
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Plan:</strong> {mockSubscription.plan}</p>
              <p><strong>Status:</strong> {mockSubscription.status}</p>
              <p><strong>Renews on:</strong> {mockSubscription.endDate}</p>
            </CardContent>
          </Card>

          {/* Mock Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Key Metrics</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-around">
              <div className="text-center">
                <BarChart className="h-8 w-8 mx-auto" />
                <p className="font-bold text-2xl">1,234</p>
                <p className="text-sm text-gray-500">Signups</p>
              </div>
              <div className="text-center">
                <LineChart className="h-8 w-8 mx-auto" />
                <p className="font-bold text-2xl">$5,678</p>
                <p className="text-sm text-gray-500">Revenue</p>
              </div>
              <div className="text-center">
                <PieChart className="h-8 w-8 mx-auto" />
                <p className="font-bold text-2xl">75%</p>
                <p className="text-sm text-gray-500">Engagement</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
