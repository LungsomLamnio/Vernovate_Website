import React from "react";

const BlogSection = () => {
  const styles = {
    container: {
      width: "100vw",
      minHeight: "100vh",
      background: "#fff", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      padding: "0",
    },
    centerBox: {
      background: "#fff",
      margin: "0 auto",
      borderRadius: "0px",
      width: "80vw",
      maxWidth: "900px",
      padding: "32px 0",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      marginBottom: "8px",
    },
    title: {
      fontSize: "1.75rem",
      fontWeight: 800,
      margin: 0,
      fontFamily: "Montserrat, Arial, sans-serif",
      textAlign: "center",
      color: "#000", 
    },
    underline: {
      width: "50px",
      height: "3px",
      backgroundColor: "#f1c40f",
      borderRadius: "3px",
      margin: "6px auto 4px auto", 
    },
    subtitle: {
      fontSize: "1rem",
      color: "#222",
      fontWeight: 400,
      margin: "8px 0 32px 0", 
      textAlign: "center",
      fontFamily: "Montserrat, Arial, sans-serif",
    },
    cardsRow: {
      display: "flex",
      gap: "1.5rem",
      justifyContent: "center",
      alignItems: "stretch",
      width: "100%",
      flexWrap: "nowrap",
      margin: 0,
    },
    card: {
      background: "#fff",
      border: "1.5px solid #505050",
      borderRadius: "14px",
      width: "350px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      justifyContent: "space-between",
      transition: "box-shadow 0.25s, transform 0.25s",
      boxShadow: "none",
    },
    cardHovered: {
      boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
      transform: "translateY(-3px)",
    },
    cardHeaderRow: {
      display: "flex",
      alignItems: "center",
      marginBottom: "8px",
      gap: "6px",
    },
    cardDate: {
      color: "#505050",
      fontSize: "0.93rem",
      fontWeight: 600,
      fontFamily: "Montserrat, Arial, sans-serif",
    },
    cardBadge: {
      fontWeight: 700,
      fontSize: "0.70rem",
      background: "#f1c40f",
      color: "#000",
      borderRadius: "999px",
      padding: "3px 12px",
      marginLeft: "6px",
      fontFamily: "Montserrat, Arial, sans-serif",
    },
    cardTitle: {
      fontSize: "0.95rem",
      fontWeight: 800,
      margin: "0 0 8px 0",
      color: "#0a0a0a",
      fontFamily: "Montserrat, Arial, sans-serif",
    },
    cardText: {
      fontSize: "0.85rem",
      color: "#222",
      fontWeight: 500,
      lineHeight: 1.5,
      marginBottom: "13px",
      fontFamily: "Montserrat, Arial, sans-serif",
    },
    readMore: {
      color: "#f1c40f",
      fontWeight: 700,
      fontSize: "0.94rem",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "Montserrat, Arial, sans-serif",
      marginTop: "2px",
      cursor: "pointer",
      letterSpacing: "0.02em",
    },
    arrow: {
      fontWeight: 800,
      fontSize: "1.15em",
      display: "inline-block",
    },
  };

  
  const [hovered, setHovered] = React.useState(-1);

  return (
    <div style={styles.container}>
      <div style={styles.centerBox}>
        <div style={styles.header}>
          <div style={styles.title}>Blog</div>
          <div style={styles.underline}></div>
        </div>
        <div style={styles.subtitle}>Latest insights and developments</div>
        <div style={styles.cardsRow}>
          {/* CARD 1 */}
          <div
            style={{
              ...styles.card,
              ...(hovered === 0 ? styles.cardHovered : {}),
            }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(-1)}
          >
            <div>
              <div style={styles.cardHeaderRow}>
                <span style={styles.cardDate}>Dec 2024</span>
                <span style={styles.cardBadge}>AI Research</span>
              </div>
              <div style={styles.cardTitle}>AI Vision Demo</div>
              <div style={styles.cardText}>
                Exploring the next frontier in visual AI and its impact on society...
              </div>
            </div>
            <a href="#" style={styles.readMore}>
              Read more <span style={styles.arrow}>→</span>
            </a>
          </div>
          {/* CARD 2 */}
          <div
            style={{
              ...styles.card,
              ...(hovered === 1 ? styles.cardHovered : {}),
            }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(-1)}
          >
            <div>
              <div style={styles.cardHeaderRow}>
                <span style={styles.cardDate}>Dec 2024</span>
                <span style={styles.cardBadge}>Technology</span>
              </div>
              <div style={styles.cardTitle}>Machine Learning breakthroughs</div>
              <div style={styles.cardText}>
                Recent advancements in neural network architectures and its applications...
              </div>
            </div>
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
