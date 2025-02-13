import React from "react";

export const Galary = () => {
  return (
    <div
      className="bg-blend-multiply bg-fixed"
      style={{
        backgroundImage:
          "url(" +
          "https://i.ibb.co/cx11NDW/white-headphones-with-copy-space.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container  py-8 lg:py-16 mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section className="text-center">
          <h2 className="text-left text-3xl font-bold uppercase">
            Our Collections
          </h2>
          <div className="divider mb-20 h-1 w-1/12  bg-primary"></div>

          <div className="ImageContainer">
  <div className="ImageCard">
    <img src=" https://i.ibb.co/KrdDP2D/1.jpg"/>
    <div className="card__head">Wireless headphones</div>
  </div>
  <div className="ImageCard">
    <img src="https://i.ibb.co/XWKZV4w/2.jpg"/>
    <div className="card__head">Noise-canceling headphone</div>
  </div>
  <div className="ImageCard">
    <img src="https://i.ibb.co/VxxNzZ1/3.jpg"/>
    <div className="card__head">Over-ear headphones</div>
  </div>
  <div className="ImageCard">
    <img src="https://i.ibb.co/MpjmPwp/4.jpg"/>
    <div className="card__head">In-ear headphone</div>
  </div>
  <div className="ImageCard">
    <img src="https://i.ibb.co/NtWQ2xn/yogendra-singh-fr6-Sj-LC7o1-Y-unsplash.jpg"/>
    <div className="card__head">On-ear headphones</div>
  </div>
</div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
    </div>
  );
};
