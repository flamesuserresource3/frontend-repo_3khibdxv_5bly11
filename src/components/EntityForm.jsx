import React, { useMemo, useState, useEffect } from 'react';
import { Plus, X } from 'lucide-react';

const fieldConfigs = {
  students: [
    { name: 'studentId', label: 'Student ID', type: 'text', required: true },
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'program', label: 'Program', type: 'text', required: true },
  ],
  lecturers: [
    { name: 'lecturerId', label: 'Lecturer ID', type: 'text', required: true },
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'department', label: 'Department', type: 'text', required: true },
  ],
  courses: [
    { name: 'code', label: 'Course Code', type: 'text', required: true },
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'credits', label: 'Credits', type: 'number', required: true, min: 0 },
  ],
};

const initialValues = {
  students: { studentId: '', name: '', program: '' },
  lecturers: { lecturerId: '', name: '', department: '' },
  courses: { code: '', title: '', credits: 2 },
};

const EntityForm = ({ entity, onSubmit, editingItem, onCancelEdit }) => {
  const fields = useMemo(() => fieldConfigs[entity] || [], [entity]);
  const [values, setValues] = useState(initialValues[entity] || {});

  useEffect(() => {
    if (editingItem) {
      setValues(editingItem);
    } else {
      setValues(initialValues[entity]);
    }
  }, [entity, editingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: e.target.type === 'number' ? Number(value) : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    if (!editingItem) setValues(initialValues[entity]);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-700">
          {editingItem ? 'Edit' : 'Add'} {entity === 'students' ? 'Student' : entity === 'lecturers' ? 'Lecturer' : 'Course'}
        </h3>
        {editingItem && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600 hover:bg-slate-50"
          >
            <X className="h-3 w-3" /> Cancel edit
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {fields.map((f) => (
          <div key={f.name} className="flex flex-col gap-1">
            <label htmlFor={f.name} className="text-xs font-medium text-slate-600">
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              min={f.min}
              required={f.required}
              value={values[f.name] ?? ''}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-indigo-100 placeholder:text-slate-400 focus:border-indigo-500 focus:ring"
              placeholder={f.label}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4" /> {editingItem ? 'Save Changes' : 'Add Record'}
        </button>
      </div>
    </form>
  );
};

export default EntityForm;
