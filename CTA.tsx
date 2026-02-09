'use client';

import { ArrowRight, Zap } from 'lucide-react';

export default function CTA({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 sm:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are using AI to scale their creative output and deliver exceptional results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onGetStarted}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-2xl transition flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </button>
              <a
                href="#pricing"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition flex items-center gap-2"
              >
                <Zap size={20} />
                View Pricing
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex justify-center gap-6 flex-wrap text-sm text-blue-100">
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
