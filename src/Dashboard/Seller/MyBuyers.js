import React from 'react';

const MyBuyers = () => {
    return (
        <div className="p-7">
      <h3 className="text-3xl py-3 font-semibold">All Buyers :</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email </th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>              
              <td></td> 
              <td></td> 
              <td></td> 
              <td></td> 
            </tr>            
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyBuyers;