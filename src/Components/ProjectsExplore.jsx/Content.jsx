import React, { useEffect, useState } from 'react'
import img from "../assest2/Technology.png"
import { useParams } from 'react-router-dom'
import axios from '../Axios/Axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import img2 from "../assest2/instagram.png"
import img3 from "../assest2/whats.png"
import img4 from "../assest2/twitter.png"

function Content({setproductID, setCartCount, setTech}) {
 
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

  //payment GateWay
  const handlePayment = (project) => {
    const paymentData = new FormData();
    paymentData.append("usersesid", userId); // Replace with actual session ID
    paymentData.append("vender_id", project.vender_id); // Replace with actual vendor ID
    paymentData.append("couponCodeValue", couponCode); // Apply if available
    paymentData.append("amount_array", JSON.stringify([project.sale_price]));
    paymentData.append("pro_id", project.project_id);
    paymentData.append("name", user2[0].fname); // Replace with actual user name
    paymentData.append("email", user2[0].email);// Replace with actual email
   
    paymentData.append("contact", user2[0].contact); // Replace with actual contact
    // paymentData.append("contact", 6260524679); // Replace with actual contact
    console.log(user2[0].contact)
    paymentData.append("ProductDetails", project.project_id);
    // paymentData.append("total_amount", 10);
    paymentData.append("total_amount", isCouponApplied ? subTotal : project.sale_price);
    axios.post('/API/payment_api.php', paymentData)
      .then((res) => {
        // console.log(res)
        // console.log(res.data[0].success)
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
      // console.log(res)
      if (res.data[0].success) {
        setDiscount(res.data[0].Off);
        setSaveAmount(parseFloat(res.data[0].Save_amount));
        setSubTotal(parseFloat(res.data[0].Subtotal));
        setFinalTotal(res.data[0].Total_amount);
        setIsCouponApplied(true);
        toast.success("Coupon Applied Successfully!");
      } else {
        toast.error("Invalid Coupon Code!");
      }
    })
    .catch((err)=>{
      console.log(err)
      toast.error("Something went wrong. Try again!")
    })
    // .catch(() => toast.error("Something went wrong. Try again!"));
  };

//popup buy btn k liye
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
   const isLoggedIn = localStorage.getItem("userId"); // Check login status

  if (!isLoggedIn) {
    toast.error("Please log in.");
    window.location.href = "/login"; //Redirect to login page
    return;
  }
    setShowPopup(!showPopup);
  };

  //Add Cart Feature k liye
  // const handleAddToCart = (id)=>{
  //   toast.success('Product Added Succesfully!');
  //   // alert('Product Added'+id)
  //   axios.get(`/API/single_project_details_api.php?id=${id}`).then((ans)=>{
  //     // console.log(ans);
  //     setproductID(ans);
      
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }

//   const handleAddToCart = (id) => {
//   toast.success('Product Added Successfully!');

//   axios.get(`/API/single_project_details_api.php?id=${id}`)
//     .then((ans) => {
//       // Match your expected structure for mapping: { data: [product] }
//       const cartItem = {
//         data: [ans.data],
//       };
//       setproductID(cartItem);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };


const handleAddToCart = (id) => {
  toast.success("Product Added Successfully!");

  axios.get(`/API/single_project_details_api.php?id=${id}`)
    .then((res) => {
      const userId = localStorage.getItem("userId");

      const newProduct = {
        userId: userId,
        data: [
          {
            project_id: res.data[0].project_id,
            project_name: res.data[0].project_name,
            sale_price: res.data[0].sale_price,
            image: res.data[0].image,
            vender_id: res.data[0].vender_id,
          },
        ],
      };

      // Check if cart already exists
      const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Add new item to cart
      const updatedCart = [...existingCart, newProduct];

      // Save updated cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      // Set to state also for UI update
      setproductID(newProduct);

       // Update cart count state here!
      setCartCount(updatedCart.length);

    })
    .catch((err) => {
      console.log(err);
    });
};


  //Projects Details Id k liye API

  const[getDet, setgetDet] = useState([]);

  const{id} = useParams();
  // console.log(id);

  const getDetails = ()=>{
     window.scrollTo({ top: 0, behavior: 'smooth' });
    const api = (`/API/single_project_details_api.php?id=${id}`);
    axios.get(api).then((det)=>{
      setgetDet(det.data)
      console.log(det.data[0]);
      const project = det.data[0]
      if(project.language){
         setTech(project.language.toLowerCase());
      }
      
      // setgetDet(det.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getDetails()
  },[id])

  // console.log(getDet);
  //Description Paragraph k unnecessary symbol ko hatana

  const cleanDescription = (description) => {
    const sanitizedHtml = DOMPurify.sanitize(description);
    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitizedHtml, 'text/html');
    return doc.body.textContent || ''; // Extract clean text
  };


  
  const [selectedImage, setSelectedImage] = useState(""); // Initially empty

