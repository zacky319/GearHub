import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
        <img
  className="card-img img-fluid"
  src="./assets/230228-gaming-accessories-vl-2x1.jpg"
  alt="Card"
  height={500}
  style={{ filter: "brightness(0.5)" }}
/>

          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
            <h5 className="card-title fs-1 text fw-bold">New Season Arrivals</h5>
<p className="card-text fs-5 d-none d-sm-block fw-bold">
  This is a wider card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer.
</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;