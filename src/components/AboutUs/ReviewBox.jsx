const ReviewBox = ({ review }) => {
  return (
    <section className="flex flex-col items-start p-5 bg-white border-solid shadow-md border-[3px] border-slate-900 max-w-[400px] w-full rounded-[48px] m-4">
      <p className="mt-4 text-base leading-5 text-slate-900">{review.review}</p>
    </section>
  );
};

export default ReviewBox;
