'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Dashboard from '@/components/Dashboard';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <Navigation onDashboardClick={() => setShowDashboard(!showDashboard)} />
      
      {!showDashboard ? (
        <>
          <Hero onGetStarted={() => setShowDashboard(true)} />
          <Features />
          <CTA onGetStarted={() => setShowDashboard(true)} />
          <Footer />
        </>
      ) : (
        <Dashboard onBackClick={() => setShowDashboard(false)} />
      )}
    </div>
  );
}
