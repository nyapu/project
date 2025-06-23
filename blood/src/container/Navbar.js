// // src/container/Navbar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Sun, Moon } from 'lucide-react';
// import { FiSearch } from 'react-icons/fi';


// const Navbar = ({ toggleDarkMode, darkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={`navbar navbar-expand-lg px-4 shadow fixed-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
//       }`}>



//       <Link className="navbar-brand fw-bold" to="/">
//         BloodCare
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         onClick={toggleMenu}
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
//         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//           {/* <li className="nav-item me-3">
//             <input
//               type="text"
//               placeholder="Search donors..."
//               className="form-control form-control-sm"
//               style={{ maxWidth: '200px' }}
//             />
//           </li> */}
//           <li className="nav-item me-3 d-flex align-items-center">
//             <div className={`d-flex align-items-center rounded-pill px-2 ${darkMode ? 'bg-secondary' : 'bg-light'}`}>
//               <FiSearch size={16} className="me-2 text-muted" />
//               <input
//                 type="text"
//                 placeholder="Search donors..."
//                 className={`form-control form-control-sm border-0 bg-transparent text-${darkMode ? 'light' : 'dark'}`}
//                 style={{ maxWidth: '200px', boxShadow: 'none' }}
//               />
//             </div>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/donate">Donate Blood</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/find">Find Donors</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/banks">Blood Banks</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/login">Login / Register</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/about">About Us</Link>
//           </li>
//           <li className="nav-item dropdown">
//             <span className="nav-link dropdown-toggle" role="button">
//               Contact
//             </span>
//             <ul className={`dropdown-menu ${darkMode ? 'dropdown-menu-dark' : ''}`}>
//               <li>
//                 <Link className="dropdown-item" to="/contact">Contact Us</Link>
//               </li>
//               <li>
//                 <Link className="dropdown-item" to="/blood-banks">Find Blood Bank Near You</Link>
//               </li>
//             </ul>
//           </li>

//           <li className="nav-item d-flex align-items-center ms-3">
//             <button
//               onClick={toggleDarkMode}
//               className="btn btn-sm btn-light"
//               title="Toggle Dark Mode"
//             >
//               {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//             </button>
//             {/* <button
//               onClick={toggleDarkMode}
//               className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'}`}
//               title="Toggle Dark Mode"
//             >
//               {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//             </button> */}


//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// src/container/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { FiSearch } from 'react-icons/fi';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const contactRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleContactDropdown = () => setContactDropdownOpen(!contactDropdownOpen);

  useEffect(() => {
    const handleMouseEnter = () => setContactDropdownOpen(true);
    const handleMouseLeave = () => setContactDropdownOpen(false);

    const node = contactRef.current;
    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg px-4 shadow fixed-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <Link className="navbar-brand fw-bold" to="/">
        BloodCare
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item me-3 d-flex align-items-center">
            <div className={`d-flex align-items-center rounded-pill px-2 ${darkMode ? 'bg-secondary' : 'bg-light'}`}>
              <FiSearch size={16} className="me-2 text-muted" />
              <input
                type="text"
                placeholder="Search donors..."
                className={`form-control form-control-sm border-0 bg-transparent text-${darkMode ? 'light' : 'dark'}`}
                style={{ maxWidth: '200px', boxShadow: 'none' }}
              />
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/donate">Donate Blood</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/find">Find Donors</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/banks">Blood Banks</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login / Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>

          {/* ✅ Contact Dropdown */}
          <li
            className={`nav-item dropdown ${contactDropdownOpen ? 'show' : ''}`}
            ref={contactRef}
          >
            <span
              className="nav-link dropdown-toggle"
              role="button"
              onClick={toggleContactDropdown} // for mobile
            >
              Contact
            </span>
            <ul className={`dropdown-menu ${contactDropdownOpen ? 'show' : ''} ${darkMode ? 'dropdown-menu-dark' : ''}`}>
              <li>
                <Link className="dropdown-item" to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/blood-banks">Find Blood Bank Near You</Link>
              </li>
            </ul>
          </li>

          <li className="nav-item d-flex align-items-center ms-3">
            <button
              onClick={toggleDarkMode}
              className="btn btn-sm btn-light"
              title="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
