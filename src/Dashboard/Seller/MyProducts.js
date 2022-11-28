import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../Shared/ConformationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () =>{
        setDeletingProduct(null);
    }

  const { data: products, isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/sellerproduct`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteProduct = product =>{
    fetch(`http://localhost:5000/sellerproduct/${product._id}`,{
      method: 'DELETE',
      headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
  })
  .then(res => res.json())
  .then(data =>{
      if(data.deletedCount > 0){
        refetch();
        toast.success('Product deleted successful.')   
      }
  })
  }


  if (isLoading) {
    return <Loading></Loading>;
  }

    return (
        <div>
      <h3 className="text-3xl">Manage Doctors: {products?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Post</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={product.image} alt="productImage" />
                    </div>
                  </div>
                </td>
                <td>{product.product_name}</td>
                <td>{product.price}</td>
                <td>
                  {
                    product.price && !product.sold && <button className="btn btn-xs btn-primary">Available</button>
                  }
                  {
                    product.price && product.sold && <span className="btn btn-xs btn-success">Sold</span>
                  }
                </td>
                <td>
                <label 
                className="btn btn-xs btn-secondary">
                Advertise</label>
                </td>
                <td>
                  <label onClick ={()=>setDeletingProduct(product)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs btn-error">Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {
            deletingProduct && <ConfirmationModal
            title = {`Are you sure, you want to delete?`}
            message = {`if you delete ${deletingProduct.name}. It can't be undone`}
            successAction = {handleDeleteProduct}
            successButton = "Delete"
            modalData = {deletingProduct}
            closeModal = {closeModal}
            ></ConfirmationModal>
        }
      </div>
    </div>
    );
};

export default MyProducts;