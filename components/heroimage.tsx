import { BorderBeam } from "@/components/ui/border-beam";

export function HeroImage() {
  return (
    <div className="relative rounded-xl">
      <video className="border rounded-xl" autoPlay muted loop>
        <source src="/videos/dashboard.mp4" type="video/mp4" />
      </video>

      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
