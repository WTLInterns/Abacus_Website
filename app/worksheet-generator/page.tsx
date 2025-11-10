'use client';

import { WorksheetGenerator } from '../components/WorksheetGenerator';

export default function WorksheetGeneratorPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <WorksheetGenerator />
      </div>
    </main>
  );
}

