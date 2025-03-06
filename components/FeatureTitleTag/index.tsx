const FeatureTitleTag = ({ text }: { text?: string }) => {
  return (
    <div className="lg:px-10 px-4 max-w-fit lg:h-[44px] h-[24px] text-center rounded-[64px] bg-lightcyan text-primary border border-white lg:text-sm text-xs flex items-center justify-center mx-auto">
      {text}
    </div>
  );
};

export default FeatureTitleTag;
