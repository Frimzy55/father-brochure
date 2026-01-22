import React from "react";
import { fatherData } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import motherPhoto from '../images/mother.jpeg';

export default function InsideRight() {
  // Sample tribute text if none provided
  const defaultTribute = `John was a man of unwavering integrity, boundless compassion, and quiet strength. For 45 years, he was the loving husband to Margaret, a devoted father to his four children, and a pillar of the community. His gentle spirit touched everyone he met, and his wisdom guided many through life's challenges. He found joy in simple pleasures - tending his garden, reading by the fireplace, and sharing stories with family around the dinner table. Though our hearts ache with his absence, we find comfort in the legacy of love and kindness he leaves behind.`;

  // Sample quotes about the father
  const quotes = [
    "A life well lived is the most beautiful work of art.",
    "What we once enjoyed and deeply loved we can never lose, for all that we love deeply becomes part of us.",
    "Those we love don't go away, they walk beside us every day."
  ];

  return (
    <div className="page inside-right">
      <div className="container-fluid h-100 py-4">
        <div className="row h-100 g-4">
          
          {/* Left Column - Tribute Section */}
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
                    In Loving Memory
                  </h2>
                  <div className="border-top border-secondary flex-grow-1"></div>
                </div>
                <p className="text-center text-muted mb-0">
                  <i className="fas fa-quote-left me-2"></i>
                  A tribute to {fatherData.name?.split(" ")[0] || "our beloved"}
                  <i className="fas fa-quote-right ms-2"></i>
                </p>
              </div>
              
              {/* Main Tribute Text */}
              <div className="tribute-text flex-grow-1 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 p-md-5">
                    <div className="text-wrapper">
                      <p className="lead mb-4" style={{
                        fontFamily: "'Crimson Text', serif",
                        fontSize: "1.25rem",
                        lineHeight: "1.8",
                        textAlign: "justify"
                      }}>
                        {fatherData.tribute || defaultTribute}
                      </p>
                      
                      {/* Signature if available */}
                      {fatherData.tributeAuthor && (
                        <div className="text-end mt-4 pt-3 border-top">
                          <p className="mb-0 fst-italic">
                            — {fatherData.tributeAuthor}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quotes Section */}
              <div className="mt-auto">
                <h4 className="text-secondary mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "500"
                }}>
                  <i className="fas fa-star-of-life me-2"></i>
                  Words of Comfort
                </h4>
                <div className="row g-3">
                  {quotes.map((quote, index) => (
                    <div key={index} className="col-md-4">
                      <div className="quote-card p-3 h-100 border-start border-3 border-warning bg-light">
                        <p className="mb-2 small" style={{
                          fontFamily: "'Crimson Text', serif",
                          fontStyle: "italic"
                        }}>
                          {quote}
                        </p>
                        <p className="text-muted text-end mb-0 small">
                          — {index === 0 ? "Helen Keller" : index === 1 ? "Helen Keller" : "Unknown"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Mother Section */}
          <div className="col-lg-4">
            <div className="h-100 d-flex flex-column">
              {/* Mother Photo with Elegant Frame */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="border-top border-secondary flex-grow-1"></div>
                  <h3 className="mx-3 mb-0 text-center" style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#2c3e50",
                    fontWeight: "500"
                  }}>
                    Loving Wife
                  </h3>
                  <div className="border-top border-secondary flex-grow-1"></div>
                </div>
                
                <div className="mother-photo-container position-relative mx-auto">
                  <div className="photo-frame">
                    <img src={motherPhoto} alt="mother" className="main-photo img-fluid rounded-circle" />
                  </div>
                  
                  {/* Decorative corners */}
                  <div className="corner-decoration corner-tl"></div>
                  <div className="corner-decoration corner-tr"></div>
                  <div className="corner-decoration corner-bl"></div>
                  <div className="corner-decoration corner-br"></div>
                </div>
                
                {/* Mother's Name and Info */}
                <div className="text-center mt-3">
                  <h4 className="mb-1" style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#2c3e50"
                  }}>
                    {fatherData.spouseName || "Margaret Smith"}
                  </h4>
                  {fatherData.marriageYears && (
                    <p className="text-muted mb-2">
                      <i className="fas fa-heart me-1 text-danger"></i>
                      Married for {fatherData.marriageYears} years
                    </p>
                  )}
                </div>
              </div>
              
              {/* Marriage Timeline */}
              <div className="mb-4">
                <h5 className="text-secondary mb-3">
                  <i className="fas fa-timeline me-2"></i>
                  Journey Together
                </h5>
                <div className="timeline-simple">
                  <div className="timeline-item-simple">
                    <div className="timeline-marker bg-primary"></div>
                    <div className="timeline-content">
                      <h6 className="mb-1">First Meeting</h6>
                      <p className="text-muted small mb-0">Spring 1975</p>
                    </div>
                  </div>
                  <div className="timeline-item-simple">
                    <div className="timeline-marker bg-success"></div>
                    <div className="timeline-content">
                      <h6 className="mb-1">Wedding Day</h6>
                      <p className="text-muted small mb-0">June 12, 1978</p>
                    </div>
                  </div>
                  <div className="timeline-item-simple">
                    <div className="timeline-marker bg-info"></div>
                    <div className="timeline-content">
                      <h6 className="mb-1">First Child</h6>
                      <p className="text-muted small mb-0">March 1980</p>
                    </div>
                  </div>
                  <div className="timeline-item-simple">
                    <div className="timeline-marker bg-warning"></div>
                    <div className="timeline-content">
                      <h6 className="mb-1">Golden Years</h6>
                      <p className="text-muted small mb-0">45 years together</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Favorite Memories */}
              <div className="mt-auto">
                <h5 className="text-secondary mb-3">
                  <i className="fas fa-memory me-2"></i>
                  Cherished Memories
                </h5>
                <div className="list-group list-group-flush">
                  <div className="list-group-item border-0 py-2 bg-transparent">
                    <i className="fas fa-utensils text-primary me-2"></i>
                    <span>Sunday family dinners</span>
                  </div>
                  <div className="list-group-item border-0 py-2 bg-transparent">
                    <i className="fas fa-tree text-success me-2"></i>
                    <span>Annual Christmas tree decorating</span>
                  </div>
                  <div className="list-group-item border-0 py-2 bg-transparent">
                    <i className="fas fa-umbrella-beach text-info me-2"></i>
                    <span>Beach vacations at sunset</span>
                  </div>
                  <div className="list-group-item border-0 py-2 bg-transparent">
                    <i className="fas fa-book-reader text-warning me-2"></i>
                    <span>Reading together by the fireplace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        .inside-right {
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .tribute-text {
          position: relative;
        }
        
        .tribute-text .card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
        }
        
        .text-wrapper {
          position: relative;
        }
        
        .text-wrapper:before {
          content: "❝";
          position: absolute;
          top: -20px;
          left: -10px;
          font-size: 4rem;
          color: rgba(44, 62, 80, 0.1);
          font-family: 'Times New Roman', serif;
        }
        
        .mother-photo-container {
          max-width: 300px;
          position: relative;
        }
        
        .photo-frame {
          padding: 10px;
          background: linear-gradient(45deg, #8a7967, #c9b8a8);
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .mother-photo {
          width: 100%;
          height: auto;
          border: 3px solid white;
        }
        
        .corner-decoration {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #8a7967;
        }
        
        .corner-tl {
          top: 0;
          left: 0;
          border-right: none;
          border-bottom: none;
        }
        
        .corner-tr {
          top: 0;
          right: 0;
          border-left: none;
          border-bottom: none;
        }
        
        .corner-bl {
          bottom: 0;
          left: 0;
          border-right: none;
          border-top: none;
        }
        
        .corner-br {
          bottom: 0;
          right: 0;
          border-left: none;
          border-top: none;
        }
        
        .timeline-simple {
          position: relative;
          padding-left: 20px;
        }
        
        .timeline-simple:before {
          content: '';
          position: absolute;
          left: 7px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #dee2e6;
        }
        
        .timeline-item-simple {
          position: relative;
          margin-bottom: 20px;
          display: flex;
          align-items: flex-start;
        }
        
        .timeline-marker {
          position: absolute;
          left: -20px;
          top: 5px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 0 2px #dee2e6;
          z-index: 1;
        }
        
        .timeline-content {
          padding-left: 10px;
          flex: 1;
        }
        
        .quote-card {
          transition: transform 0.3s ease;
          background: rgba(255, 255, 255, 0.9) !important;
        }
        
        .quote-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        /* Add a subtle pattern to the background */
        .inside-right:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 0;
          opacity: 0.3;
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .tribute-text .card-body {
            padding: 2rem !important;
          }
          
          .text-wrapper:before {
            font-size: 3rem;
            left: 0;
          }
        }
        
        @media (max-width: 768px) {
          .mother-photo-container {
            max-width: 250px;
          }
          
          .quote-card {
            margin-bottom: 1rem;
          }
        }
        
        @media (max-width: 576px) {
          .tribute-text .card-body {
            padding: 1.5rem !important;
          }
          
          .text-wrapper:before {
            display: none;
          }
        }
      `}</style>
      
      {/* Fonts and Icons */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Crimson+Text&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </div>
  );
}