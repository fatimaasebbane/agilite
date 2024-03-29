import React from "react";
import Footer from "../components/footer";
import Header from "../components/navbar";

const Submission = () => {
  const backgroundImageUrl =
    "https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/ARTIFICIAL-INTELLIGENCE.jpg";

  return (
    <>
      <Header />
      <br />
      <br />
      <div className="slider-area2">
        <div
          className="slider-area position-relative"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundRepeat: "no-repeat",
            color: "white",
            backgroundSize: "cover",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-9 col-sm-10">
                <div className="hero__caption2">
                  <h1 className="registration">Submission</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-between" style={{ margin: "20px" ,marginTop:"100px" }}>
          <div className="col-md-7">
            <h1 style={{ marginBottom: "37px", fontFamily: "Work Sans" }}>
              Submission :
            </h1>
            <p>
              Authors are invited to submit their papers of 4 to 6 pages
              including results, figures and references.
            </p>
            <p>
              Papers for ISSAI 2023 should only be submitted via the Online
              EasyChair Link below as PDF files on{" "}
              <a href="/Regstration">
                <span
                  style={{
                    color: "#CC2E2E",
                    fontFamily: "var( --e-global-typography-text-font-family ), Sans-serif",
                    fontSize: "15px",
                    fontWeight: "var( --e-global-typography-text-font-weight )",
                  }}
                >
                  the Registration Page{" "}
                </span>
              </a>
            </p>

            <ul>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon">
                  <i
                    aria-hidden="true"
                    className="fas fa-dot-circle"
                    style={{ color: "rgb(46, 14, 140)" }}
                  ></i>
                </span>
                <span className="elementor-icon-list-text">
                  Submissions must be written in English.
                </span>
              </li>
              <li class="elementor-icon-list-item">
                    <span class="elementor-icon-list-icon">
                        <i aria-hidden="true" class="fas fa-dot-circle" style={{ color: "rgb(46, 14, 140)" }}></i>						</span>
                    <span class="elementor-icon-list-text">Submitted papers must be unpublished and not considered elsewhere for publication</span>
                </li>

                <li class="elementor-icon-list-item">
                    <span class="elementor-icon-list-icon">
                        <i aria-hidden="true" class="fas fa-dot-circle" style={{ color: "rgb(46, 14, 140)" }}></i>						</span>
                    <span class="elementor-icon-list-text"> Only electronic submissions in PDF format will be considered.</span>
                </li>
                <li class="elementor-icon-list-item">
                    <span class="elementor-icon-list-icon">
                        <i aria-hidden="true" class="fas fa-dot-circle" style={{ color: "rgb(46, 14, 140)" }}></i>						</span>
                    <span class="elementor-icon-list-text">Submissions must be written in English.</span>
                </li>

                <li class="elementor-icon-list-item">
                <span class="elementor-icon-list-text">Papers must be 4-6 pages, including references, figures and tables, according to <a href="https://www.ieee.org/conferences/publishing/templates.html"><span style={{color: "#CC2E2E" , fontFamily: "var( --e-global-typography-text-font-family ), Sans-serif", fontSize: "15px", fontWeight: "var( --e-global-typography-text-font-weight )"}}>the IEEE format </span></a></span>

                </li>
                                    
                                    
                <li class="elementor-icon-list-item">
                    <span class="elementor-icon-list-icon">
                        <i aria-hidden="true" class="fas fa-dot-circle" style={{ color: "rgb(46, 14, 140)" }}></i>						</span>
                    <span class="elementor-icon-list-text">Camera-Ready Copies that do not follow the IEEE format or have wrong page numberings will not be included in the conference proceedings.</span>
                </li>


                <li class="elementor-icon-list-item">
                    <span class="elementor-icon-list-icon">
                        <i aria-hidden="true" class="fas fa-dot-circle" style={{ color: "rgb(46, 14, 140)" }}></i>						</span>
                    <span class="elementor-icon-list-text"> Papers can only be included if at least one author has registered with the conference and is willing to present.</span>
                </li>
            </ul>
          </div>

          <div className="col-md-5">
            {/* Image à droite */}
            <img
              src="https://i.pinimg.com/564x/75/5b/c2/755bc210b189b6c70b1b74e6f439a1c2.jpg"
              alt="Right Image"
              style={{ width: "100%",height:"600px", borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>
<br/>
<br/>
<br/>
<br/>
      <Footer />
    </>
  );
};

export default Submission;
