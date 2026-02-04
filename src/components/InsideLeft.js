import React from "react";
import { fatherData } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";

export default function InsideLeft() {

  // ================================
  // Part 1: Chapel Service
  // ================================
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

  // ================================
  // Part 2: Cemetery Service
  // ================================
  const cemeteryService = [
    { time: "1:00 PM", event: "Procession to the Cemetery", icon: "fas fa-car-side" },
    { time: "1:10 PM", event: "Opening Prayer", icon: "fas fa-hands-praying" },
    { time: "1:15 PM", event: "Lowering of Casket", icon: "fas fa-box" },
    { time: "1:25 PM", event: "Committal", icon: "fas fa-church" },
    { time: "1:35 PM", event: "Laying of Wreaths", icon: "fas fa-flower" },
    { time: "1:45 PM", event: "Vote of Thanks", icon: "fas fa-handshake" },
    { time: "1:55 PM", event: "Closing Prayer", icon: "fas fa-cross" }
  ];

  return (
    <div className="page inside-left">
      <div className="container-fluid py-4">
        <div className="row g-4">

          {/* ================= LEFT COLUMN ================= */}
          <div className="col-md-7 border-end border-light-subtle">

            {/* Header */}
            <div className="text-center mb-4">
              <p className="mb-1 text-muted">
                <i className="fas fa-clock me-2"></i>
                {fatherData.serviceDate || "Saturday, February 14, 2026"} at {fatherData.serviceTime || "9:00 AM"}
              </p>
              <p className="mb-0 text-muted">
                <i className="fas fa-location-dot me-2"></i>
                {fatherData.serviceLocation || "CAC NO:1 ASAMANKESE"}
              </p>
            </div>

            {/* Chapel Service */}
            <h4 className="section-title">Funeral Service (Chapel/Grounds)</h4>
            <div className="service-timeline mb-4">
              {chapelService.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>

            {/* Cemetery Service */}
            <h4 className="section-title">Burial & Committal (Cemetery)</h4>
            <div className="service-timeline">
              {cemeteryService.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>

            {/* Officiant */}
            <div className="mt-4 pt-3 border-top border-light-subtle text-center">
              <h5 className="text-secondary">
                <i className="fas fa-user-tie me-2"></i>
                Officiating Minister
              </h5>
              <p className="mb-0 fw-semibold">
                {fatherData.officiant || "Rev. Paul Birifo"}
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="col-md-5">

            {/* Children */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body text-center">
                <h4 className="mb-3">Beloved Children</h4>

                <ul className="list-unstyled children-list">
                  {(fatherData.childrenNames || [
                    "Philomon Yeboah",
                    "Beatrice Osafo",
                    "Joseph Frimpong"
                  ]).map((name, index) => (
                    <li key={index}>
                      <i className="fas fa-heart me-2 text-secondary"></i>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Spouse */}
            {fatherData.spouseName && (
              <div className="card shadow-sm border-0 text-center">
                <div className="card-body">
                  <h5 className="text-secondary">
                    <i className="fas fa-ring me-2"></i>
                    Loving Spouse
                  </h5>
                  <p className="fs-4 fw-semibold mb-1">
                    {fatherData.spouseName}
                  </p>
                  {fatherData.marriageYears && (
                    <small className="text-muted">
                      Married for {fatherData.marriageYears} years
                    </small>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* ================= Timeline Component ================= */}
      <style jsx>{`
        .inside-left {
          background: linear-gradient(135deg,#f8f9fa,#eef1f4);
          min-height:100vh;
          font-family:'Crimson Text',serif;
        }

        .section-title{
          text-align:center;
          margin-bottom:20px;
          font-weight:600;
          letter-spacing:0.5px;
        }

        .service-timeline{
          max-height:420px;
          overflow-y:auto;
          padding-right:10px;
        }

        .timeline-item{
          display:flex;
          margin-bottom:14px;
        }

        .timeline-time{
          width:95px;
          text-align:right;
          font-weight:500;
        }

        .timeline-content{
          position:relative;
          flex-grow:1;
          padding-left:20px;
        }

        .timeline-dot{
          width:10px;
          height:10px;
          background:#6c757d;
          border-radius:50%;
          position:absolute;
          left:0;
          top:6px;
        }

        .children-list li{
          padding:8px 0;
          font-size:1.05rem;
          border-bottom:1px solid #eee;
        }

        @media(max-width:768px){
          .border-end{
            border-right:none!important;
            border-bottom:1px solid #dee2e6;
            padding-bottom:2rem;
          }
          .service-timeline{
            max-height:none;
          }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
    </div>
  );
}


/* ================= Timeline Item Component ================= */
function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-time">{item.time}</div>

      <div className="timeline-content">
        <div className="timeline-dot"></div>

        <div className="d-flex align-items-center">
          <i className={`${item.icon} me-2 text-secondary`}></i>
          <span>{item.event}</span>
        </div>
      </div>
    </div>
  );
}
