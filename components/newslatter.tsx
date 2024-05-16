const NewsLetter = () => {
  return (
    <div className="container relative pb-10 lg:py-20 flex flex-col items-center">
      <p className="lg:text-lg font-semibold text-muted-foreground">
        RUN YOUR BUSINESS
      </p>
      <h1 className="text-2xl lg:text-5xl font-bold mt-4 leading-tight max-w-[720px] text-center lg:pt-2">
        Manage your memberships.
      </h1>
      <p className="lg:text-lg max-w-[720px] pt-2 lg:pt-4 lg:pb-16 pb-4 font-semibold text-center text-muted-foreground">
        See who's signing up, who's paying, and what they're reading, so you can
        get a better understanding of your core audience.
      </p>

      <video className="border rounded-xl" autoPlay muted loop>
        <source src="/videos/members.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default NewsLetter;
