import React from 'react';
import { Fragment } from 'react';
import Cards from '../cards/cards';
import SecondCard from '../cards/secondcards';
import RecentCustomer from '../customers/recentcustomer';

const Dashboard = () => {
    return (
        <Fragment>
            <Cards/>
            <SecondCard />
            <RecentCustomer />
        </Fragment>
    );
}

export default Dashboard;