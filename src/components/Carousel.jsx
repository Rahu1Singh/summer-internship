import { TECarousel, TECarouselItem } from 'tw-elements-react';
// import 'tw-elements-react/dist/css/tw-elements-react.min.css';

export default function CarouselBasicExample() {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8">
      <div className="relative">
        <TECarousel showControls showIndicators ride="carousel" className="rounded-3xl">
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full rounded-3xl transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                className="block w-full rounded-3xl"
                alt="..."
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full rounded-3xl transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                className="block w-full rounded-3xl"
                alt="..."
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full rounded-3xl transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                className="block w-full rounded-3xl"
                alt="..."
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </TECarouselItem>
          </div>
        </TECarousel>
      </div>
    </div>
  );
}