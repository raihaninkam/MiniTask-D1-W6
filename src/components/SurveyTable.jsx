import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllSurveyData, removeData } from '../redux/slices/surveySlices';
import SurveyFormModal from './SurveyFormModal';

const SurveyTable = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const surveyData = useSelector(selectAllSurveyData);

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      dispatch(removeData(id));
    }
  };

  return (
    <div className="overflow-x-auto mt-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Tambah Data Survey
        </button>
      </div>

      <table className="min-w-full bg-white border rounded shadow-md">
        <thead>
          <tr className="bg-gray-200 text-left text-sm uppercase">
            <th className="px-4 py-2">Nama</th>
            <th className="px-4 py-2">Umur</th>
            <th className="px-4 py-2">Gender</th>
            <th className="px-4 py-2">Perokok</th>
            <th className="px-4 py-2">Merk</th>
            <th className="px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {surveyData.length > 0 ? (
            surveyData.map(item => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{item.nama}</td>
                <td className="px-4 py-2">{item.umur}</td>
                <td className="px-4 py-2">{item.gender}</td>
                <td className="px-4 py-2">{item.isSmoker}</td>
                <td className="px-4 py-2">{item.rokok?.join(', ') || '-'}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                Tidak ada data survey yang tersedia
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <SurveyFormModal closeModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default SurveyTable;   