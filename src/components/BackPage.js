import React from "react";
import { fatherData } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BackPage() {
  // Default acknowledgements if none provided
  const defaultAcknowledgements = `The family of ${fatherData.name || "our beloved"} wishes to express our heartfelt gratitude for your presence, prayers, and comforting words during this difficult time. Your love and support have been a source of strength to us all. We are deeply appreciative of the kindness shown through flowers, cards, and memorial contributions. Special thanks to the clergy, funeral home staff, pallbearers, and all who have helped honor his memory.`;

  // Funeral details
  const funeralDetails = [
    { 
      title: "Funeral Service", 
      details: fatherData.serviceLocation || "St. Mary's Cathedral", 
      time: fatherData.serviceTime || "10:00 AM",
      date: fatherData.serviceDate || "Saturday, December 30, 2023",
      icon: "fas fa-church"
    },
    { 
      title: "Burial Service", 
      details: fatherData.cemetery || "Memorial Gardens Cemetery", 
      time: "Following funeral service",
      date: "",
      icon: "fas fa-cross"
    },
    { 
      title: "Reception", 
      details: fatherData.receptionLocation || "Community Hall", 
      time: "12:30 PM",
      date: "",
      icon: "fas fa-utensils"
    }
  ];

  // Pallbearers
  const pallbearers = [
    "Michael Smith", "David Johnson", "Robert Williams", 
    "James Brown", "Thomas Davis", "Christopher Miller"
  ];

  // Charity information
  const charities = [
    { name: "American Heart Association", description: "In lieu of flowers" },
    { name: "Local Food Bank", description: "Memorial donations welcome" }
  ];

  return (
    <div className="page back-page">
      <div className="container-fluid h-100 py-4">
        <div className="row h-100">
          
          {/* Main Content Column */}
          <div className="col-lg-8">
            <div className="h-100 d-flex flex-column">
              
              {/* Header with decorative element */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="border-top border-secondary flex-grow-1"></div>
                  <h2 className="mx-3 mb-0 text-center" style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#2c3e50",
                    fontWeight: "500",
                    fontSize: "2.5rem"
                  }}>
                    With Heartfelt Gratitude
                  </h2>
                  <div className="border-top border-secondary flex-grow-1"></div>
                </div>
                <p className="text-center text-muted">
                  <i className="fas fa-hands-praying me-2"></i>
                  Acknowledgements from the family
                </p>
              </div>
              
              {/* Acknowledgements Text */}
              <div className="acknowledgements-text mb-4 flex-grow-1">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 p-md-5">
                    <div className="text-wrapper">
                      <p className="lead mb-0" style={{
                        fontFamily: "'Crimson Text', serif",
                        fontSize: "1.25rem",
                        lineHeight: "1.8",
                        textAlign: "justify"
                      }}>
                        {fatherData.acknowledgements || defaultAcknowledgements}
                      </p>
                      
                      {/* Closing quote */}
                      <div className="text-center mt-4 pt-3 border-top">
                        <p className="fst-italic text-muted mb-0">
                          "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow."
                        </p>
                        <p className="small text-muted mt-1">— Melody Beattie</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pallbearers Section */}
              <div className="mt-4">
                <h4 className="text-secondary mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "500"
                }}>
                  <i className="fas fa-hands-holding me-2"></i>
                  Honorary Pallbearers
                </h4>
                <div className="row">
                  {pallbearers.map((bearer, index) => (
                    <div key={index} className="col-6 col-md-4 mb-2">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-user-circle text-muted me-2"></i>
                        <span style={{fontFamily: "'Crimson Text', serif"}}>
                          {bearer}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Side Column - Funeral Details */}
          <div className="col-lg-4">
            <div className="h-100 d-flex flex-column">
              
              {/* Funeral Details Card */}
              <div className="mb-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-dark text-white py-3" style={{
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    <h5 className="mb-0">
                      <i className="fas fa-calendar-alt me-2"></i>
                      Service Details
                    </h5>
                  </div>
                  <div className="card-body p-0">
                    {funeralDetails.map((detail, index) => (
                      <div key={index} className={`p-3 ${index < funeralDetails.length - 1 ? 'border-bottom' : ''}`}>
                        <div className="d-flex align-items-start mb-2">
                          <div className="me-3">
                            <i className={`${detail.icon} text-secondary fs-4`}></i>
                          </div>
                          <div>
                            <h6 className="mb-1" style={{
                              fontFamily: "'Playfair Display', serif",
                              color: "#2c3e50"
                            }}>
                              {detail.title}
                            </h6>
                            <p className="mb-1 small" style={{fontFamily: "'Crimson Text', serif"}}>
                              {detail.details}
                            </p>
                            <div className="d-flex text-muted small">
                              {detail.date && (
                                <span className="me-3">
                                  <i className="far fa-calendar me-1"></i>
                                  {detail.date}
                                </span>
                              )}
                              {detail.time && (
                                <span>
                                  <i className="far fa-clock me-1"></i>
                                  {detail.time}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Charity Information */}
              <div className="mb-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-secondary text-white py-3" style={{
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    <h5 className="mb-0">
                      <i className="fas fa-hand-holding-heart me-2"></i>
                      Memorial Donations
                    </h5>
                  </div>
                  <div className="card-body">
                    {charities.map((charity, index) => (
                      <div key={index} className={`mb-3 ${index < charities.length - 1 ? 'pb-3 border-bottom' : ''}`}>
                        <h6 className="mb-1" style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#2c3e50"
                        }}>
                          {charity.name}
                        </h6>
                        <p className="small text-muted mb-0" style={{fontFamily: "'Crimson Text', serif"}}>
                          {charity.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="mt-auto">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-3">
                    <h6 className="mb-3" style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#2c3e50"
                    }}>
                      <i className="fas fa-address-card me-2"></i>
                      Family Contact
                    </h6>
                    <div className="contact-info">
                      <div className="d-flex align-items-center mb-2">
                        <i className="fas fa-user text-muted me-2" style={{width: "20px"}}></i>
                        <small style={{fontFamily: "'Crimson Text', serif"}}>
                          {fatherData.primaryContact || "The Smith Family"}
                        </small>
                      </div>
                      {fatherData.contactEmail && (
                        <div className="d-flex align-items-center mb-2">
                          <i className="fas fa-envelope text-muted me-2" style={{width: "20px"}}></i>
                          <small style={{fontFamily: "'Crimson Text', serif"}}>
                            {fatherData.contactEmail}
                          </small>
                        </div>
                      )}
                      {fatherData.contactPhone && (
                        <div className="d-flex align-items-center">
                          <i className="fas fa-phone text-muted me-2" style={{width: "20px"}}></i>
                          <small style={{fontFamily: "'Crimson Text', serif"}}>
                            {fatherData.contactPhone}
                          </small>
                        </div>
                      )}
                    </div>
                    
                    {/* Funeral Home Information */}
                    <div className="mt-3 pt-3 border-top">
                      <h6 className="mb-2 small" style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#2c3e50"
                      }}>
                        Funeral Home
                      </h6>
                      <p className="small text-muted mb-0" style={{fontFamily: "'Crimson Text', serif"}}>
                        {fatherData.funeralHome || "Peaceful Rest Funeral Home"}
                        <br />
                        {fatherData.funeralHomeAddress || "123 Memorial Drive, Anytown, USA"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final Footer */}
        <div className="row mt-4 pt-3 border-top">
          <div className="col-12 text-center">
            <div className="d-flex align-items-center justify-content-center mb-2">
              <div className="border-top border-secondary mx-2" style={{width: "50px"}}></div>
              <i className="fas fa-dove text-secondary mx-2"></i>
              <div className="border-top border-secondary mx-2" style={{width: "50px"}}></div>
            </div>
            <p className="text-muted small mb-1">
              {fatherData.name || "John Robert Smith"} • {fatherData.birth || "1950"} – {fatherData.death || "2023"}
            </p>
            <p className="text-muted small mb-0">
              Forever in our hearts • Eternally remembered
            </p>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        .back-page {
          background: linear-gradient(135deg, #f0f2f5 0%, #e1e5eb 100%);
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .acknowledgements-text .card {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(10px);
        }
        
        .text-wrapper {
          position: relative;
        }
        
        .text-wrapper:before {
          content: "✽";
          position: absolute;
          top: -10px;
          left: -10px;
          font-size: 2rem;
          color: rgba(44, 62, 80, 0.1);
          font-family: 'Times New Roman', serif;
        }
        
        .text-wrapper:after {
          content: "✽";
          position: absolute;
          bottom: -10px;
          right: -10px;
          font-size: 2rem;
          color: rgba(44, 62, 80, 0.1);
          font-family: 'Times New Roman', serif;
        }
        
        /* Add a subtle pattern to the background */
        .back-page:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 0;
          opacity: 0.3;
        }
        
        .card-header h5 {
          font-size: 1.1rem;
        }
        
        .contact-info small {
          word-break: break-all;
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .acknowledgements-text .card-body {
            padding: 2rem !important;
          }
          
          .text-wrapper:before,
          .text-wrapper:after {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .back-page .col-lg-4 {
            margin-top: 2rem;
          }
          
          .pallbearers .col-6 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
        
        @media (max-width: 576px) {
          .acknowledgements-text .card-body {
            padding: 1.5rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          .lead {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
      
      {/* Fonts and Icons */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Crimson+Text&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </div>
  );
}