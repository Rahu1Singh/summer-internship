import { TECarousel, TECarouselItem } from 'tw-elements-react';
// import 'tw-elements-react/dist/css/tw-elements-react.min.css';

export default function Carousel() {
  return (
    <div className='relative'>
    <div className="max-lg:hidden max-w-screen-lg mx-auto lg:px-16 xl:px-1">
      <div className="relative">
        <TECarousel showControls showIndicators ride="carousel" className="rounded-3xl">
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full rounded-3xl transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none sm:block"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                className="block w-full rounded-3xl object-cover"
                alt="First slide"
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white sm:block">
                <h5 className="text-base sm:text-xl">First slide label</h5>
                <p className="text-xs sm:text-base">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full rounded-3xl transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none sm:block"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                className="block w-full rounded-3xl object-cover"
                alt="Second slide"
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white sm:block">
                <h5 className="text-base sm:text-xl">Second slide label</h5>
                <p className="text-xs sm:text-base">
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full rounded-3xl transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none sm:block"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                className="block w-full rounded-3xl object-cover"
                alt="Third slide"
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white sm:block">
                <h5 className="text-base sm:text-xl">Third slide label</h5>
                <p className="text-xs sm:text-base">
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </TECarouselItem>
          </div>
        </TECarousel>
        <br /> <br />
      </div>
    </div>
    <div className='absolute right-0 top-0 bg-b-400 h-full w-[70px] lg:w-[90px] z-50' />
    <div className='absolute right-[70px] xl:right-[90px] top-0 bg-b-300 h-full w-[70px] xl:w-[90px]' />
    </div>
  );
}
