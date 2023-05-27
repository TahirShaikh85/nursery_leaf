import React from 'react'
import nurseryBg from '../assets/nurserybg.jpg'

const AddNursery = () => {
    return (
        <div className="nurseryPage">
            <div className="add-nersery" >
                <div className="nersery-form-section">
                    <h3 className='add-nersery-heading'>Add Nersery </h3>
                    <form className="add-nersery-from" style={{ width: '60%' }}>
                        <div className="mb-4">
                            <label for="exampleFormControlInput1" className="form-label">Nursery Name:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Nursery Name..." />
                        </div>
                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label">Nursery Address</label>
                            <input type='text' className="form-control" id="exampleFormControlTextarea1" placeholder='Enter Nursery Address' />
                        </div>
                        <div className="mb-4">
                            <label for="inputPassword6" className="col-form-label">Latitude</label>
                            <input type="number" id="inputPassword6" className="form-control" aria-labelledby="passwordHelpInline" placeholder='Enter Latitude coordinates' />
                        </div>
                        <div className="mb-4">
                            <label for="inputPassword6" className="col-form-label">Longitude</label>
                            <input type="number" id="inputPassword6" className="form-control" aria-labelledby="passwordHelpInline" placeholder='Enter Longitude coordinates' />
                        </div>
                        <div className="mb-4">
                            <label for="formFile" className="form-label">Default file input example</label>
                            <input className="form-control" type="file" id="formFile" />
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
    )
}

export default AddNursery