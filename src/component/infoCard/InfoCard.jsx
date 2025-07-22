const InfoCard = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto mt-16 mb-1 pl-[98px] pr-[82px]">
      <div className="bg-[#073C5E]  mx-auto rounded-xl text-white p-6 flex h-[140px]  flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 p-4 flex-1 border-r border-dashed border-yellow-400">
          <img src="./clarity_plane-line.png" alt="icon" className="w-[50px] h-[50px]" />
          <p className="lg:text-xs md:text-base lg:font-light">
            Explore the best flight deals from anywhere, to everywhere, then book with no fees
          </p>
        </div>
        <div className="flex items-center gap-3 p-4 flex-1 border-r border-yellow-400  border-dashed">
          <img src="./hugeicons_git-compare.png" alt="icon" className="w-[50px] h-[50px]" />
          <p className="lg:text-xs md:text-base lg:font-light">
            Compare flight deals from over 1000 providers, and choose the cheapest, fastest or greenest tickets
          </p>
        </div>
        <div className="flex items-center gap-3 p-4 flex-1 ">
          <img src="./material-symbols-light_find-in-page-outline.png" alt="icon" className="w-[50px] h-[50px]" />
          <p className="lg:text-xs md:text-base lg:font-light text-white">
            Find the cheapest month - or even day to fly, and set up Price Alerts to book when the price is right
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;