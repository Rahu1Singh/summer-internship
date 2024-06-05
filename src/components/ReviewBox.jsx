import { star } from "../assets";

const ReviewBox = ({ review }) => {
  return (
    <section className="flex flex-col items-start p-6 bg-white border-solid shadow-md border-[3px] border-slate-900 max-w-[400px] w-full rounded-[48px] m-4">
      <div className="flex gap-1">
        {Array(review.stars).fill().map((_, index) => (
          <img key={index} src={star} alt="Star" width="24" height="24" className="object-contain" />
        ))}
      </div>
      <p className="mt-4 text-base leading-5 text-slate-900">{review.review}</p>
      <p className="mt-4 text-base font-extrabold leading-5 text-slate-900">{review.username}</p>
    </section>
  );
};

export default ReviewBox;
