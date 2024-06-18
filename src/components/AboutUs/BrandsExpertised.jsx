import { useEffect } from 'react';
import { allenlogo, siemenslogo, boschlogo, honeywelllogo, danfosslogo, greystonelogo, ravellogo, matrixlogo } from "../../assets";

const BrandsExpertised = () => {
  const logos = [
    { src: allenlogo, alt: "Allen" },
    { src: siemenslogo, alt: "Siemens" },
    { src: boschlogo, alt: "Bosch" },
    { src: honeywelllogo, alt: "Honeywell" },
    { src: danfosslogo, alt: "Danfoss" },
    { src: greystonelogo, alt: "Greystone" },
    { src: ravellogo, alt: "Ravel" },
    { src: matrixlogo, alt: "Matrix" },
  ];

  useEffect(() => {
    // infinite loop
    const ul = document.getElementById('logos');
    const clonedUl = ul.cloneNode(true);
    ul.parentNode.appendChild(clonedUl);

    // Adjust aria-hidden attribute for accessibility
    clonedUl.setAttribute('aria-hidden', 'true');
  }, []);

  return (
    <div className="z-20 my-10 bg-whitebg p-8 w-full inline-flex flex-nowrap overflow-hidden relative">
      <ul id="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrandsExpertised;
