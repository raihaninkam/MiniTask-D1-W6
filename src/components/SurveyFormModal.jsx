import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/slices/surveySlices';
import { v4 as uuidv4 } from 'uuid';

const SurveyFormModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    nama: '',
    umur: '',
    gender: '',
    isSmoker: '',
    rokok: []
  });

  const handleCheckbox = useCallback((e) => {
    const { value, checked } = e.target;
    setForm(prev => ({
      ...prev,
      rokok: checked
        ? [...prev.rokok, value]
        : prev.rokok.filter(item => item !== value)
    }));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nama || !form.umur || !form.gender || !form.isSmoker) {
      alert('Harap isi semua field yang wajib diisi!');
      return;
    }
    
    dispatch(addData({
      id: uuidv4(),
      nama: form.nama,
      umur: parseInt(form.umur),
      gender: form.gender,
      isSmoker: form.isSmoker,
      rokok: form.rokok
    }));
    
    setForm({
      nama: '',
      umur: '',
      gender: '',
      isSmoker: '',
      rokok: []
    });
    
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg space-y-4">
        <h2 className="text-xl font-bold">Form Survey Perokok</h2>

        <div>
          <label htmlFor="nama" className="block text-sm font-medium">Nama*</label>
          <input
            type="text"
            id="nama"
            name="nama"
            className="w-full border rounded px-3 py-2 mt-1"
            value={form.nama}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="umur" className="block text-sm font-medium">Umur*</label>
          <input
            type="number"
            id="umur"
            name="umur"
            min="1"
            max="120"
            className="w-full border rounded px-3 py-2 mt-1"
            value={form.umur}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Jenis Kelamin*</label>
          <div className="flex gap-4 mt-1">
            {['Laki-laki', 'Perempuan'].map(gender => (
              <label key={gender} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={form.gender === gender}
                  onChange={handleChange}
                  required
                />
                {gender}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Perokok?*</label>
          <select
            name="isSmoker"
            className="w-full border rounded px-3 py-2 mt-1"
            value={form.isSmoker}
            onChange={handleChange}
            required
          >
            <option value="" disabled>-- Pilih --</option>
            <option value="Ya">Ya</option>
            <option value="Tidak">Tidak</option>
          </select>
        </div>

        {form.isSmoker === 'Ya' && (
          <div>
            <label className="block text-sm font-medium">Jenis Rokok</label>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {["Marlboro", "Sampoerna Mild", "Surya Pro", "Djarum Super", "LA Ice Burst", "Dunhil", "Camel"].map((brand) => (
                <label key={brand} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={brand}
                    checked={form.rokok.includes(brand)}
                    onChange={handleCheckbox}
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded transition-colors"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SurveyFormModal;