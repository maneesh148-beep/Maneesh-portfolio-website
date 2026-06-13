export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Maneesh Jaiswal. Designed &amp; built with care in Bengaluru.</p>
        <a href="#top" className="back-top">Back to top ↑</a>
      </div>
    </footer>
  );
}