useEffect(() => {
  if (getDet.length > 0) {
    setSelectedImage(getDet[0].image); // First image by default
  }
}, [getDet]);


  return (
    <div className="w-[100%] xl:px-32 xl:pt-32 p-5  xl:flex  gap-10 ">
      <Toaster/>
    {/* Left Section */}
     <div className=" xl:w-[60%] p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex flex-wrap gap-4 mb-10">

  {/* Instagram Share */}
  <a href={`https://www.instagram.com/`}  target="_blank"  rel="noopener noreferrer"
 className=" xl:w-[30%] mb-4 bg-[#E1E7FF] p-4 rounded-md flex items-center space-x-4 hover:shadow-lg transition"  >
    <span className="text-[15px] xl:text-4xl w-12 h-12"><img src={img2} alt="" /></span>
    <div>
      <h2>Share on</h2>
      <p className="text-sm font-semibold">Instagram</p>
    </div>
  </a>

  {/* WhatsApp Share */}
  <a
    href={`https://api.whatsapp.com/send?text=Check%20out%20this%20amazing%20project!%20${window.location.href}`}
    target="_blank"
    rel="noopener noreferrer"
    className="xl:w-[30%] mb-4 bg-[#CCFBF1] p-4 rounded-md flex items-center space-x-4 hover:shadow-lg transition"
  >
    <span className="text-4xl w-12 h-12"><img src={img3} alt="" /></span>
    <div>
      <h2>Share on</h2>
      <p className="text-sm font-semibold">WhatsApp</p>
    </div>
  </a>

  {/* Twitter Share */}
  <a
    href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20project!&url=${window.location.href}`}
    target="_blank"
    rel="noopener noreferrer"
    className="xl:w-[30%] mb-4 bg-[#FFF1CC] p-4 rounded-md flex items-center space-x-4 hover:shadow-lg transition"
  >
    <span className="text-4xl w-12 h-12"><img src={img4} alt="" /></span>
    <div>
      <h2>Share on</h2>
      <p className="text-sm font-semibold">Twitter</p>
    </div>
  </a>

     </div>

        {getDet.map((elem,index)=>{

        // Manually add 3 images
          const thumbnails = [
          elem.image,
          elem.More_Image
          // "https://projectsarena.com/upload_img/Screenshot 2022-12-16 160137.jpg", // Or add another fallback
       ];
          return  <div key={index}>
            <div className='w-full xl:h-[50vh]'>
               <img src={selectedImage}  alt="Project Main" className="w-full h-full rounded-lg transition duration-300" />
            </div>

      <div className="w-full pt-5 gap-8 flex">
        {thumbnails.map((img, i) => (
          <img key={i} src={img} alt={`Thumbnail ${i}`}  className="w-[25%] md:w-[30%] rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
           onMouseEnter={() => setSelectedImage(img)}/>
        ))}
      </div>
    
        <h2 className="text-3xl font-bold mt-16 mb-10">Description</h2>
        <p className='text-justify text-gray-600'>
        {cleanDescription(elem.project_description)}
        <br/>
        <br/>

        {/* Mauris sed venenatis libero, Pellentesque elementum ante massa, ac ornare augue molestie ut. Suspendisse lacinia tortor sem, at condimentum nulla auctor in. Sed vulputate euismod risus, eget auctor nulla aliquet sed. */}
        <br />
        <br />
        {/* Nunc consequat quam tincidunt, mattis purus et, euismod eros. Donec sed lobortis nunc. Donec a pretium ipsum. Curabitur pellentesque neque et dictum interdum. Nam eu faucibus augue, id sagittis magna. Aliquam sodales est dolor, non convallis arcu feugiat a. Curabitur dictum dapibus nisl quis convallis. Morbi nec ex vestibulum, tincidunt sapien a, pretium arcu. */}
        </p>
        <h2 className='text-4xl mb-10'>Terms & Conditions</h2>
       <ol className="list-decimal pl-4">
    {elem.TERMS_CONDITIONS.split('#@').map((point, index) => {
    const cleaned = point.trim();
    if (!cleaned) return null;

    // Remove unwanted <li> tag from API if present
    const noLi = cleaned.replace(/^<li>/, '');

    return (
      <li key={index} className="mb-2 text-gray-700">
        {noLi}
      </li>
    );
  })}
</ol>

          </div>
        })}

      <hr />
    </div>

    {/* Right Section */}
    <div className="w-[110%]  xl:w-[40%] h-[130vh] xl:mt-8 lg:h-[140vh] border-2 space-y-6">
      {getDet.map((elem,index)=>{
        return <div key={elem.project_id} className="md:p-20  xl:p-6 xl:w-full xl:h-[150vh] bg-white shadow-lg p-6 rounded-lg">
        <h3 className="text-2xl font-bold "> {elem.project_name &&
                       elem.project_name.charAt(0).toUpperCase() +
                      elem.project_name.slice(1).toLowerCase()} </h3>
         {/* <h2 className='text-2xl mt-4 mb-4'>₹{elem.sale_price}</h2> */}
         <div className='flex mt-5 gap-5'>
          <h2>Language/Technology:</h2>
          <h2>{elem.language}</h2>
         </div>
         <div className='flex gap-40'>
          <h2>Type:</h2>
          <h2>{elem.project_category}</h2>
         </div>
       
        <h2 className='text-2xl mt-4 mb-4'>Price: ₹{elem.sale_price}</h2>

        {isCouponApplied ? (
      <>
        <h2 className='text-2xl text-green-600 mt-5 mb-4'>Discount: {discount}</h2>
        <p className='mb-4'>Save Amount: <strong>₹{saveAmount}</strong></p>
        <p className='text-xl font-bold'>Total Price: <strong>₹{subTotal}</strong></p>
      </>
    ) : (
      <p className='text-xl mt-5 font-bold'>Total Price: <strong>₹{elem.sale_price}</strong></p>
    )}
         {/* Coupon Section */}
         <div className="mt-6 border p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Apply Coupon</h3>
                <input 
                  type="text" 
                  className="border p-2 w-full rounded-md" 
                  placeholder="Enter Coupon Code" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button 
                  onClick={() => applyCoupon(elem.sale_price)} 
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-full"
                >
                  Apply Coupon
                </button>
         </div>
         


        <div className='flex items-center gap-5 pt-5'>
        <button onClick={togglePopup} className="xl:px-20 py-3 bg-[#FB641B] px-10 xl:px-16  font-medium text-white py-2 rounded-lg mt-4">
          Buy
        </button>
        <Link to="/cart" onClick={()=>{handleAddToCart(elem.project_id)}} className="py-4 text-[13px] xl:px-16 xl:py-3 xl:text-[15px] bg-[#FF9F00] px-7 font-medium text-white py-2 rounded-lg  mt-4">
          Add to cart
        </Link>
        {/* <button onClick={()=>{handleAddToCart(elem.project_id)}} className="px-16 py-2 bg-[#FF9F00] font-medium text-white py-2 rounded-lg mt-4">
          Add to cart
        </button> */}
        </div>
        
        <h2 className='mt-10 text-[#2452A7]'>List of the following materials will be provide with combo pack</h2>
        <ul  className="list-disc pl-5 text-sm mt-5">
          <li>Source code</li>
          <li>Existing and Proposed Project Comparison</li>
          <li>Algorithm with Flow chart</li>
          <li>Report</li>
          <li>Proposed abstract document</li>
        </ul>
        <h2 className='mt-10 text-[#2452A7] mb-10'>List of the following materials. You will download software/report</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Source code/Report</li>
        </ul>
             </div>
      })}
  
    </div>

    {/* popup */}
    {showPopup && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
     {getDet.map((elem,index)=>{
        return <div className="bg-white p-5  rounded-xl shadow-xl xl:w-[80%] max-w-4xl xl:flex gap-8 xl:items-center transform transition-all duration-300 ease-in-out animate-fadeIn">
        {/* Left Section - Course Details */}
        <div className='xl:w-[50%] flex flex-col justify-between bg-gray-50 p-4 rounded-lg shadow-md'>
          <h2 className='text-xl xl:text-3xl font-bold mb-4 text-gray-800'>Your Course</h2>
          <img className='xl:w-full h-[17vh] xl:h-[25vh] rounded-lg mb-4' src={elem.image} alt="Course"/>
          <h2 className='xl:text-xl font-semibold mb-2'>{elem.project_name}</h2>
          <p className='text-lg font-bold text-gray-600'>₹{isCouponApplied ? subTotal : elem.sale_price}<span className="text-sm font-normal">(Buy Combo)</span></p>
          <div className='hidden lg:block xl:mt-6 xl:p-4 xl:bg-gray-200 xl:rounded-lg'>
            <h2 className='text-lg font-semibold mb-3 text-gray-700'>Payment & Support Info</h2>
            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 flex items-center justify-center border-2 border-gray-400 rounded-full'>
                <i className="text-blue-500 text-xl ri-check-line"></i>
              </div>
              <div>
                <h3 className='font-medium text-gray-700'>Contact Us</h3>
                <p className='text-gray-500'>dstinfo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section - Payment Details */}
        <div className='xl:w-[45%]   xl:h-[65vh] bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500'>
          <h2 className='xl:text-3xl font-bold mb-2 xl:mb-8 text-gray-800'>Payment Details</h2>
          <div className='mb-6'>
            <p className='mb-2 flex justify-between items-center border-2 py-3 rounded-md px-2 xl:mb-5'>
              <div className='flex flex-col items-center xl:px-4 xl:py-2 bg-blue-500  text-white rounded-lg shadow-md'>
                   <button onClick={()=>handlePayment(elem)} className='px-4 xl:px-2 text-[15px] '>Combo </button>
                    <span className='text-[12px]'>(code/SRS)</span>
              </div>
           
              <span className='xl:text-xl font-semibold text-gray-800'>₹{isCouponApplied ? subTotal : elem.sale_price}</span>
            </p>
            <p className='flex justify-between items-center mb-5 border-2 py-4 rounded-md px-2'>
              <span className='px-2 text-[15px] py-1 xl:px-4 xl:py-2 bg-blue-500 text-white rounded-lg shadow-md'>SRS</span>
              <span className='px-2 text-[10px] xl:text-[15px] py-1 xl:px-4 xl:py-2 bg-red-500 text-[14px] text-white rounded-lg shadow-md'>Request For Synopsis</span>
            </p>
            <p className='flex justify-between items-center border-2 py-4 rounded-md px-2'>
              <span className='px-2 text-[11px]  xl:text-[15px]  py-1 xl:px-4 xl:py-2 bg-blue-500 text-white rounded-lg shadow-md'>Project</span>
              <span className='px-2 text-[10px] xl:text-[15px] py-1 xl:px-4 xl:py-2 bg-red-500 text-[14px] text-white rounded-lg shadow-md'>Request For Software</span>
            </p>
            <hr className='xl:my-6 border-gray-300'/>
          </div>

          <div className="flex justify-end space-x-4">
            <button onClick={togglePopup} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300">Cancel</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">Confirm</button>
          </div>
        </div>
      </div>
     })}

    </div>
  )} 
  
  </div>
  )
}

export default Content

