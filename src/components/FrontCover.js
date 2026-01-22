import React from "react";
import { fatherData } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import fatherPhoto from '../images/father.png';

export default function FrontCover() {
  return (
    <div className="page front-cover d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            
            {/* Decorative top border */}
            <div className="mb-4">
              <div className="d-flex align-items-center justify-content-center">
                <div className="border-top border-light mx-3" style={{width: "50px"}}></div>
                <i className="fas fa-cross text-light mx-2"></i>
                <div className="border-top border-light mx-3" style={{width: "50px"}}></div>
              </div>
            </div>
            
            {/* Main Photo with elegant frame */}
            <div className="mb-4">
              <div className="photo-frame mx-auto d-flex align-items-center justify-content-center">
                
             <img src={fatherPhoto} alt="Father" className="main-photo img-fluid rounded-circle" />
              </div>
            </div>
            
            {/* Name with elegant typography */}
            <h1 className="display-4 text-white mb-2" style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "400",
              letterSpacing: "1px"
            }}>
              {fatherData.name}
            </h1>
            
            {/* Dates with subtle styling */}
            <div className="mb-3">
              <p className="h5 text-light mb-0" style={{
                fontFamily: "'Crimson Text', serif",
                letterSpacing: "2px"
              }}>
                {fatherData.birth} – {fatherData.death}
              </p>
            </div>
            
            {/* Tagline with decorative elements */}
            <div className="my-4">
              <div className="d-flex align-items-center justify-content-center">
                <div className="border-top border-light mx-3" style={{width: "30px"}}></div>
                <p className="tagline h4 text-light mb-0 mx-3" style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "2.2rem"
                }}>
                  In Loving Memory
                </p>
                <div className="border-top border-light mx-3" style={{width: "30px"}}></div>
              </div>
            </div>
            
            {/* Bottom decorative element */}
            <div className="mt-5 pt-3">
              <p className="text-light small" style={{letterSpacing: "1px"}}>
                Forever in our hearts
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Add Google Fonts and custom styles */}
      <style jsx>{`
        .front-cover {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                      url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        /* Add subtle overlay pattern */
        .front-cover:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 0;
        }
        
        .photo-frame {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8a7967, #c9b8a8);
          padding: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          position: relative;
        }
        
        .photo-frame:after {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          z-index: -1;
        }
        
        .main-photo {
          border: 3px solid white;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .photo-frame, .main-photo {
            width: 180px !important;
            height: 180px !important;
          }
          
          h1.display-4 {
            font-size: 2.5rem;
          }
          
          .tagline {
            font-size: 1.8rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .photo-frame, .main-photo {
            width: 150px !important;
            height: 150px !important;
          }
          
          h1.display-4 {
            font-size: 2rem;
          }
          
          .tagline {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
      
      {/* Link to Google Fonts and Font Awesome for icons */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Crimson+Text&family=Great+Vibes&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    </div>
  );
}