import React from "react";
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to GearHub, your ultimate destination for top-tier gaming
          gear and computer accessories. At GearHub, we are passionate
          gamers and tech enthusiasts, just like you. Our mission is to provide
          the gaming community with the highest quality products that elevate
          your gaming experience to new heights. Whether you're a casual gamer
          looking for stylish and affordable peripherals or a hardcore gamer
          seeking the latest and most cutting-edge equipment, we've got you
          covered. With a carefully curated selection of gaming keyboards, mice,
          headsets, monitors, and more, we cater to all levels of gamers and
          budgets. Our team is committed to staying at the forefront of
          technology trends to ensure you have access to the best gear
          available. Join us in our quest to make every gaming session an
          unforgettable adventure- because at GearHub, we believe that
          victory starts with the right equipment.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                 className="card-img-top img-fluid max-height-image"
                src="./assets/The-Cajal-1024x576.jpeg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Key Board</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                 className="card-img-top img-fluid max-height-image"
                src="./assets/images.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Mouse</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                 className="card-img-top img-fluid max-height-image"
                src="./assets/635393-Product-1-I-638234296813078793.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Monitor</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                 className="card-img-top img-fluid max-height-image"
                src="./assets/81fZmxBbQgL.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Laptops</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
