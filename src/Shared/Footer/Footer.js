import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="block lg:flex gap-20 p-8 ">
        <div className="w-full lg:w-3/12 p-4 lg:p-0">
          <img src="https://i.ibb.co/C8xHbgn/logosm.png" alt="Sounds Mart" />
        </div>
        <div className="w-full lg:w-9/12 grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        <div>
          <span className="uppercase text-base-400 font-bold">Services</span>
          <p className="footer-item">Branding</p>
          <p className="footer-item">Design</p>
          <p className="footer-item">Marketing</p>
          <p className="footer-item">Advertisement</p>
        </div>
        <div>
          <span className="uppercase text-base-400 font-bold">Company</span>
          <p className="footer-item">About us</p>
          <p className="footer-item">Contact</p>
          <p className="footer-item">Jobs</p>
          <p className="footer-item">Press kit</p>
        </div>
        <div>
          <span className="uppercase text-base-400 font-bold">Legal</span>
          <p className="footer-item">Terms of use</p>
          <p className="footer-item">Privacy policy</p>
          <p className="footer-item">Cookie policy</p>
        </div>
        <div>
          <span className="uppercase text-base-400 font-bold">
            Social Media
          </span>
          <p className="footer-item">Terms of use</p>
          <p className="footer-item">Privacy policy</p>
          <p className="footer-item">Cookie policy</p>
        </div>
        </div>
      </div>

      <div className="footer footer-center p-3 bg-neutral text-[#838181]">
        <p>Copyright©2023 - All right reserved by Jharna Khatun</p>
      </div>
    </div>
  );
};

export default Footer;
