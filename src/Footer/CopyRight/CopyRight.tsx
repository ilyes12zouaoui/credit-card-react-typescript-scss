import React from "react";
import facebookIcon from "./icons/facebook.png";
import githubIcon from "./icons/github.png";
import linkedInIcon from "./icons/linkedin.png";
import googlePlusIcon from "./icons/google-plus.png";
import youtubeIcon from "./icons/youtube.png";
import Modal from "react-responsive-modal";
import "./CopyRight.scss";

export default () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Modal
        open={modalShow}
        onClose={() => {
          setModalShow(false);
        }}
        center
      >
        <div
          style={{
            fontFamily: "sans serif",
            fontSize: "20px",
            margin: "40px"
          }}
        >
          email address : ilyes.zouaoui@esprit.tn
        </div>
      </Modal>

      <footer
        style={{
          minHeight: "50px",
          backgroundColor: "#1c2331",

          bottom: 0,
          zIndex: 2,
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <div>
          <p
            className="footer-animation"
            style={{
              fontFamily: "sans serif"
              // color: "white",
            }}
          >
            © 2019 Copyright : made by lass 💖
          </p>
        </div>
        <div>
          <div className="text-center text-md-right">
            <ul
              style={{
                margin: 0,
                listStyle: "none",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "200px"
              }}
            >
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/ilyes.zouaoui11"
                  target="_blank"
                >
                  <img
                    src={facebookIcon}
                    style={{ width: "35px", height: "35px" }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/ilyes-zouaoui"
                  target="_blank"
                >
                  <img
                    src={linkedInIcon}
                    style={{ width: "35px", height: "35px" }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <img
                  onClick={() => setModalShow(true)}
                  src={googlePlusIcon}
                  style={{ width: "35px", height: "35px", cursor: "pointer" }}
                />
              </li>
              <li className="list-inline-item">
                <a
                  href="https://github.com/ilyes12zouaoui?tab=repositories"
                  target="_blank"
                >
                  <img
                    src={githubIcon}
                    style={{ width: "35px", height: "35px" }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.youtube.com/channel/UCmHLMyg-aLEpteU3jmClq8g"
                  target="_blank"
                >
                  <img
                    src={youtubeIcon}
                    style={{ width: "37px", height: "37px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
