const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#393F4266] backdrop-blur-sm flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"></div>
    </div>
  );
};

export default Loader;
