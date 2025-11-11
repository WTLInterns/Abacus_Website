'use client';

import React, { useState } from 'react';
import Button from './Button';

type Operation = 'addition' | 'subtraction' | 'multiplication' | 'division';

export function WorksheetGenerator() {
  const [operation, setOperation] = useState<Operation>('addition');
  const [digits, setDigits] = useState<number>(1);
  const [problems, setProblems] = useState<number>(10);

  const generateWorksheet = () => {
    const ops: Record<Operation, string> = {
      addition: '+',
      subtraction: '-',
      multiplication: '×',
      division: '÷',
    };
    const lines: string[] = [];
    for (let i = 0; i < problems; i++) {
      const max = Math.pow(10, digits) - 1;
      const a = Math.floor(Math.random() * (max + 1));
      const b = Math.floor(Math.random() * (max + 1));
      lines.push(`${a} ${ops[operation]} ${b} = `);
    }
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `worksheet-${operation}-${digits}d-${problems}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow border border-gray-200 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900">Abacus Worksheet Generator</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Operation</label>
          <select
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            value={operation}
            onChange={(e) => setOperation(e.target.value as Operation)}
          >
            <option value="addition">Addition</option>
            <option value="subtraction">Subtraction</option>
            <option value="multiplication">Multiplication</option>
            <option value="division">Division</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Digits</label>
          <input
            type="number"
            min={1}
            max={6}
            value={digits}
            onChange={(e) => setDigits(Math.max(1, Math.min(6, Number(e.target.value) || 1)))}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Problems</label>
          <input
            type="number"
            min={5}
            max={100}
            value={problems}
            onChange={(e) => setProblems(Math.max(5, Math.min(100, Number(e.target.value) || 10)))}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>
      </div>
      <div className="mt-6">
        <Button onClick={generateWorksheet} className="bg-black text-white hover:bg-gray-800">
          Generate Worksheet
        </Button>
      </div>
    </div>
  );
}
