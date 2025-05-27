import React from 'react'

function Content() {
  return (
    <div>Content</div>
  )
}

export default Content






// import React, { useState } from 'react'

// function Content() {
//     const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

//   const toggleSubMenu = (menuName) => {
//     setActiveDropdown(activeDropdown === menuName ? null : menuName);
//   };
//   return (
//      <div>
//     <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
//     <div id="sidebar" className={isSidebarOpen ? 'open' : 'closed'}>
//       <ul>
//         <li>
//           <span className="logo">DSTArena</span>
//         </li>
//         <li>
//           <a href="index.html">
//             <span>🏠 Home</span>
//           </a>
//         </li>
//         <li className="active">
//           <a href="dashboard.html">
//             <span>📊 Dashboard</span>
//           </a>
//         </li>
//         <li>
//           <button onClick={() => toggleSubMenu('create')} className="dropdown-btn">
//             <span>➕ Create</span>
//           </button>
//           {activeDropdown === 'create' && (
//             <ul className="sub-menu">
//               <li><a href="#">Folder</a></li>
//               <li><a href="#">Document</a></li>
//               <li><a href="#">Project</a></li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <button onClick={() => toggleSubMenu('todo')} className="dropdown-btn">
//             <span>📌 Todo-Lists</span>
//           </button>
//           {activeDropdown === 'todo' && (
//             <ul className="sub-menu">
//               <li><a href="#">Work</a></li>
//               <li><a href="#">Private</a></li>
//               <li><a href="#">Coding</a></li>
//               <li><a href="#">Gardening</a></li>
//               <li><a href="#">School</a></li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <a href="calendar.html">
//             <span>📅 Calendar</span>
//           </a>
//         </li>
//         <li>
//           <a href="profile.html">
//             <span>👤 Profile</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
//   )
// }

// export default Content