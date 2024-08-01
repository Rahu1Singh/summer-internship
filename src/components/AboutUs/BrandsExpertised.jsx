import { allenlogo, siemenslogo, boschlogo, honeywelllogo, danfosslogo, greystonelogo, ravellogo, matrixlogo, apclogo, valracklogo, dlinklogo, netgearlogo, ciscologo, delllogo, hplogo, juniperlogo, ashcroftlogo, endresslogo, gastronlogo, keysightlogo,mettlerlogo, msalogo, schmidtlogo, troxlogo, vaisalalogo, wikailogo } from "../../assets";

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
    { src: apclogo, alt: "APC"},
    { src: valracklogo, alt: "Valrack"},
    { src: dlinklogo, alt: "D-Link"},
    { src: netgearlogo, alt: "Netgear"},
    { src: ciscologo, alt: "Cisco" },
    { src: delllogo, alt: "Dell" },
    { src: hplogo, alt: "HP" },
    { src: juniperlogo, alt: "Juniper" },
    { src: ashcroftlogo, alt: "Ashcroft" },
    { src: endresslogo, alt: "Endress Hauser" },
    { src: gastronlogo, alt: "Gastron" },
    { src: keysightlogo, alt: "Keysight" },
    { src: mettlerlogo, alt: "Mettler Toledo" },
    { src: msalogo, alt: "MSA" },
    { src: schmidtlogo, alt: "Schmidt" },
    { src: troxlogo, alt: "Trox" },
    { src: vaisalalogo, alt: "Vaisala" },
    { src: wikailogo, alt: "Wikai" },
  ];

  return (
    <div className="max-h-[200px] my-10 bg-whitebg p-8 w-full flex overflow-hidden">
      <ul id="logos" className="flex items-center justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt}/>
          </li>
        ))}
      </ul>
      <ul id="logos" className="flex items-center justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrandsExpertised;