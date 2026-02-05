
import { fatherData } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import motherPhoto from "../images/mother.jpeg";

// 👉 CHILDREN IMAGES
import child1 from "../images/philimon.jpeg";
import child2 from "../images/Beatrice.jpeg";
import child3 from "../images/joe.jpg";

export default function InsideRight() {
  const defaultTribute = `John was a man of unwavering integrity, boundless compassion, and quiet strength. For 45 years, he was the loving husband to Margaret, a devoted father to his four children, and a pillar of the community.`;

  return (
    <div className="page inside-right">
      <div className="container-fluid h-100 py-4">
        <div className="row h-100 g-4">

          {/* ✅ LOVING WIFE — FIRST ON MOBILE */}
          <div className="col-lg-4 order-1 order-lg-2">
            <div className="h-100 d-flex flex-column">

              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="border-top border-secondary flex-grow-1"></div>
                  <h3
                    className="mx-3 mb-0 text-center"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#2c3e50",
                      fontWeight: "500",
                    }}
                  >
                    Loving Wife
                  </h3>
                  <div className="border-top border-secondary flex-grow-1"></div>
                </div>

                <div className="mother-photo-container mx-auto">
                  <img
                    src={motherPhoto}
                    alt="mother"
                    className="img-fluid rounded shadow"
                    style={{ width: "100%", maxWidth: "420px" }}
                  />
                </div>

                <div className="text-center mt-3">
                  <h4
                    className="mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#2c3e50",
                    }}
                  >
                    {fatherData.spouseName || "Janet Osafo"}
                  </h4>

                  {fatherData.marriageYears && (
                    <p className="text-muted mb-2">
                      <i className="fas fa-heart me-1 text-danger"></i>
                      Married for {fatherData.marriageYears} years
                    </p>
                  )}
                </div>
              </div>

              {/* Memories */}
              <div className="mt-auto">
                <h5 className="text-secondary mb-3">
                  <i className="fas fa-memory me-2"></i>
                  Cherished Memories
                </h5>

                <div className="list-group list-group-flush">
                  <div className="list-group-item border-0 py-2 bg-transparent">
                    <i className="fas fa-utensils text-primary me-2"></i>
                    Sunday family dinners
                  </div>

                  <div className="list-group-item border-0 py-2 bg-transparent">
                    <i className="fas fa-tree text-success me-2"></i>
                    Annual Christmas tree decorating
                  </div>


                  <div className="list-group-item border-0 py-2 bg-transparent">
                    <i className="fas fa-book-reader text-warning me-2"></i>
                    Reading together by the fireplace
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ✅ LEFT COLUMN — TRIBUTE + CHILDREN */}
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="h-100 d-flex flex-column">

              {/* Header */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="border-top border-secondary flex-grow-1"></div>
                  <h2
                    className="mx-3 mb-0 text-center"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#2c3e50",
                      fontWeight: "500",
                      fontSize: "2.5rem",
                    }}
                  >
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

              {/* Tribute */}
              <div className="tribute-text flex-grow-1 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 p-md-5">
                    <p
                      className="lead mb-4"
                      style={{
                        fontFamily: "'Crimson Text', serif",
                        fontSize: "1.25rem",
                        lineHeight: "1.8",
                        textAlign: "justify",
                      }}
                    >
                      {fatherData.tribute || defaultTribute}
                    </p>

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

              {/* ✅ CHILDREN WITH NAMES */}
              <div className="mt-auto">
                <h4
                  className="text-secondary mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: "500",
                  }}
                >
                  <i className="fas fa-users me-2"></i>
                  Beloved Children
                </h4>

                <div className="row g-3 text-center">

                  <div className="col-md-4">
                    <img src={child1} alt="Philomon Yeboah" className="img-fluid rounded shadow-sm mb-2" />
                    <h6 className="mb-0 fw-semibold">Philomon Yeboah</h6>
                  </div>

                  <div className="col-md-4">
                    <img src={child2} alt="Beatrice Osafo" className="img-fluid rounded shadow-sm mb-2" />
                    <h6 className="mb-0 fw-semibold">Beatrice Osafo</h6>
                  </div>

                  <div className="col-md-4">
                    <img src={child3} alt="Joseph Frimpong" className="img-fluid rounded shadow-sm mb-2" />
                    <h6 className="mb-0 fw-semibold">Joseph Frimpong</h6>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Crimson+Text&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </div>
  );
}