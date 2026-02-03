import React from "react";
import { fatherData } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";

// Import child photos - adjust paths as needed
import child1Photo from '../images/philimon.jpeg';
import child2Photo from '../images/Beatrice.jpeg';
import child3Photo from '../images/Joseph.jpeg';
//import child4Photo from '../images/father.png';
// Add more imports as needed

export default function InsideLeft() {
  // Part 1: Funeral Service at Chapel/Grounds
  const chapelService = [
    { time: "10:00 AM", event: "Opening Prayer", icon: "fas fa-hands-praying" },
    { time: "10:05 AM", event: "Choruses: Led by the Praise Team", icon: "fas fa-music" },
    { time: '10:15 AM', event: 'C.A.C. Hymn 21: "Thy love has spared our lives today"', icon: "fas fa-music" },
    { time: "10:25 AM", event: "Worship Session", icon: "fas fa-church" },
    { time: "10:35 AM", event: "Scripture Reading", icon: "fas fa-book-bible" },
    { time: "10:45 AM", event: "File Past & Song Ministration", icon: "fas fa-play" },
    { time: "11:00 AM", event: "Biography of the Deceased", icon: "fas fa-user" },
    { time: "11:10 AM", event: "Tributes: Family, Children, In-laws, Church", icon: "fas fa-microphone" },
    { time: "11:30 AM", event: "Thanksgiving Offering", icon: "fas fa-hand-holding-heart" },
    { time: "11:40 AM", event: "Introduction of Dignitaries", icon: "fas fa-user-tie" },
    { time: "11:50 AM", event: "Sermon: Word of Exhortation", icon: "fas fa-church" },
    { time: "12:10 PM", event: "General Offering", icon: "fas fa-hand-holding-dollar" },
    { time: "12:20 PM", event: "Prayer for the Bereaved Family", icon: "fas fa-pray" },
    { time: "12:30 PM", event: "Announcements", icon: "fas fa-bullhorn" },
    { time: "12:40 PM", event: "Closing Prayer & Benediction", icon: "fas fa-cross" }
  ];

  // Part 2: Burial & Committal at Cemetery
  const cemeteryService = [
    { time: "1:00 PM", event: "Procession to the Cemetery", icon: "fas fa-car-side" },
    { time: "1:10 PM", event: "Opening Prayer", icon: "fas fa-hands-praying" },
    { time: "1:15 PM", event: "Lowering of Casket", icon: "fas fa-box" },
    { time: "1:25 PM", event: "Committal", icon: "fas fa-church" },
    { time: "1:35 PM", event: "Laying of Wreaths", icon: "fas fa-flower" },
    { time: "1:45 PM", event: "Vote of Thanks", icon: "fas fa-handshake" },
    { time: "1:55 PM", event: "Closing Prayer", icon: "fas fa-cross" }
  ];

  // Array of imported child photos
  const childPhotos = [
    child1Photo,
    child2Photo,
    child3Photo,
    
    // Add more as needed
  ];

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

              {/* Part 1: Chapel Service */}
              <div className="mb-4">
                <h4 className="text-center mb-3">Part 1: The Funeral Service (At the Chapel/Grounds)</h4>
                <div className="service-timeline">
                  {chapelService.map((item, index) => (
                    <div key={index} className="timeline-item d-flex mb-3">
                      <div className="timeline-time pe-3 text-end" style={{ width: "100px" }}>
                        <span className="text-dark fw-medium">{item.time}</span>
                      </div>
                      <div className="timeline-content ps-3 position-relative flex-grow-1">
                        <div className="timeline-connector position-absolute start-0 top-0 h-100 d-flex align-items-center">
                          <div className="timeline-dot bg-secondary rounded-circle" style={{ width: "12px", height: "12px" }}></div>
                          <div className="timeline-line bg-secondary ms-1" style={{ width: "2px", height: "100%" }}></div>
                        </div>
                        <div className="ms-4">
                          <div className="d-flex align-items-center mb-1">
                            <i className={`${item.icon} me-2 text-secondary`}></i>
                            <h5 className="mb-0">{item.event}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Part 2: Cemetery Service */}
              <div className="mb-4">
                <h4 className="text-center mb-3">Part 2: The Burial & Committal (At the Cemetery)</h4>
                <div className="service-timeline">
                  {cemeteryService.map((item, index) => (
                    <div key={index} className="timeline-item d-flex mb-3">
                      <div className="timeline-time pe-3 text-end" style={{ width: "100px" }}>
                        <span className="text-dark fw-medium">{item.time}</span>
                      </div>
                      <div className="timeline-content ps-3 position-relative flex-grow-1">
                        <div className="timeline-connector position-absolute start-0 top-0 h-100 d-flex align-items-center">
                          <div className="timeline-dot bg-secondary rounded-circle" style={{ width: "12px", height: "12px" }}></div>
                          <div className="timeline-line bg-secondary ms-1" style={{ width: "2px", height: "100%" }}></div>
                        </div>
                        <div className="ms-4">
                          <div className="d-flex align-items-center mb-1">
                            <i className={`${item.icon} me-2 text-secondary`}></i>
                            <h5 className="mb-0">{item.event}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Officiant Section */}
            <div className="mt-4 pt-3 border-top border-light-subtle">
              <h5 className="text-secondary mb-2">
                <i className="fas fa-user-tie me-2"></i>
                Officiant
              </h5>
              <p className="mb-0">{fatherData.officiant || "Rev. Dr. James Wilson"}</p>
            </div>
          </div>

          {/* Right Column - Children Section */}
          <div className="col-md-5 ps-md-4 d-flex flex-column">
            <div className="mb-4">
              <h3 className="text-center mb-3">Beloved Children</h3>

              <div className="row g-3 children-photos">
                {childPhotos.map((photo, index) => (
                  <div key={index} className="col-6 col-sm-4">
                    <div className="child-photo-container position-relative">
                      <img
                        src={photo}
                        alt={`Child ${index + 1}`}
                        className="img-fluid rounded-circle border border-3 border-light shadow-sm"
                        style={{ width: "100%", aspectRatio: "1", objectFit: "cover" }}
                      />
                      <div className="child-name-overlay position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white text-center py-1 rounded-bottom">
                        <small>{getChildName(index)}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <ul className="list-unstyled">
                  {fatherData.childrenNames && fatherData.childrenNames.map((name, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      <i className="fas fa-heart text-secondary me-2" style={{ fontSize: "0.8rem" }}></i>
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Spouse Section */}
            {fatherData.spouseName && (
              <div className="mt-auto pt-4 border-top border-light-subtle">
                <h5 className="text-secondary mb-2">
                  <i className="fas fa-ring me-2"></i>
                  Loving Spouse
                </h5>
                <p className="mb-0 fs-5">{fatherData.spouseName}</p>
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
