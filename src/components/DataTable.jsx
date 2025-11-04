import React from 'react';
import { Trash2, Edit } from 'lucide-react';

const labelMap = {
  students: [
    { key: 'studentId', label: 'Student ID' },
    { key: 'name', label: 'Name' },
    { key: 'program', label: 'Program' },
  ],
  lecturers: [
    { key: 'lecturerId', label: 'Lecturer ID' },
    { key: 'name', label: 'Name' },
    { key: 'department', label: 'Department' },
  ],
  courses: [
    { key: 'code', label: 'Code' },
    { key: 'title', label: 'Title' },
    { key: 'credits', label: 'Credits' },
  ],
};

const DataTable = ({ entity, data, onDelete, onEdit }) => {
  const headers = labelMap[entity] || [];

  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {headers.map((h) => (
                <th
                  key={h.key}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600"
                >
                  {h.label}
                </th>
              ))}
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {data.length === 0 && (
              <tr>
                <td colSpan={headers.length + 1} className="px-4 py-8 text-center text-sm text-slate-500">
                  No records yet. Add the first one using the form above.
                </td>
              </tr>
            )}
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                {headers.map((h) => (
                  <td key={h.key} className="whitespace-nowrap px-4 py-2 text-sm text-slate-700">
                    {row[h.key]}
                  </td>
                ))}
                <td className="px-4 py-2">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(idx)}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      <Edit className="h-4 w-4" /> Edit
                    </button>
                    <button
                      onClick={() => onDelete(idx)}
                      className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700 hover:bg-rose-100"
                    >
                      <Trash2 className="h-4 w-4" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
