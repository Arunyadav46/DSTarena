import React, { useEffect, useState } from 'react'
import axios from '../Axios/Axios';
import toast, { Toaster } from 'react-hot-toast';

function Content({cartAllProduct, setCartAllProduct, setCartCount}) {
    console.log(cartAllProduct)


const calculateSubtotal = () => {
  let total = 0;
  cartAllProduct.forEach((cartItem) => {
    cartItem.data?.forEach((elem) => {
      // Convert price to number in case it's stored as string
      const price = Number(elem.sale_price) || 0;
      total += price;
    });
  });
  return total;
};

 //coupon code k liye
     
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [saveAmount, setSaveAmount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const applyCoupon = (salePrice) => {
    if (!couponCode) {
      toast.error("Please enter a coupon code!");
      return;
    }

    const formData = new FormData();
    formData.append("couponCode", couponCode);
    formData.append("TotalAmound", salePrice);

    axios.post("/API/coupon_card_api.php", formData,{
      headers: {
        "Content-Type": "multipart/form-data", // Required for FormData
    },
    })
    .then((res) => {
      console.log(res)
      if (res.data[0].success) {

        setDiscount(res.data[0].Off);
        setSaveAmount(parseFloat(res.data[0].Save_amount));
        setSubTotal(parseFloat(res.data[0].Subtotal));
        setFinalTotal(res.data[0].Total_amount);
        setIsCouponApplied(true);
        toast.success("Coupon Applied Successfully!");
        // alert("Coupon Applied Successfully!")
      } else {
        toast.error("Invalid Coupon Code!");
        // alert("Invalid Coupon Code!")
      }
    })
    .catch((err)=>{
      console.log(err)
      toast.error("Something went wrong. Try again!")
      // alert("Something went wrong. Try again!")
    })
    // .catch(() => toast.error("Something went wrong. Try again!"));
  };

    const userId = localStorage.getItem("userId")

    const[user2,setuser2] = useState([]);
    const getuserData2 = ()=>{
    axios.get(`/API/dashboard/profile_update_api.php?id=${userId}`)
    .then((data)=>{
      // console.log(data)
      setuser2(data.data || [])
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getuserData2();
  },[userId])

      const handlePayment = (project) => {
        console.log(project)
        const paymentData = new FormData();
         // Collect data from all projects
           const prices = project.map(p => p.sale_price);
           const vendorIds = project.map(p => p.vender_id);
           const projectIds = project.map(p => p.project_id);

        paymentData.append("usersesid", userId); // Replace with actual session ID
        // paymentData.append("vender_id", project.vender_id); // Replace with actual vendor ID
        paymentData.append("vender_id", vendorIds.join(',')); // Replace with actual vendor ID
        console.log(vendorIds.join(','))
        paymentData.append("couponCodeValue", ""); // Apply if available
        // paymentData.append("amount_array", JSON.stringify([project.sale_price]));
        paymentData.append("amount_array", prices.join(','));
        console.log(prices.join(','))
        // paymentData.append("amount_array[]",100,200);
        
        // console.log(JSON.stringify([project.sale_price]))
        paymentData.append("pro_id", project.project_id);
        paymentData.append("pro_id", projectIds.join(','));
        console.log(projectIds.join(','))
        paymentData.append("name", user2[0].fname); // Replace with actual user name
        paymentData.append("email", user2[0].email);// Replace with actual email
        paymentData.append("contact", user2[0].contact); // Replace with actual contact
        console.log(user2[0].contact)
        
        // console.log(user2[0].contact)
        paymentData.append("ProductDetails", project.project_id);
        // paymentData.append("total_amount", 10);
      paymentData.append("total_amount", isCouponApplied ? subTotal : calculateSubtotal());
        axios.post('/API/payment_api.php', paymentData)
          .then((res) => {
            console.log(res)
            console.log(res.data[0].success)
            console.log(res.data[0].warning)
            if (res.data[0].success==='1') {
              window.location.href = res.data[0].responce; // Redirect to Instamojo
            } else {
              toast.error('Payment initiation failed!');
            }
          })
          .catch((err) =>{
            console.error(err);
            toast.error('Error processing payment');
          });
      };

 
  const handleDeleteItem = (projectId) => {
  const userId = localStorage.getItem("userId");
  const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

  const updatedCart = existingCart
    .map((item) => {
      if (item.userId === userId && Array.isArray(item.data)) {
        const newData = item.data.filter((product) => product.project_id !== projectId);
        return { ...item, data: newData };
      }
      return item;
    })
    .filter((item) => Array.isArray(item.data) && item.data.length > 0);

  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  setCartAllProduct(updatedCart);

  // 🟢 Update cart count dynamically
  let totalCount = 0;
  updatedCart.forEach(item => {
    if (Array.isArray(item.data)) {
      totalCount += item.data.length;
    }
  });

  setCartCount(totalCount); // ✅ updates cart count after delete
};



  return (
    
<div className="w-full min-h-screen bg-[#F8F8F8]">
  <Toaster/>
  {cartAllProduct.length === 0 || cartAllProduct.every(item => item.data.length === 0) ? (
    <p className="text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl h-[60vh] flex items-center justify-center">
      Cart is Empty.
    </p>
  ) : (
    <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Row */}
      <div className="w-full bg-[#E8E3E3] p-4 rounded-lg mb-6 hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
        <h2 className="text-lg font-semibold">ITEM</h2>
        <div className="col-span-4 lg:col-span-4 flex justify-end gap-4 sm:gap-8 lg:gap-16">
          <h2 className="text-lg  font-semibold">Price</h2>
          <h2 className="text-lg mr-6 font-semibold">Total</h2>
        </div>
      </div>

      {/* Map through all cart items */}
      {cartAllProduct.map((cartItem, index) => (
        <div key={index}>
          {cartItem.data?.map((elem, idx) => (
            <div key={idx} className="w-full">
              {/* Cart item */}
              <div className="border-b-2 pb-4 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 h-16 sm:w-15 sm:h-10 rounded-full  object-cover"
                    src={elem.image}
                    alt={elem.project_name}
                  />
                  <div>
                    <h2 className="text-sm sm:text-[18px] text-gray-600">
                      {elem.project_name &&
                       elem.project_name.charAt(0).toUpperCase() +
                      elem.project_name.slice(1).toLowerCase()} 
                    </h2>
                    <h2 className="text-base sm:text-lg font-semibold sm:hidden">
                      Price: ₹{elem.sale_price}
                    </h2>
                  </div>
                </div>
                <div className="flex justify-between sm:justify-end items-center gap-4 sm:gap-8 lg:gap-16">
                  <h2 className="text-base sm:text-lg font-semibold hidden sm:block">
                    ₹{elem.sale_price}
                  </h2>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg font-semibold ">
                       ₹{elem.sale_price}
                    </h2>
                    
                    <button
                      onClick={() => handleDeleteItem(elem.project_id)}
                      className="text-white text-sm  bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                    >
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Coupon and totals section */}
      <div className="flex flex-col items-end gap-4">
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <input
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="text-sm sm:text-base text-gray-700 px-4 py-2 border-2 border-blue-200 rounded outline-none w-full sm:w-64"
            type="text"
            placeholder="Enter Coupon code"
          />
          <button
            onClick={() => applyCoupon(calculateSubtotal())}
            className="text-sm sm:text-base bg-[#076395] text-white px-4 py-2 rounded border-2 border-[#076395] hover:bg-[#054c73]"
          >
            Apply Coupon
          </button>
        </div>

        <div className="w-full sm:w-auto border-b-2 pb-2">
          <h2 className="text-lg sm:text-xl text-gray-800">
            Subtotal: ₹{isCouponApplied ? subTotal : calculateSubtotal()}
          </h2>
        </div>

        <div className="w-full sm:w-auto">
          {isCouponApplied && (
            <div className="mb-2">
              <h2 className="text-lg sm:text-xl text-green-600">
                Discount: {discount}%
              </h2>
              <p className="text-sm sm:text-base">
                Save Amount: <strong>₹{saveAmount}</strong>
              </p>
            </div>
          )}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Grand total: <span>₹{isCouponApplied ? subTotal : calculateSubtotal()}</span>
          </h2>
          {/* <div
            onClick={()=>handlePayment()}
            className="w-full sm:w-auto px-6 py-2 bg-[#F08C04] text-white text-center mt-4 rounded-md hover:bg-[#d47a03]"
          >
            <button>Check out</button>
          </div> */}
   
          <div
 onClick={() => {
  const allProjects = cartAllProduct.flatMap(cart => cart.data); // ✅ this is an array
  handlePayment(allProjects);
}}
  className="w-full sm:w-auto px-6 py-2 bg-[#F08C04] text-white text-center mt-4 rounded-md hover:bg-[#d47a03]"
>
  <button>Check out</button>
</div>



     


        </div>
      </div>
    </div>
  )}
</div>
  )
}

export default Content



{/* <div className="w-full max-h-screen bg-[#F8F8F8]"> */}
{/* Check if cartAllProduct is empty */}
 {/* <Toaster/> */}
// {cartAllProduct.length === 0 ? (
  // <p className="text-black text-center text-3xl xl:text-5xl h-[60vh]   pt-40">Cart is Empty.</p>
// ) : (
  // cartAllProduct.map((cartItem, index) =>(
  //   <div key={index} className="mb-5">
  //     {/* Check if data exists */}
  //     {cartItem.data?.map((elem, idx) => (
  //       <div  key={idx} className="w-full">
  //         <div className='w-[80%] p-5 flex justify-between items-center ml-[150px] mb-4  h-[5vh] bg-[#E8E3E3]'>
  //           <h2>ITEM</h2>
  //           <div className='flex gap-52'>
  //             <h2>Price</h2>
  //             <h2>Total</h2>
  //           </div>
  //         </div>
  //          <div className='border-b-2 xl:px-40 mb-5 flex justify-between'>
  //          <div className="flex items-center gap-4">
  //         <img className="w-[10%] h-[80%]" src={elem.image} alt=""/>
  //         <h2 className="text-[15px] text-gray-600">{elem.project_name}</h2>
  //         </div>
  //        <div className="flex gap-5 justify-between gap-52 items-center">
  //         <h2 className="text-lg font-semibold">₹{isCouponApplied?(subTotal):(elem.sale_price)} </h2>  
  //         <div className='flex gap-2'>
  //         <h2 className="text-lg font-semibold">₹{isCouponApplied?(subTotal):(elem.sale_price)}</h2>
  //         <button onClick={()=>{handleDeleteItem(elem.project_id)}} className="text-white text-[15px] bg-red-500 px-2 py-1 rounded">
  //         <i class="ri-delete-bin-line"></i>
  //         </button>
  //         </div>
  //        </div>

  //         </div>

  //          <div className='flex justify-end'>
  //          <input value={couponCode}
  //                onChange={(e) => setCouponCode(e.target.value)} className='mr-[30px] text-[15px] text-gray-700 px-4 py-2 border-2 border-blue-200 outline-none' type="text" placeholder='Enter Coupon code' />
  //          <button onClick={() => applyCoupon(elem.sale_price)} className='mr-[160px] px-4 text-[15px] bg-[#076395] text-white py-2 border-2'>Apply Coupon</button>
  //          </div>


  //          <div className='flex justify-end  mt-8 pr-[160px] border-b-2'>
  //           <h2 className='text-gray-800 mb-2'>Subtotal: ₹{isCouponApplied?(subTotal):(elem.sale_price)}</h2>
  //          </div>

  //          <div className='flex mt-2  justify-end pr-[160px]'>
  //           <div>
  //               {isCouponApplied ? (
  //     <>
  //       <h2 className='text-xl text-green-600 mt-1 mb-2'>Discount: {discount}</h2>
  //       <p className='mb-2'>Save Amount: <strong>₹{saveAmount}</strong></p>
  //       {/* <p className='text-xl font-bold'>Final Price: <strong>₹{subTotal}</strong></p> */}
  //     </>
  //   ) : (
  //    "" // <p className='text-xl mt-5 font-bold'>Grand total: <strong>₹{elem.sale_price}</strong></p>
  //   )}
  //          <h2 className='text-3xl'>Grand total:  <span>₹{isCouponApplied?(subTotal):(elem.sale_price)}</span> </h2>
  //             <div onClick={()=>handlePayment(elem)} className='px-4 py-2 bg-[#F08C04] text-white text-center mt-4 rounded-md'><button >Check out</button></div>
  //           </div>
  //          </div>
  //       </div>
  //     ))}
  //   </div>
  // ))
  // <div className="mb-5">
  /* Header row (only once at the top) */
  /* <div className='w-[80%] p-5 flex justify-between items-center ml-[150px] mb-4 h-[5vh] bg-[#E8E3E3]'>
    <h2>ITEM</h2>
    <div className='flex gap-52'>
      <h2>Price</h2>
      <h2>Total</h2>
    </div>
  </div>

  {/* Map through all cart items */
  // {cartAllProduct.map((cartItem, index) => (
  //   <div key={index}>
  //     {cartItem.data?.map((elem, idx) => (
  //       <div key={idx} className="w-full">
  //         {/* Cart item */}
  //         <div className='border-b-2 xl:px-40 mb-5 flex justify-between'>
  //           <div className="flex items-center gap-4">
  //             <img className="w-[10%] rounded-full h-[80%]" src={elem.image} alt=""/>
  //             <h2 className="text-[15px] text-gray-600">{elem.project_name}</h2>
  //           </div>
  //           <div className="flex gap-5 justify-between gap-52 items-center">
  //             <h2 className="text-lg font-semibold">₹{elem.sale_price}</h2>  
  //             <div className='flex gap-2'>
  //               <h2 className="text-lg font-semibold">₹{elem.sale_price}</h2>
  //               <button 
  //                 onClick={() => handleDeleteItem(elem.project_id)} 
  //                 className="text-white text-[15px] bg-red-500 px-2 py-1 rounded"
  //               >
  //                 <i className="ri-delete-bin-line"></i>
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // ))} */}

  /* Coupon and totals section (only once at the bottom) */
  /* <div className='flex justify-end'>
    <input 
      value={couponCode}
      onChange={(e) => setCouponCode(e.target.value)} 
      className='mr-[30px] text-[15px] text-gray-700 px-4 py-2 border-2 border-blue-200 outline-none' 
      type="text" 
      placeholder='Enter Coupon code' 
    />
    <button 
      onClick={() => applyCoupon(calculateSubtotal())} 
      className='mr-[160px] px-4 text-[15px] bg-[#076395] text-white py-2 border-2'
    >
      Apply Coupon
    </button>
  </div>

  <div className='flex justify-end mt-8 pr-[160px] border-b-2'>
    <h2 className='text-gray-800 mb-2'>Subtotal: ₹{isCouponApplied ? subTotal : calculateSubtotal()}</h2>
  </div>

  <div className='flex mt-2 justify-end pr-[160px]'>
    <div>
      {isCouponApplied && (
        <>
          <h2 className='text-xl text-green-600 mt-1 mb-2'>Discount: {discount}</h2>
          <p className='mb-2'>Save Amount: <strong>₹{saveAmount}</strong></p>
        </>
      )}
      <h2 className='text-3xl'>Grand total: <span>₹{isCouponApplied ? subTotal : calculateSubtotal()}</span></h2>
      <div 
        onClick={handlePayment} 
        className='px-4 py-2 bg-[#F08C04] text-white text-center mt-4 rounded-md'
      >
        <button>Check out</button>
      </div>
    </div>
  </div>
</div>
)}
</div> */