import { allenlogo, siemenslogo, boschlogo, honeywelllogo, danfosslogo, greystonelogo, ravellogo, matrixlogo } from "../../assets";
import { reviews } from "../../constants";
import ReviewBox from "./ReviewBox";

const Reviews = () => {
  return (
    <div className="relative overflow-hidden h-full bg-b-200">
      <div className="absolute -left-[1650px] top-[0px] h-[1200px] w-[3340px] -rotate-45 z-0 bg-b-200 "></div>
      <br />
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="relative z-10 p-3 text-3xl lg:text-4xl font-bold text-b-950 my-5 lg:my-10">Our Projects</h1>
        <div className="w-full px-4">
          <div className="flex flex-wrap justify-center gap-4 overflow-x-auto 2xl:flex-nowrap 2xl:justify-center">
            {reviews.map((review, index) => (
              <ReviewBox key={index} review={review} />
            ))}
          </div>
        </div>

        <div id='brands-expertised' className="text-center mt-16 mb-5 text-3xl lg:text-4xl font-bold text-b-950">Brands Expertised</div>
        <div id='brands' className="flex flex-wrap justify-center py-5 mb-10">
          <img src={allenlogo} className="m-5 h-20 md:h-24 lg:h-20 p-2" alt="SME 500" />
          <img src={siemenslogo} className="m-5 h-16 md:h-16 lg:h-16 p-2" alt="SME 500" />
          <img src={ravellogo} className="m-5 h-16 md:h-16 lg:h-20 p-2" alt="SME 500" />
          <img src={danfosslogo} className="m-5 h-16 md:h-20 lg:h-20 p-2" alt="SME 500" />
          <img src={greystonelogo} className="m-5 h-16 md:h-16 lg:h-20 p-2" alt="SME 500" />
          <img src={honeywelllogo} className="m-5 h-16 md:h-16 lg:h-20 p-2" alt="SME 500" />
          <img src={boschlogo} className="m-5 h-16 md:h-16 lg:h-20 p-2" alt="SME 500" />
          <img src={matrixlogo} className="m-5 h-16 md:h-20 lg:h-20 p-2" alt="SME 500" />
        </div>
      </div>
    </div>
  )
}

export default Reviews;
