export function HeroImage() {
  return (
    <div className="relative rounded-xl w-full">
      <video className="border rounded-xl w-full" autoPlay muted loop>
        <source src="/videos/dashboard.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
