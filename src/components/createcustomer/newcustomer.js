import React from 'react';
import CustomerCard from '../cards/customercard';

const NewCustomer = () => {

    return (
        <div className="row">
            <div className="col-md-8 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">ADD NEW CUSTOMER</h4>
                  <p className="card-description">
                   Customer Enumeration
                  </p>
                  <form className="forms-sample">
                    <div className="form-group">
                      <label for="exampleInputUsername1">Customer Name</label>
                      <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Account Number</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Meter Number</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputConfirmPassword1">Customer Address</label>
                      <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
                    </div>
                   
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>

            <CustomerCard />

        </div>
    );
}

export default NewCustomer;