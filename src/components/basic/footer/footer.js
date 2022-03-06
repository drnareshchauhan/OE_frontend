import React from "react";
import "./footer.css";
// const styles = {
//   textAlign: "center",
//   alignItems: "center",
// };

const Footer = () => {
  return (
    // <footer id="footer" style={styles}>
    //   <div>
    //     <p>
    //       <a href="https://github.com/drnareshchauhan" className="text-muted">
    //         <GitHubIcon />
    //         drnareshchauhan
    //       </a>
    //     </p>
    //   </div>
    // </footer>
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Follow-us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.facebook.com/Community-Medicine-Surat-665642946808350/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook fontawsome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://github.com/drnareshchauhan"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github fontawsome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.youtube.com/channel/UChBDRVH-Wnt_nQLMAjIb2SQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube fontawsome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter fontawsome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr id="line" />
              <div className="mt-5">
                <a
                  href="https://drnareshchauhan.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="main-hero-para text-center w-100">
                    ©drnareshchauhan.in
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
