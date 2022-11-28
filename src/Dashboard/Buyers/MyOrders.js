import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn:async () =>{
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
      <h3 className="text-3xl py-3">My Orders :</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Products Name</th>
              <th>Price </th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {
             bookings.map((booking,i)=><tr key={booking._id}>
              <th>{i + 1}</th>
              <td>
              <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={booking.image} alt="productImage" />
                    </div>
                  </div>
              </td>
              <td>{booking.product_name}</td>
              <td>${booking.price} </td>
              <td>
                  {
                    booking.price && !booking.paid && <Link to={`/dashboard/checkout/${booking._id}`}><button className="btn btn-xs btn-error">Pay Now</button></Link>
                  }
                  {
                    booking.price && booking.paid && <span className="btn btn-xs btn-success">Paid</span>
                  }
              </td>
            </tr>) 
            }            
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyOrders;