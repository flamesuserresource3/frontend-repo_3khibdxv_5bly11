import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import MasterDataTabs from './components/MasterDataTabs';
import EntityForm from './components/EntityForm';
import DataTable from './components/DataTable';

const App = () => {
  const [active, setActive] = useState('students');
  const [students, setStudents] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const currentList = useMemo(() => {
    switch (active) {
      case 'students':
        return students;
      case 'lecturers':
        return lecturers;
      case 'courses':
        return courses;
      default:
        return [];
    }
  }, [active, students, lecturers, courses]);

  const setCurrentList = (updater) => {
    if (active === 'students') setStudents(updater);
    if (active === 'lecturers') setLecturers(updater);
    if (active === 'courses') setCourses(updater);
  };

  const handleSubmit = (values) => {
    if (editingIndex !== null) {
      const updated = [...currentList];
      updated[editingIndex] = values;
      setCurrentList(updated);
      setEditingIndex(null);
    } else {
      setCurrentList([...currentList, values]);
    }
  };

  const startEdit = (index) => setEditingIndex(index);
  const cancelEdit = () => setEditingIndex(null);
  const handleDelete = (index) => {
    const updated = currentList.filter((_, i) => i !== index);
    setCurrentList(updated);
    if (editingIndex === index) setEditingIndex(null);
  };

  const editingItem = editingIndex !== null ? currentList[editingIndex] : null;

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6">
          <MasterDataTabs active={active} onChange={(key) => { setActive(key); setEditingIndex(null); }} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <EntityForm
              entity={active}
              onSubmit={handleSubmit}
              editingItem={editingItem}
              onCancelEdit={cancelEdit}
            />
          </div>

          <div className="lg:col-span-2">
            <DataTable
              entity={active}
              data={currentList}
              onDelete={handleDelete}
              onEdit={startEdit}
            />
          </div>
        </div>
      </main>
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        Built for managing academic master data
      </footer>
    </div>
  );
};

export default App;
