import React, { useState } from 'react'
import nurseryBg from '../assets/nurserybg.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const AddNursery = () => {
    const [nurseryData, setNurseryData] = useState({
        name: "",
        address: "",
        latitude: "",
        longitude: "",
        image: null
    })

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setNurseryData({
                ...nurseryData,
                [e.target.name]: e.target.files[0]
            });
        } else {
            setNurseryData({
                ...nurseryData,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('name', nurseryData.name);
        formData.append('address', nurseryData.address);
        formData.append('latitude', nurseryData.latitude);
        formData.append('longitude', nurseryData.longitude);
        formData.append('image', nurseryData.image);

        try {

            const response = await axios.post('http://localhost:3000/api/newNersery', formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            })
            toast.success(response.data);

            // reset form
            document.getElementById('nameField').value = "";
            document.getElementById('addressField').value = "";
            document.getElementById('latitudeField').value = "";
            document.getElementById('longitudeField').value = "";
            document.getElementById('imageField').value = "";

        } catch (error) {
            console.log(error);
        }

    }

    const handleResponseClick = () => {
        setResponseText("");
    }

    return (
        <>
        <Navbar/>
            <div className="nurseryPage">
                <div className="add-nersery" >
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <div className="nersery-form-section">
                        <h3 className='add-nersery-heading'>Add Nersery </h3>
                        <form className="add-nersery-from" style={{ width: '60%' }} onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="nameField" className="form-label">Nursery Name:</label>
                                <input name='name' type="text" className="form-control" id="nameField" onChange={handleChange} placeholder="Enter your Nursery Name..." required minLength={7} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="addressField" className="form-label">Nursery Address</label>
                                <input name='address' type='text' className="form-control" id="addressField" onChange={handleChange} placeholder='Enter Nursery Address' required minLength={15} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="latitudeField" className="col-form-label">Latitude</label>
                                <input name='latitude' type="text" id="latitudeField" className="form-control" aria-labelledby="passwordHelpInline" onChange={handleChange} placeholder='Enter Latitude coordinates' required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="longitudeField" className="col-form-label">Longitude</label>
                                <input name='longitude' type="text" id="longitudeField" className="form-control" aria-labelledby="passwordHelpInline" onChange={handleChange} placeholder='Enter Longitude coordinates' required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="imageField" className="form-label">Select Nursery Image</label>
                                <input name='image' className="form-control" type="file" id="imageField" onChange={handleChange} required />
                            </div>
                            <div className="mb-4">
                                <button type="submit" className='nursery-btn btn btn-primary'>Add Nursery</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="add-nersery-bg border" style={{ height: '100vh' }}>
                    <img src={nurseryBg} className='img-fluid w-100 h-100' alt="" />
                </div>
            </div>
        </>
    )
}

export default AddNursery