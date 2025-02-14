const StatsSection = () => {
  return (
    <div className="bg-gray-400 pt-10 pb-28 md:flex justify-start pl-36  z-10 space-x-16 gap-14 relative text-center">
      {/* Single Stat */}
      <div className="relative">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] text-gray-300 font-bold opacity-50 select-none">
          1M+
        </span>
        <h2 className="relative text-5xl font-bold text-black">1M+</h2>
        <p className="text-md relative z-20 text-black font-medium">
          HAPPY CLIENTS
        </p>
      </div>

      {/* Single Stat */}
      <div className="relative">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] text-gray-300 font-bold opacity-50 select-none">
          28
        </span>
        <h2 className="relative text-5xl font-bold text-black">28</h2>
        <p className="text-md relative z-20 text-black font-medium">
          YEARS OF EXPERIENCE
        </p>
      </div>

      {/* Single Stat */}
      <div className="relative">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] text-gray-300 font-bold opacity-50 select-none">
          500+
        </span>
        <h2 className="relative text-5xl font-bold text-black">500+</h2>
        <p className="text-md relative z-20 text-black font-medium">
          PROJECTS COMPLETED
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
