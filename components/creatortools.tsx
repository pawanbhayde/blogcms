const CreatorTools = () => {
  return (
    <div className="container relative  lg:py-20 flex flex-col items-center">
      <p className="lg:text-lg font-semibold text-muted-foreground">
        ADVANCED CREATOR TOOLS
      </p>
      <h1 className="text-2xl lg:text-5xl font-bold mt-4 leading-tight max-w-[720px] text-center lg:pt-2">
        Publish by web & email newsletter.
      </h1>
      <p className="lg:text-lg max-w-[720px] pt-2 lg:pt-4 lg:pb-16 pb-4 font-semibold text-center text-muted-foreground">
        Experience a professional-grade editor with a calm, advanced design for
        an immersive and powerful workflow.
      </p>

      <video className="border rounded-xl" autoPlay muted loop>
        <source src="/videos/editor.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default CreatorTools;
