

import axios from '../Axios/Axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

const WebHostingBhopal = () => {

  const { id } = useParams();
  // console.log(id);

  const [detservice, setdetservice] = useState([]);

  const getServiceDet = () => {
    axios.get(`/API/services.php?id=${id}`)
      .then((data) => {
        // console.log(data);
        setdetservice(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getServiceDet();
  }, [id]);

  const cleanDescription = (description) => {
    const sanitizedHtml = DOMPurify.sanitize(description);
    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitizedHtml, 'text/html');
    return doc.body.textContent || ''; // Extract clean text
  };

  const [content, setContent] = useState("");

  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      const apiData = `
      <p><em><strong>Website Design &amp; PHP MySQL Software Package</strong></em></p>
      <p><img alt="notepad++" src="http://dstarena.com/download/image/ARROW.GIF" /><em><strong>&nbsp;Notepad++</strong></em>&nbsp; - <a href="http://dstarena.com/download/notepad">Click here Download</a></p>
      <p><img alt="Wamp Server" src="http://dstarena.com/download/image/ARROW.GIF" /><em><strong>Wamp Server</strong></em>&nbsp; - <a href="http://dstarena.com/download/wampserver">Click here Download</a></p>
      <p><img alt="FTP Software" src="http://dstarena.com/download/image/ARROW.GIF" /><em><strong>FTP Software</strong></em>&nbsp; - <a href="http://dstarena.com/download/ftp">Click here Download</a></p>
      <p><img alt="Cute FTP" src="http://dstarena.com/download/image/ARROW.GIF" /><em><strong>Cute Ftp</strong></em>&nbsp; - <a href="http://dstarena.com/download/cuteftp">Click here Download</a></p>
      <p><img alt="Filezilla" src="http://dstarena.com/download/image/ARROW.GIF" /><em><strong>Filezilla</strong></em>&nbsp; - <a href="http://dstarena.com/download/filezilla">Click here Download</a></p>
      <p><img alt="Winrar" src="http://dstarena.com/download/image/ARROW.GIF" /><em><strong>Winrar</strong></em>&nbsp; - <a href="http://dstarena.com/download/winrar">Click here Download</a></p>
      <p><img alt="Logo Creator" src="http://dstarena.com/download/image/ARROW.GIF" /><em><strong>Logo Creator</strong></em>&nbsp; - <a href="http://dstarena.com/download/logo">Click here Download</a></p>
      <p><img alt="Team Viewer" src="http://dstarena.com/download/image/ARROW.GIF" /><em><strong>Team Viewer</strong></em>&nbsp; - <a href="http://dstarena.com/download/teamviewer">Click here Download</a></p>
      <p><img alt="Firefox" src="http://dstarena.com/download/image/ARROW.GIF" /><em><strong>Firefox</strong></em>&nbsp; - <a href="http://dstarena.com/download/firefox">Click here Download</a></p>
      <p><img alt="Xamp Server" src="http://dstarena.com/download/image/ARROW.GIF" /><em><strong>Xamp Server</strong></em>&nbsp; - <a href="http://dstarena.com/download/xamp">Click here Download</a></p>`;
      
      setContent(apiData);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row justify-center py-10 px-4 md:px-20 lg:px-32 gap-10">
      {/* Left Section */}
      {detservice.map((elem, index) => (
        <div key={index} className="w-full md:w-2/3 lg:w-3/5 bg-white shadow-xl p-8 rounded-xl">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">{elem.category}</h1>
          <p className="text-gray-600 leading-7 mb-4 text-justify">
           
           {elem.id==='5'?<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}  />:` ${cleanDescription(elem.description)}`}
          </p>
              
              </div>
      ))}
       {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} /> */}

      {/* Right Section - Contact Card */}
      <div className="w-full md:w-1/3 lg:w-[30%] mt-10 md:mt-0">
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-orange-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
          <div className='border-b-2'>
            <p className="text-gray-600 mb-2"><i className="fas fa-phone-alt text-orange-500 mr-2 px-1 py-2"></i> +91 9993897203</p>
          </div>
          <div className='border-b-2'>
            <p className="text-gray-600 mb-2"><i className="fas fa-envelope text-orange-500 mr-2 px-1 py-2"></i>dstinfo@gmail.com</p>
          </div>
          <div className='border-b-2'>
            <p className="text-gray-600 mb-4"><i className="fas fa-map-marker-alt text-orange-500 mr-2 px-1 py-2"></i>121 Malviya Nagar Bhopal, India</p>
          </div>
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all">Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default WebHostingBhopal;


