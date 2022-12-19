import React from 'react';
import CustomerCard from './customercard';


const SecondCard = () => {
    return (
        <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card text-white border-0">
                <img className="card-img h-100 rounded-0" src="http://via.placeholder.com/545x363" alt="Card image" />
                <div className="card-img-overlay d-flex flex-column justify-content-between">
                  <h4 className="font-weight-light">
                      10 Oct 2018
                  </h4>
                  <div>
                    <h4 className="font-weight-light">
                        Check our all integration points
                    </h4>
                    <h3 className="font-weight-light mb-0">
                        Welcome to IBEDC Warehouse
                    </h3>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-3 d-flex align-items-stretch">
              <div class="row">
                <div class="col-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body d-flex flex-column justify-content-between">
                      <div>
                        <p class="mb-1"><span class="h4 mb-0 mr-2">Metered </span>Customers.</p>
                        <p class="mb-0 text-muted font-weight-light">Total Customers metered on </p>                        
                      </div>
                      <div>
                        <h6 class="font-weight-normal">MSMS</h6>
                        <span class="badge badge-primary">34,590</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body d-flex flex-column justify-content-between">
                      <div>
                        <p class="mb-1"><span class="h4 mb-0 mr-2">IBEDC</span>Approved</p>                        
                        <p class="mb-0 text-muted font-weight-light">Service Centers</p>
                      </div>
                      <div>
                        <h6 class="font-weight-normal">By Business Hub</h6>
                        <span class="badge badge-primary">11,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CustomerCard />

          
           


        </div>
    );

}

export default SecondCard;