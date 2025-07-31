import React from "react";

const BlogSection = () => {
  const styles = {
    blogSection: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#f8f9fa",
      padding: "3rem 0",
    },
    blogHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    blogTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "0.3rem",
    },
    blogSubtitle: {
      fontSize: "1.1rem",
      marginTop: "0.3rem",
      marginBottom: "1.5rem",
      color: "#6c757d",
    },
    underline: {
      width: "50px",
      height: "3px",
      backgroundColor: "#f1c40f",
      borderRadius: "3px",
      margin: "8px auto",
    },
    blogCardsWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "2.5rem",
      flexWrap: "nowrap",
      maxWidth: "100%",
      margin: "0 auto",
      padding: "0 20rem",
      boxSizing: "border-box",
      flexDirection: "row",
      flexGrow: 1,
    },
    blogCard: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      flex: "0 1 420px",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      backgroundColor: "#fff",
      transition: "transform 0.2s ease",
    },
    blogBadge: {
      backgroundColor: "#f1c40f",
      color: "#000",
      fontWeight: 500,
      padding: "5px 12px",
      borderRadius: "20px",
      fontSize: "0.8rem",
      marginLeft: "0.5rem",
    },
    blogCardTitle: {
      marginTop: "10px",
      marginBottom: "10px",
    },
    blogText: {
      fontSize: "0.95rem",
      marginBottom: "12px",
    },
    readMore: {
      color: "#f1c40f",
      fontWeight: 500,
      textDecoration: "none",
      cursor: "pointer",
    },
    arrow: {
      fontSize: "1rem",
      marginLeft: "5px",
    },
    dateText: {
      color: "#6c757d",
      fontSize: "0.9rem",
    },
  };

  return (
    <div style={styles.blogSection}>
      {/* Blog Header */}
      <div style={styles.blogHeader}>
        <h2 style={styles.blogTitle}>Blog</h2>
        <div style={styles.underline}></div>
        <p style={styles.blogSubtitle}>Latest insights and developments</p>
      </div>

      {/* Blog Cards */}
      <div style={styles.blogCardsWrapper}>
        {/* Card 1 */}
        <div
          style={styles.blogCard}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "0.8rem" }}>
              <small style={styles.dateText}>Dec 2024</small>
              <span style={styles.blogBadge}>AI Research</span>
            </div>
            <h5 style={styles.blogCardTitle}>AI Vision Demo</h5>
            <p style={styles.blogText}>
              Exploring the next frontier in visual AI and its impact on society...
            </p>
            <a href="#" style={styles.readMore}>
              Read more <span style={styles.arrow}>→</span>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={styles.blogCard}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "0.8rem" }}>
              <small style={styles.dateText}>Dec 2024</small>
              <span style={styles.blogBadge}>Technology</span>
            </div>
            <h5 style={styles.blogCardTitle}>Machine Learning breakthroughs</h5>
            <p style={styles.blogText}>
              Recent advancements in neural network architectures and its applications...
            </p>
            <a href="#" style={styles.readMore}>
              Read more <span style={styles.arrow}>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
