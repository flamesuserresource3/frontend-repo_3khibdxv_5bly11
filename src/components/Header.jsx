import React from 'react';
import { School, Settings, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <School className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-900">Academic Management</h1>
            <p className="text-xs text-slate-500">Master data for students, lecturers, and courses</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 p-2 hover:bg-slate-50">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
