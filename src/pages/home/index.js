import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          {/* Background Image Section */}
          <div
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{
              backgroundImage: `url(${introdata.your_img_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
            }}
          ></div>

          {/* Intro Text Section */}
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto text-center px-4">
                {/* Title and Typewriter Effect */}
                <h2 className="mb-4 display-4 text-dark">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-4 text-primary">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-4 lead">{introdata.description}</p>

                {/* Action Buttons */}
                <div className="intro_btn-action pb-5 d-flex flex-column flex-md-row justify-content-center gap-3">
                  <Link to="/portfolio" className="text-decoration-none">
                    <button className="btn btn-primary px-4 py-2 rounded-pill shadow">
                      My Portfolio
                    </button>
                  </Link>
                  <Link to="/contact" className="text-decoration-none">
                    <button className="btn btn-outline-primary px-4 py-2 rounded-pill shadow">
                      Contact Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="logo-container text-center mt-5">
          <img
            src="https://via.placeholder.com/150"
            alt="Company Logo"
            className="logo-image img-fluid"
          />
        </div>
      </section>
    </HelmetProvider>
  );
};
