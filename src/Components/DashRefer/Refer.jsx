import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard1/Sidebar';
import img from "../assest2/1.jpg"
import axios from '../Axios/Axios';
import { Link } from 'react-router-dom';



function Refer() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

const [referralData1, setReferralData1] = useState([]);
 const userId = localStorage.getItem("userId")
const showrefferal = ()=>{
  axios.get(`/API/dashboard/referral_amt_request_api.php?id=${userId}`)
  .then((raw)=>{
    // console.log(raw.data)
     setReferralData1(raw.data);
  }).catch((err)=>{
    console.log(err)
  })
}


useEffect(()=>{
  showrefferal();
},[])

const [formData, setFormData] = useState({
  Referral_code: '',       // Add this
  usersesid: '',           // Add this
  bank_holde_rname: '',
  creadit_amount: '',
  branch: '',
  bnkName: '',
  ifscCode: '',
  ac: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleWithdraw = () => {
   
  const userId = localStorage.getItem("userId");
  const Referral_code  = referralData[0].referral_code
  const creadit_amount = referralData
  .slice(1)
  .reduce((total, item) => total + Number(item.Coin || 0), 0);

  const formDataToSend = new FormData();
  
  formDataToSend.append("Referral_code", Referral_code); // Required
  // console.log(referralCode)
  formDataToSend.append("usersesid", userId);           // Required
  // console.log(userId)
   formDataToSend.append("creadit_amount", creadit_amount);
  //  console.log(creadit_amount)
   formDataToSend.append("bank_holde_rname", formData.bank_holde_rname);
 
  formDataToSend.append("branch", formData.branch);
  formDataToSend.append("bnkName", formData.bnkName);
  formDataToSend.append("ifscCode", formData.ifscCode);
  formDataToSend.append("ac", formData.ac);

  axios.post("/API/dashboard/referral_amound_widthraw_api.php", formDataToSend)
    .then((response) => {
      console.log("API Response:", response.data);
      // console.log(response.data[0].success)
      if (response.data[0].success === "1") {
        alert(response.data[0].msg||"Withdrawal request sent successfully!");
        setIsModalOpen(false);
        setFormData({
          Referral_code: '',
          usersesid: '',
          bank_holde_rname: '',
          creadit_amount: '',
          branch: '',
          bnkName: '',
          ifscCode: '',
          ac: ''
        });
        // 🔁 Reload the page
   window.location.reload();
      } else {
        alert(response.data.response?.msg || "Withdrawal failed. Please try again.");
      }
    })
    .catch((error) => {
      console.error("API Error:", error);
      alert("Failed to send withdrawal request.");
    });
};


    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleWithdrawClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

const [referralData, setReferralData] = useState([]);
const [referralCode, setReferralCode] = useState('');
const [referralUsers, setReferralUsers] = useState([]);

useEffect(() => {
  const userId = localStorage.getItem("userId");

  axios
    .get(`/API/dashboard/referral_payment_api.php?id=${userId}`)
    .then((res) => {
      const data = res.data;
      // console.log(data);
      setReferralData(data)
      
      if (Array.isArray(data) && data.length > 0) {
        // First item is always referral code
        setReferralCode(data[0].referral_code);

        // If more than 1 item, this user has referred others
        if (data.length > 1) {
          const referred = data.slice(1); // all referred users
          setReferralUsers(referred);
        }
      }
    })
    .catch((err) => {
      console.error("Error fetching referral data:", err);
    });
}, []);

// console.log(referralData)



  return (
    <div className='w-full h-auto  bg-[#F8F8F8] flex'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

<div id="scroll" className='w-full md:w-[77%] mx-5 relative '>
      {/* Header Section */}
      <div className='h-[12vh] w-[50%] md:w-[15%] mt-5 flex gap-3 items-center'>
        <img className='w-full h-full object-cover rounded-full' src={img} alt='Profile'/>
        <h2 className='text-3xl md:text-4xl'>Referral</h2>
      </div>
    
    {/* <div className='mt-5 mx-10 text-[18px]'>
      <h2> <Link to="/dashboard/home">Home </Link><i class="ri-arrow-right-s-line"></i> <span>Referrel</span></h2>
    </div> */}

    <div className="mt-5 mx-10 bg-gray-100 p-3 rounded-lg shadow-sm text-sm flex items-center gap-2">
  <Link to="/dashboard/home" className="flex items-center gap-1 text-blue-600 font-medium hover:underline">
    <i className="ri-home-4-line"></i> Home
  </Link>
  <i className="ri-arrow-right-s-line text-gray-500 text-lg"></i>
  <span className="text-gray-800 font-semibold">Referral</span>
</div>


      <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl'>
            <i className='px-3 py-3 bg-blue-200 rounded-md ml-[-10px]  absolute top-[1%] left-[1%] mr-5 ri-menu-fill'></i>
       </button>


      <div className="w-full xl:px-4 md:px-10 xl:max-w-6xl xl:mx-auto">
  {/* Referral Code Section */}
  {/* <h2 className='text-3xl mt-16 mx-2 text-red-600'> Referral Code {referralCode}</h2> */}
  <div className="mt-8 mx-2 bg-white border border-red-200 shadow-md rounded-xl p-6 flex items-center justify-between">
  <div className="flex items-center gap-3">
    <i className="ri-gift-line text-3xl text-red-500"></i>
    <h2 className="text-2xl font-semibold text-gray-800">
      Referral Code: <span className="text-red-600 font-bold">{referralCode}</span>
    </h2>
  </div>
  
  <button
    onClick={() => navigator.clipboard.writeText(referralCode)}
    className="bg-red-100 hover:bg-red-200 text-red-600 font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition"
  >
    <i className="ri-file-copy-line text-xl"></i> Copy
  </button>
</div>

 {/* <div className="xl:w-[50%] min-h-[20vh] sm:min-h-[22vh] md:min-h-[25vh] lg:h-[18vh] mt-8 sm:mt-10 md:mt-5 rounded-2xl bg-gradient-to-br from-[#6FCF97]/95 to-[#34C759]/85 backdrop-blur-lg shadow-[0_8px_25px_rgba(0,0,0,0.2)] p-4 sm:p-5 md:p-6 transition-all duration-500 hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)] hover:-translate-y-1">
  <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] animate-gradient">
    Referral Code
  </h2>
  <h2 className="text-center text-white my-3 sm:my-4 md:my-2 text-base sm:text-lg md:text-xl lg:text-2xl font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] tracking-wide">
    Your Code:
  </h2>
  <div className="w-full h-[6vh] sm:h-[6.5vh] md:h-[7vh] flex items-center justify-center bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/100 transition-all duration-300">
    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-gray-900 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] tracking-tight bg-clip-text  bg-gradient-to-r from-[#34C759] to-[#6FCF97]">
      {referralCode}
    </h2>
  </div>
</div> */}



<div className="w-full h-auto mt-10 bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.15)] p-10 rounded-3xl overflow-x-auto xl:overflow-x-visible transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-1">
  <h2 className="text-center text-4xl md:text-4xl mb-10 font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient drop-shadow-lg">
    Your Referred Users
  </h2>

  {referralUsers.length > 0 ? (
    <div className="w-full min-w-[700px]">
      <table className="w-full table-fixed border-collapse text-left">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-200/60 to-pink-200/60 text-gray-900 backdrop-blur-md shadow-sm">
            <th className="px-6 py-5 font-bold text-xs uppercase tracking-widest w-[5%] rounded-tl-2xl">#</th>
            <th className="px-6 py-5 font-bold text-xs uppercase tracking-widest w-[30%]">Name</th>
            <th className="px-6 py-5 font-bold text-xs uppercase tracking-widest w-[25%]">Join Referral ID</th>
            <th className="px-6 py-5 font-bold text-xs uppercase tracking-widest w-[20%]">Date</th>
            <th className="px-6 py-5 font-bold text-xs uppercase tracking-widest w-[10%] rounded-tr-2xl">Coin</th>
          </tr>
        </thead>
        <tbody>
          {referralUsers.map((user, index) => (
            <tr
              key={index}
              className="border-b border-gray-100/30 hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-pink-50/50 hover:scale-[1.01] hover:shadow-inner transition-all duration-300 group"
            >
              <td className="px-6 py-5 font-semibold text-gray-800 group-hover:text-indigo-600">
                {index + 1}
              </td>
              <td className="px-6 py-5 font-medium text-gray-900 group-hover:text-purple-600 truncate">
                {user.name?.replace(/([a-z])([A-Z])/g, '$1 $2')}
              </td>
              <td className="px-6 py-5 text-gray-700 group-hover:text-pink-500 truncate">
                {user.Join_Referral_Id}
              </td>
              <td className="px-6 py-5 text-gray-700 group-hover:text-indigo-600">
                {user.date?.replace(/^[A-Za-z]+/, '')}
              </td>
              <td className="px-6 py-5 text-gray-800 font-bold text-center group-hover:text-indigo-600">
               ₹ {user.Coin || 0}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-100 text-gray-800  font-semibold">
            <td colSpan="4" className="px-6 py-4 text-right">
              Total Users: {referralUsers.length}
            </td>
            <td className="px-6 py-4 text-center">
             ₹ {referralUsers.reduce((total, user) => total + parseInt(user.Coin || 0), 0)}
            </td>
          </tr>
        </tfoot>
      </table>

      {/* ✅ Withdraw Button */}
      <div className="flex justify-end mt-6 pr-2">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition-all duration-300 shadow-md"
          onClick={handleWithdrawClick}
        >
          Withdraw
        </button>
      </div>

      {/* ✅ Modal */}
      {isModalOpen && (
        <div className="absolute top-[-150%] left-[-10%] right-[-15%] inset-0 z-50 bg-black/40 flex items-center justify-center rounded-3xl">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-[200%] max-w-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Withdraw Credit</h3>

            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="bank_holde_rname"
                placeholder="Bank Holder Name"
                value={formData.bank_holde_rname}
                onChange={handleChange}
                required
                className="p-3 border rounded-md"
              />
              <input
                required
                type="text"
                name="branch"
                placeholder="Branch Name"
                value={formData.branch}
                onChange={handleChange}
                className="p-3 border rounded-md"
              />
              <input
                type="text"
                name="bnkName"
                placeholder="Bank Name"
                value={formData.bnkName}
                onChange={handleChange}
                className="p-3 border rounded-md"
              />
              <input
                type="text"
                name="ifscCode"
                placeholder="IFSC Code"
                value={formData.ifscCode}
                onChange={handleChange}
                className="p-3 border rounded-md"
              />
              <input
                type="text"
                name="ac"
                placeholder="Account Number"
                value={formData.ac}
                onChange={handleChange}
                className="p-3 border rounded-md"
              />
            </div>

            <div className="flex justify-between gap-3 mt-6">
              <button
                onClick={handleCloseModal}
                className="w-full py-2 bg-gray-300 rounded hover:bg-gray-400 text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleWithdraw}
                className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded"
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="text-center py-1">
      <p className="text-3xl text-gray-500 font-bold animate-pulse drop-shadow-md">
        No referrals yet? Invite friends to join the party! 🚀
      </p>
    </div>
  )}
</div>
     </div>
    </div>

    </div>
  )
}

export default Refer


