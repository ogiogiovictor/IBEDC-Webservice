import React from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header  = () => {
    return (

    <Fragment>
     <nav className="navbar horizontal-layout col-lg-12 col-12 p-0">
      <div className="nav-top flex-grow-1">
        <div className="container d-flex flex-row h-100">
          <div className="text-center navbar-brand-wrapper d-flex align-items-top">
            <NavLink className="navbar-brand brand-logo brand-logo-header" to="/">IBEDC CMS</NavLink> 
            <NavLink className="navbar-brand brand-logo-mini" to="/">IBEDC CMS</NavLink>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <form className="search-field" action="#">
              <div className="form-group mb-0">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="search" />
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="icon-magnifier"></i></span>
                  </div>
                </div>
              </div>
            </form>
            <ul className="navbar-nav navbar-nav-right mr-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                  <i className="icon-bell"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                  <a className="dropdown-item py-3">
                    <p className="mb-0 font-weight-medium float-left">You have 4 new notifications
                    </p>
                    <span className="badge badge-pill badge-inverse-info float-right">View all</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-inverse-success">
                        <i className="icon-exclamation mx-0"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                      <p className="font-weight-light small-text mb-0">
                        Just now
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-inverse-warning">
                        <i className="icon-bubble mx-0"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                      <p className="font-weight-light small-text mb-0">
                        Private message
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-inverse-info">
                        <i className="icon-user-following mx-0"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                      <p className="font-weight-light small-text mb-0">
                        2 days ago
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="icon-equalizer"></i>
                </a>
              </li>
              <li className="nav-item nav-profile">
                <a className="nav-link" href="#">
                  <span className="nav-profile-text">Hello Charles Fapunda</span>
                  <img src="http://via.placeholder.com/36x36" className="rounded-circle" alt="profile"/>
                </a>
              </li>
            </ul>
            <button className="navbar-toggler align-self-center" type="button" data-toggle="minimize">
              <span className="icon-menu text-white"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="container">
          <ul className="nav page-navigation">
            <li className="nav-item">
              <NavLink to="/" className="nav-link"><i className="link-icon icon-screen-desktop"></i><span className="menu-title">Dashboard</span></NavLink>
            </li>
         
            <li className="nav-item">
              <a href="#" className="nav-link"><i className="link-icon icon-disc"></i><span className="menu-title">Customers</span><i className="menu-arrow"></i></a>
              <div className="submenu">
                <ul className="submenu-item">
                  <li className="nav-item"><NavLink className="nav-link" to="/createcustomer">Create Customer</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/postpaid_customers">Postpaid</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="prepaid_customers">Prepaid</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/payments">Payments</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/bills">Bills</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/allcustomers">All Customers</NavLink></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link"><i className="link-icon icon-book-open"></i><span className="menu-title">Assets</span><i className="menu-arrow"></i></a>
              <div className="submenu">
                <ul className="submenu-item">
                  <li className="nav-item"><NavLink className="nav-link" to="/transformers">DSS Information</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/feeders">Feeders</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/injectionsubstation">Injection Sub Stations</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/transmission">Transmission Sub Stations</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/powertransformer">Power Transformer</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/poles">Poles</NavLink></li>
                </ul>
              </div>
            </li>


            <li className="nav-item">
              <a href="#" className="nav-link"><i className="link-icon icon-pie-chart"></i><span className="menu-title">Customer Complaint</span><i className="menu-arrow"></i></a>
              <div className="submenu">
                <ul className="submenu-item">
                  <li className="nav-item"><NavLink className="nav-link" to="/tickets">Complaint</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/nerc">Nerc Report</NavLink></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link"><i className="link-icon icon-wallet"></i><span className="menu-title">DSS-CRO</span><i className="menu-arrow"></i></a>
              <div className="submenu">
                <ul className="submenu-item">
                  <li className="nav-item"><NavLink className="nav-link" to="/crodss">CRO-DSS Alignment</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/billdistribution">Bill Distribution</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/metereading">Meter Reading</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/tracker">Utilization Report</NavLink></li>
                </ul>
              </div>
            </li>


            <li className="nav-item">
              <a href="#" className="nav-link"><i className="link-icon icon-calculator"></i><span className="menu-title">Staff</span><i className="menu-arrow"></i></a>
              <div className="submenu">
                <ul className="submenu-item">
                  <li className="nav-item"><a className="nav-link" href="pages/apps/email.html">IBEDC Staff</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages/apps/calendar.html">Outsourced Staff</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages/apps/todo.html">Leave Management</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages/apps/gallery.html">Reports</a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link"><i className="link-icon icon-disc"></i><span className="menu-title">Approvals</span><i className="menu-arrow"></i></a>
              <div className="submenu">
                <ul className="submenu-item">
                  <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Approve Customer</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">CAAD</a></li>
                </ul>
              </div>
            </li>


            <li className="nav-item">
              <a href="pages/documentation/documentation.html" className="nav-link"><i className="link-icon icon-docs"></i><span className="menu-title">API Documentation</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </Fragment>


    );
}

export default Header;