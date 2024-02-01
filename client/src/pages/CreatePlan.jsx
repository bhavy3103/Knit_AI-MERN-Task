import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePlan = () => {
  const [formData, setFormData] = useState({
    username: '',
    mobileNo: '',
    email: '',
    destination: '',
    totalMembers: '',
    totalDays: '',
    transportationPreference: '',
    foodPreference: '',
    MaxBudgetConstraint: '',
    isDisabledPersonCount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form Data:', formData);

    if (
      formData.username &&
      formData.mobileNo &&
      formData.email &&
      formData.destination &&
      formData.totalMembers &&
      formData.totalDays &&
      formData.transportationPreference &&
      formData.foodPreference
    ) {
      fetch('http://localhost:3000/api/user/create-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Form data submitted successfully:', data);
          setFormData({
            username: '',
            mobileNo: '',
            email: '',
            destination: '',
            totalMembers: '',
            totalDays: '',
            transportationPreference: '',
            foodPreference: '',
            MaxBudgetConstraint: '',
            isDisabledPersonCount: 0,
          });
          toast.success('Your request has been sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        })
        .catch((error) => {
          console.error('Error submitting form data:', error.message);
        });
    }

  }

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-slate-800 shadow-2xl  p-8 text-gray-300">
        <h2 className="text-2xl text-white font-semibold mb-4 text-center" >User Information</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-200 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white ml-1"
            onChange={handleChange}
            value={formData.username}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobileNo" className="block text-gray-200 font-bold mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white ml-1"
            onChange={handleChange}
            value={formData.mobileNo}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-200 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white ml-1"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-200 font-bold mb-2">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white ml-1"
            onChange={handleChange}
            value={formData.destination}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="totalMembers" className="block text-gray-200 font-bold mb-2 ">
            Total Members
          </label>
          <input
            type="number"
            id="totalMembers"
            name="totalMembers"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white ml-1"
            onChange={handleChange}
            value={formData.totalMembers}
            min={1}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="totalDays" className="block text-gray-200 font-bold mb-2">
            Total Days
          </label>
          <input
            type="number"
            id="totalDays"
            name="totalDays"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white ml-1"
            onChange={handleChange}
            value={formData.totalDays}
            min={1}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="transportationPreference" className="block text-gray-200 font-bold mb-2">
            Transportation Preference
          </label>
          <select
            name="transportationPreference"
            id="transportationPreference"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white ml-1"
            onChange={handleChange}
            value={formData.transportationPreference}
            required
          >
            <option value="" disabled>Select transportation preference</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="plane">Plane</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="foodPreference" className="block text-gray-200 font-bold mb-2 ml-0">
            Food Preference
          </label>
          <select
            name="foodPreference"
            id="foodPreference"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white ml-1"
            onChange={handleChange}
            value={formData.foodPreference}
            required
          >
            <option className="bg-slate-700 " value="" disabled>Select food preference</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
            <option value="jain-veg">Jain Vegetarian</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="MaxBudgetConstraint" className="block text-gray-200 font-bold mb-2">
            Your Maximum Budget
          </label>
          <input
            type="number"
            id="MaxBudgetConstraint"
            name="MaxBudgetConstraint"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white ml-1"
            onChange={handleChange}
            value={formData.MaxBudgetConstraint}
            min={0}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="isDisabledPersonCount" className="block text-gray-200 font-bold mb-2">
            Enter the Number of Person are disabled
          </label>
          <input
            type="number"
            id="isDisabledPersonCount"
            name="isDisabledPersonCount"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white ml-1"
            onChange={handleChange}
            value={formData.isDisabledPersonCount}
          />
        </div>
        <div className='flex justify-center items-center'>
          <button
            type="submit"
            className="bg-slate-700 text-white flex justify-center items-center px-4 py-2 mt-3 border rounded-lg transition-all duration-300 hover:bg-slate-900 hover:shadow-lg"
          >
            Submit
          </button>

        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default CreatePlan;
