import { useEffect, useState } from "react";

function Footer() {
  
  const [year, setYear] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      const date = new Date();
      setYear(date.getFullYear());
    });
  }, []);
  
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {`${year}. Артемий Кокодеев`}</p>
    </footer>
  );
};

export default Footer;