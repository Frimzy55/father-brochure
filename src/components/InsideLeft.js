import React from "react";
import { fatherData } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";

// Import child photos - adjust paths as needed
import child1Photo from '../images/father.png';
import child2Photo from '../images/father.png';
import child3Photo from '../images/father.png';
import child4Photo from '../images/father.png';
// Add more imports as needed

export default function InsideLeft() {
  const serviceOrder = [
    { time: "10:00 AM", event: "Opening Prayer", icon: "fas fa-hands-praying" },
    { time: "10:05 AM", event: "Hymn: Amazing Grace", icon: "fas fa-music" },
    { time: "10:15 AM", event: "Scripture Reading", icon: "fas fa-book-bible" },
    { time: "10:25 AM", event: "Tributes & Eulogies", icon: "fas fa-microphone" },
    { time: "10:45 AM", event: "Sermon & Reflection", icon: "fas fa-church" },
    { time: "11:05 AM", event: "Musical Interlude", icon: "fas fa-play" },
    { time: "11:10 AM", event: "Offertory", icon: "fas fa-hand-holding-heart" },
    { time: "11:20 AM", event: "Closing Prayer", icon: "fas fa-cross" }
  ];

  // Array of imported child photos (or fallback to data if provided)
  const childPhotos = [
    child1Photo,
    child2Photo,
    child3Photo,
    child4Photo
    // Add more as needed
  ];

  // Helper function to get service description
  const getServiceDescription = (eventName) => {
    const descriptions = {
      "Opening Prayer": "Led by Rev. Wilson",
      "Hymn: Amazing Grace": "Congregational singing",
      "Scripture Reading": "Psalm 23 & John 14:1-6",
      "Tributes & Eulogies": "Family and friends share memories",
      "Sermon & Reflection": "Message of hope and comfort",
      "Musical Interlude": "Piano solo by Sarah Johnson",
      "Offertory": "For the charity of choice",
      "Closing Prayer": "Final blessings"
    };
    return descriptions[eventName] || "";
  };

  // Helper function to get child names
  const getChildName = (index) => {
    const childNames = ["Michael", "Sarah", "David", "Jessica", "Robert", "Emily"];
    return childNames[index] || `Child ${index + 1}`;
  };

  return (
    <div className="page inside-left">
      <div className="container-fluid h-100 py-4">
        <div className="row h-100">
          
          {/* Left Column - Order of Service */}
          <div className="col-md-7 pe-md-4 border-end border-light-subtle">
            <div className="mb-4">
              {/* Header with decorative element */}
              <div className="d-flex align-items-center mb-3">
                <div className="border-top border-secondary flex-grow-1"></div>
                <h2 className="mx-3 mb-0 text-center" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#2c3e50",
                  fontWeight: "500"
                }}>
                  Order of Service
                </h2>
                <div className="border-top border-secondary flex-grow-1"></div>
              </div>
              
              {/* Time and Location */}
              <div className="text-center mb-4">
                <p className="mb-1 text-muted">
                  <i className="fas fa-clock me-2"></i>
                  {fatherData.serviceDate || "Saturday, December 30, 2023"} at {fatherData.serviceTime || "10:00 AM"}
                </p>
                <p className="mb-0 text-muted">
                  <i className="fas fa-location-dot me-2"></i>
                  {fatherData.serviceLocation || "St. Mary's Cathedral, 123 Main Street"}
                </p>
              </div>
              
              {/* Order of Service Timeline */}
              <div className="service-timeline">
                {serviceOrder.map((item, index) => (
                  <div key={index} className="timeline-item d-flex mb-3">
                    <div className="timeline-time pe-3 text-end" style={{width: "100px"}}>
                      <span className="text-dark fw-medium">{item.time}</span>
                    </div>
                    <div className="timeline-content ps-3 position-relative flex-grow-1">
                      {/* Timeline connector */}
                      <div className="timeline-connector position-absolute start-0 top-0 h-100 d-flex align-items-center">
                        <div className="timeline-dot bg-secondary rounded-circle" style={{width: "12px", height: "12px"}}></div>
                        <div className="timeline-line bg-secondary ms-1" style={{width: "2px", height: "100%"}}></div>
                      </div>
                      
                      <div className="ms-4">
                        <div className="d-flex align-items-center mb-1">
                          <i className={`${item.icon} me-2 text-secondary`}></i>
                          <h5 className="mb-0" style={{fontFamily: "'Crimson Text', serif"}}>
                            {item.event}
                          </h5>
                        </div>
                        <p className="text-muted small mb-0 ps-4">
                          {getServiceDescription(item.event)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Officiant Section */}
            <div className="mt-4 pt-3 border-top border-light-subtle">
              <h5 className="text-secondary mb-2">
                <i className="fas fa-user-tie me-2"></i>
                Officiant
              </h5>
              <p className="mb-0" style={{fontFamily: "'Crimson Text', serif"}}>
                {fatherData.officiant || "Rev. Dr. James Wilson"}
              </p>
            </div>
          </div>
          
          {/* Right Column - Children Section */}
          <div className="col-md-5 ps-md-4 d-flex flex-column">
            <div className="mb-4">
              {/* Header with decorative element */}
              <div className="d-flex align-items-center mb-3">
                <div className="border-top border-secondary flex-grow-1"></div>
                <h3 className="mx-3 mb-0 text-center" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#2c3e50",
                  fontWeight: "500"
                }}>
                  Beloved Children
                </h3>
                <div className="border-top border-secondary flex-grow-1"></div>
              </div>
              
              {/* Children photos grid - using imported photos */}
              <div className="row g-3 children-photos">
                {childPhotos.map((photo, index) => (
                  <div key={index} className="col-6 col-sm-4">
                    <div className="child-photo-container position-relative">
                      <img 
                        src={photo} 
                        alt={`Child ${index+1}`} 
                        className="img-fluid rounded-circle border border-3 border-light shadow-sm"
                        style={{width: "100%", aspectRatio: "1", objectFit: "cover"}}
                      />
                      {/* Child name overlay */}
                      <div className="child-name-overlay position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white text-center py-1 rounded-bottom">
                        <small>{getChildName(index)}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Children names list */}
              <div className="mt-3">
                <ul className="list-unstyled">
                  {fatherData.childrenNames && fatherData.childrenNames.map((name, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      <i className="fas fa-heart text-secondary me-2" style={{fontSize: "0.8rem"}}></i>
                      <span style={{fontFamily: "'Crimson Text', serif"}}>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Spouse Section if available */}
            {fatherData.spouseName && (
              <div className="mt-auto pt-4 border-top border-light-subtle">
                <h5 className="text-secondary mb-2">
                  <i className="fas fa-ring me-2"></i>
                  Loving Spouse
                </h5>
                <p className="mb-0 fs-5" style={{fontFamily: "'Crimson Text', serif"}}>
                  {fatherData.spouseName}
                </p>
                {fatherData.marriageYears && (
                  <p className="text-muted small mb-0">
                    Married for {fatherData.marriageYears} years
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        .inside-left {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .service-timeline {
          max-height: 400px;
          overflow-y: auto;
          padding-right: 10px;
        }
        
        /* Custom scrollbar for timeline */
        .service-timeline::-webkit-scrollbar {
          width: 4px;
        }
        
        .service-timeline::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .service-timeline::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }
        
        .service-timeline::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
        
        .timeline-connector {
          left: 6px;
        }
        
        .child-photo-container {
          transition: transform 0.3s ease;
        }
        
        .child-photo-container:hover {
          transform: translateY(-3px);
        }
        
        .child-photo-container:hover .child-name-overlay {
          background-color: rgba(44, 62, 80, 0.9);
        }
        
        /* Add a subtle pattern to the background */
        .inside-left:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
          z-index: 0;
          opacity: 0.5;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .border-end {
            border-right: none !important;
            border-bottom: 1px solid #dee2e6;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
          }
          
          .service-timeline {
            max-height: none;
          }
          
          .timeline-time {
            width: 80px !important;
          }
        }
      `}</style>
      
      {/* Fonts and Icons */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Crimson+Text&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </div>
  );
}