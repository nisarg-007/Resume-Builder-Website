import React from 'react';
import Footer from '../Footer/Footer';
function AboutUs() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Our Team</h2>
        <div style={styles.content}>
          <div style={styles.item}>
            <img src="pratik.jpg" alt="Team Member 1" style={styles.image} />
            <p style={styles.text}>Pratik Rajput</p>
          </div>
          <div style={styles.item}>
            <img src="nisarg.jpg" alt="Team Member 2" style={styles.image} />
            <p style={styles.text}>Nisarg Shah</p>
          </div>
          <div style={styles.item}>
            <img src="jagdish.jpg" alt="Team Member 3" style={styles.image} />
            <p style={styles.text}>Jagdish Rathod</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#f9f9f9',
    padding: '60px 0',
  },
  container: {
    
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '40px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: '0 0 auto',
    margin:'20px'
  },
  image: {
    width: '337px',
    height:'300px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
};

export default AboutUs;
