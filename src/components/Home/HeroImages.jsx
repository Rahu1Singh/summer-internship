const HeroImages = () => {
  return (
    <div id="hero_images" className="relative w-full flex justify-center gap-5 items-center overflow-hidden">
      <InfiniteScroll1 />
      <InfiniteScroll2 />
    </div>
  );
}

export default HeroImages;

const InfiniteScroll1 = () => {
  return (
    <div id="domainscroll" className="flex flex-col items-center justify-center h-full w-full overflow-hidden">
      <div className="flex flex-col animate-loop-scroll-1">
        <HeroImage backgroundUrl="https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=" text="BUILDING AUTOMATION" />
        <HeroImage backgroundUrl="https://www.tierpoint.com/wp-content/uploads/2022/05/modern-data-center-infrastructure-must-have-blog-1.jpeg" text="DATA CENTER INFRASTRUCTURE MANAGEMENT" />
        <HeroImage backgroundUrl="https://media.istockphoto.com/id/1332858442/photo/high-voltage-electric-power-lines-at-sunset.jpg?s=612x612&w=0&k=20&c=jBg1AAzA3mMas7EFstOIzyLcqY3iPJGtr59b_oNPmVQ=" text="POWER MANAGEMENT" />
        <HeroImage backgroundUrl="https://www.jrautomation.com/images/default-source/capabilities/assembly/assembly-solutions-carousel-1.tmb-indcapcrsl.jpg?Culture=en&sfvrsn=386181e1_4" text="PROCESS AUTOMATION" />
      </div>
      <div className="flex flex-col animate-loop-scroll-1" aria-hidden="true">
        <HeroImage backgroundUrl="https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=" text="BUILDING AUTOMATION" />
        <HeroImage backgroundUrl="https://www.tierpoint.com/wp-content/uploads/2022/05/modern-data-center-infrastructure-must-have-blog-1.jpeg" text="DATA CENTER INFRASTRUCTURE MANAGEMENT" />
        <HeroImage backgroundUrl="https://media.istockphoto.com/id/1332858442/photo/high-voltage-electric-power-lines-at-sunset.jpg?s=612x612&w=0&k=20&c=jBg1AAzA3mMas7EFstOIzyLcqY3iPJGtr59b_oNPmVQ=" text="POWER MANAGEMENT" />
        <HeroImage backgroundUrl="https://www.jrautomation.com/images/default-source/capabilities/assembly/assembly-solutions-carousel-1.tmb-indcapcrsl.jpg?Culture=en&sfvrsn=386181e1_4" text="PROCESS AUTOMATION" />
      </div>
    </div>
  );
}

const InfiniteScroll2 = () => {
  return (
    <div id="countryscroll" className="hidden xl:flex flex-col items-center justify-center h-full w-full overflow-hidden">
      <div className="flex flex-col animate-loop-scroll-2">
        <HeroImage backgroundUrl="https://www.nativeplanet.com/img/2016/08/1indiagate-23-1471954379.jpg" text="INDIA" />
        <HeroImage backgroundUrl="https://media.istockphoto.com/id/466842820/photo/petronas-towers.jpg?s=612x612&w=0&k=20&c=X_Kl-W_ulJEzjvaaT8gRNTQWHboyLKaedXol5EPhGdI=" text="MALAYSIA" />
        <HeroImage backgroundUrl="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3d/9f/2d.jpg" text="SINGAPORE" />
        <HeroImage backgroundUrl="https://hblimg.mmtcdn.com/content/hubble/img/maingalleryimgs/mmt/activities/m_Jakarta_2_l_573_1000.jpg" text="INDONESIA" />
        <HeroImage backgroundUrl="https://media.istockphoto.com/id/579757046/photo/hong-kong-city-view-from-peak-at-sunrise.webp?b=1&s=170667a&w=0&k=20&c=1g3VxdQcaOCFo_O-nrohl5I6QNJmQPSThWowWiQbW6Y=" text="HONG KONG" />
        <HeroImage backgroundUrl="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg" text="JAPAN" />
      </div>
      <div className="flex flex-col animate-loop-scroll-2" aria-hidden="true">
        <HeroImage backgroundUrl="https://www.nativeplanet.com/img/2016/08/1indiagate-23-1471954379.jpg" text="INDIA" />
        <HeroImage backgroundUrl="https://media.istockphoto.com/id/466842820/photo/petronas-towers.jpg?s=612x612&w=0&k=20&c=X_Kl-W_ulJEzjvaaT8gRNTQWHboyLKaedXol5EPhGdI=" text="MALAYSIA" />
        <HeroImage backgroundUrl="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3d/9f/2d.jpg" text="SINGAPORE" />
        <HeroImage backgroundUrl="https://hblimg.mmtcdn.com/content/hubble/img/maingalleryimgs/mmt/activities/m_Jakarta_2_l_573_1000.jpg" text="INDONESIA" />
        <HeroImage backgroundUrl="https://media.istockphoto.com/id/579757046/photo/hong-kong-city-view-from-peak-at-sunrise.webp?b=1&s=170667a&w=0&k=20&c=1g3VxdQcaOCFo_O-nrohl5I6QNJmQPSThWowWiQbW6Y=" text="HONG KONG" />
        <HeroImage backgroundUrl="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg" text="JAPAN" />
      </div>
    </div>
  );
}

const HeroImage = ({ backgroundUrl, text }) => {
  return (
    <div className="relative flex justify-center items-center overflow-clip min-h-[300px] w-[400px] rounded-3xl my-[25px] p-5 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="absolute h-full w-full bg-black/30" aria-hidden="true" />
      <p className="z-50 text-center font-bold text-3xl text-white">{text}</p>
    </div>
  );
}
