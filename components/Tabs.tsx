'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b border-slate-800 space-x-6 overflow-x-auto scrollbar-none mb-8">
        {tabs.map((tab, index) => {
          const isActive = index === activeTab;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative py-3 text-sm font-medium transition-colors duration-300 focus:outline-none whitespace-nowrap ${
                isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
      <div>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          {tabs[activeTab].content}
        </motion.div>
      </div>
    </div>
  );
}

export default Tabs;
