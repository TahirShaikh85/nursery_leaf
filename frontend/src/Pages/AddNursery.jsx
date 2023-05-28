import React, { useState } from 'react'
import nurseryBg from '../assets/nurserybg.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import { Base_URL } from '../config';

const AddNursery = () => {
    const [nurseryData, setNurseryData] = useState({
        name: "",
        address: "",
        phoneNum: "",
        latitude: "",
        longitude: "",
        image: null
    })

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            const files = Array.from(e.target.files);
            setNurseryData({
                ...nurseryData,
                [e.target.name]: files
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
        formData.append('phoneNum', nurseryData.phoneNum);
        formData.append('latitude', nurseryData.latitude);
        formData.append('longitude', nurseryData.longitude);

        // Append each image file to the FormData object
        for (let i = 0; i < nurseryData.image.length; i++) {
            formData.append('image', nurseryData.image[i]);
        }


        try {

            const response = await axios.post(`${Base_URL}/newNersery`, formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            })
            toast.success(response.data);

            // reset form
            document.getElementById('nameField').value = "";
            document.getElementById('addressField').value = "";
            document.getElementById('phoneField').value = "";
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
            <Navbar />
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
                                <label htmlFor="phoneField" className="col-form-label">Phone Number</label>
                                <input name='phoneNum' type="text" id="phoneField" className="form-control" aria-labelledby="passwordHelpInline" onChange={handleChange} placeholder='Enter Phone Number' required />
                            </div>
                            <div class="mb-4 row g-3 align-items-center">
                                <label htmlFor="latitudeField" className="col-form-label">Latitude & Longitude</label>
                                <div class="col-auto mt-0">
                                    <input name='latitude' type="text" id="latitudeField" className="form-control" aria-labelledby="passwordHelpInline" onChange={handleChange} placeholder='Enter Latitude coordinates' required />
                                </div>
                                <div class="col-auto mt-0">
                                    <input name='longitude' type="text" id="longitudeField" className="form-control" aria-labelledby="passwordHelpInline" onChange={handleChange} placeholder='Enter Longitude coordinates' required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="imageField" className="form-label">Select Nursery Image</label>
                                <input name='image' className="form-control" type="file" id="imageField" onChange={handleChange} required multiple accept="image/*" max="6" />
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