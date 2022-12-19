import React, { Fragment } from 'react';
import './cards.css'

const CustomerCard = () => {

    return (
        <Fragment>
             <div class="col-md-3 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Customers By Region</h4>
                  <div class="mb-3">
                    <p class="d-flex mb-2">
                      Ibadan
                      <span class="ml-auto font-weight-bold">70,0000</span>
                    </p>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-danger percentage" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="d-flex mb-2">
                      Kwara
                      <span class="ml-auto font-weight-bold">116,920</span>
                    </p>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-success percentage"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="d-flex mb-2">
                     Ogun
                      <span class="ml-auto font-weight-bold">10,000</span>
                    </p>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary percentage" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="d-flex mb-2">
                     Oyo
                      <span class="ml-auto font-weight-bold">30,000</span>
                    </p>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-warning percentage" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p class="d-flex mb-2">
                      Osun
                      <span class="ml-auto font-weight-bold">1999</span>
                    </p>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-danger percentage" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div>
                    <p class="d-flex mb-2">
                      Total
                      <span class="ml-auto font-weight-bold">12,000</span>
                    </p>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-info percentage" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
    );
}

export default CustomerCard;