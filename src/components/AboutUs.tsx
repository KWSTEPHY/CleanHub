import React, { useEffect, useRef } from "react";
// import '/'

const AboutUs = () => {
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      circleRefs.current.forEach((circleRef) => {
        if (circleRef && isInViewport(circleRef)) {
          circleRef.classList.add('rotate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isInViewport = (element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const vertInView =
      rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView =
      rect.left <= windowWidth && rect.left + rect.width >= 0;

    return vertInView && horInView;
  };




// const AboutUs: React.FC = () => {
  return (
    <div className="w-screen">
      <section
        className="bg-cover bg-center relative w-screen mx-auto pt-15"
        style={{
          backgroundImage: `url('src/assets/pic 3.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "400px",
          width: "100%",
        }}>
        <div
          className="flex bg-black bg-opacity-50 text-white backdrop-filter backdrop-blur-sm mx-auto px-0"
          style={{
            backdropFilter: "blur(5px)",
            height: "400px",
            width: "100%",
            fontWeight: "bold", // Adjust the blur amount as desired
            display: "flex",
            alignItems: "center",
          }}>
          <h2
            className="text-8xl font-bold mx-auto px-6 py-8"
            style={{
              // fontFamily: "Your Custom Font, sans-serif", 
              fontStyle: "italic", 
            }}>
            About Us
          </h2>
        </div>
      </section>

      <section className="bg-white w-screen text-black py-20">
  <div className="container mx-auto">
    <div className="relative w-64 h-64 mx-auto mb-8 rounded-full bg-[#002147] transition-transform duration-1000 rotate-in">
      <h2 className="text-4xl font-bold mx-auto px-0 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Our Mission
      </h2>
    </div>
    <p className="text-lg">
      Our mission is to provide the highest quality cleaning services to ensure
      a clean, safe, and healthy environment for our clients. We strive to
      exceed customer expectations through our dedication to excellence and
      commitment to sustainability.
    </p>
  </div>
</section>

<section className="bg-blue-500 text-white py-20">
  <div className="container mx-auto px-6">
    <div className="relative w-64 h-64 mx-auto mb-8 rounded-full bg-white transition-transform duration-1000 rotate-in">
      <h2 className="text-4xl font-bold mb-4 text-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Our Vision
      </h2>
    </div>
    <p className="text-lg">
      Our vision is to be the leading cleaning service provider known for our
      innovative solutions and customer-centric approach. We aim to set the
      standard for cleanliness and hygiene in the industry.
    </p>
    <div className="relative w-64 h-64 mx-auto mb-8 rounded-full bg-white transition-transform duration-1000 rotate-in">
      <h2 className="text-4xl font-bold mb-4 text-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Our Values
      </h2>
    </div>
    <ul className="text-lg list-disc pl-5">
      <li className="mb-2">
        Integrity: We operate with honesty and integrity in all that we do.
      </li>
      <li className="mb-2">
        Excellence: We are committed to delivering top-quality services.
      </li>
      <li className="mb-2">
        Sustainability: We prioritize eco-friendly practices in our operations.
      </li>
      <li className="mb-2">
        Customer Satisfaction: We aim to exceed our customers' expectations.
      </li>
    </ul>
  </div>
</section>
    </div>
  );
};

export default AboutUs;
