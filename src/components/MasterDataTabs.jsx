import React from 'react';
import { Users, GraduationCap, BookOpen } from 'lucide-react';

const tabs = [
  { key: 'students', label: 'Students', icon: Users },
  { key: 'lecturers', label: 'Lecturers', icon: GraduationCap },
  { key: 'courses', label: 'Courses', icon: BookOpen },
];

const MasterDataTabs = ({ active, onChange }) => {
  return (
    <div className="flex w-full gap-2 overflow-x-auto rounded-lg border border-slate-200 bg-white p-1">
      {tabs.map(({ key, label, icon: Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-colors ${
              isActive
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default MasterDataTabs;
