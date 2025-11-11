'use client';

import React from 'react';

export default function SecurityStatus() {
  const services = [
    { name: 'Blockchain RPC', uptime: '100.0%', latency: '108ms' },
    { name: 'IPFS Gateway', uptime: '99.4%', latency: '227ms' },
    { name: 'Supabase DB', uptime: '100.0%', latency: '59ms' },
    { name: 'Smart Contract', uptime: '100.0%', latency: '130ms' },
  ];

  return (
    <div className="relative bg-[#0E1624] border border-[#1C2A3A] rounded-2xl p-6 flex flex-col gap-5 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-green-400 tracking-wide">
            SYSTEM HEALTH
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Service status monitoring
          </p>
        </div>

        {/* Circular Status Indicator */}
        <div className="relative">
          <svg className="w-14 h-14 -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="#22c55e"
              strokeWidth="4"
              fill="none"
              strokeDasharray="120 150"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-white">98%</span>
          </div>
        </div>
      </div>

      {/* Service List */}
      <div className="relative z-10 space-y-3">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-[#101B2D] border border-[#1E2E42] p-3 rounded-xl"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#0A1220] rounded-lg">
                <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {service.name}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {service.uptime} uptime • {service.latency}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-semibold text-green-400">
                Operational
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#1E2E42] flex items-center justify-between">
        <span className="text-sm text-gray-400">Overall Status</span>
        <span className="text-sm font-semibold text-green-400">
          All Systems Operational
        </span>
      </div>
      <div className="w-full bg-[#1E2E42] rounded-full h-2 mt-1 overflow-hidden">
        <div className="h-full bg-green-500 w-[98%]"></div>
      </div>

      {/* Floating Robot */}
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/public/assets/bot_greenprint-H9JtPdDs77kivcY7EdoYWFriVul1yT.gif"
        className="absolute right-6 bottom-10 w-36 opacity-15 select-none pointer-events-none"
        alt="System Robot"
      />
    </div>
  );
}
