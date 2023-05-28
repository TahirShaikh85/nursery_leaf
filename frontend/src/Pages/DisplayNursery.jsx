import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Base_URL } from '../config';

const DisplayNursery = () => {
  const { searchTxt } = useContext(SearchContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchNursery = async () => {
      if (searchTxt.length > 4) {
        const response = await axios.get(`${Base_URL}/nursery?nursery=${searchTxt}`);
        setData(response.data);
      }
    };

    fetchNursery();
  }, [searchTxt]);

  console.log(data);
  console.log(searchTxt);

  return (
    searchTxt.length > 4 && (
      <div className="displayNursery-container">
        <div className="container">
          <h3>
            <i class="fa fa-search" aria-hidden="true"></i>  Searching Nursery - <span>{searchTxt}</span>
          </h3>
          {
            typeof data === 'string' ? (
              <p style={{textAlign:'center',fontSize:'1.2rem',color:'red'}}>{data}</p>
            ) : (
              data && data.map((nursery, index) => (
                <div className="row displayNursery" key={index}>
                  <div className="col-md-5 nursery-details">
                    <div className="details">
                      <h2>{nursery.name}</h2>
                      <p>
                        <b>Address: </b>
                        {nursery.address}
                      </p>
                      <div className="call-to-action">
                        <Link to={`tel:${nursery.phoneNum}`}
                          className="btn btn-primary call-now"
                          onClick={(e) => e.preventDefault()}
                        >
                          Call Now <i className="fa fa-phone" aria-hidden="true"></i>
                        </Link>

                        <Link
                          className="btn btn-warning view-map"
                          to={`https://www.google.com/maps?q=${nursery.latitude},${nursery.longitude}`} target="_blank"
                        >
                          View On Map <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </Link>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 nursery-images">
                    <div className="row images">
                      {
                        nursery.image.map((file, index) => (
                          <div className="col-md-4 image" key={index}>
                            <img src={`data:image/jpeg;base64,${file}`} className="img-fluid" alt="Nursery Image" />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    )
  );
};

export default DisplayNursery;
