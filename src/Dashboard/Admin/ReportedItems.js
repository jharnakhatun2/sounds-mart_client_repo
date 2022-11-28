import React from 'react';

const ReportedItems = () => {
    return (
        <div className="p-7">
      <h3 className="text-3xl py-3 font-semibold">Reported Products :</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product ID</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Seller</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr >             
              <td></td> 
              <td></td> 
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

export default ReportedItems;