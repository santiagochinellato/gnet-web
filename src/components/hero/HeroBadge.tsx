import { TechBadge } from "@/components/ui/tech-badge";

export function HeroBadge() {
  return (
    <div
      className="animate-slide-up opacity-0"
      style={{ animationDelay: "0.1s" }}
    >
      <TechBadge
        label="SYSTEM"
        text="Red de Fibra Óptica: 100% Operativa"
        color="teal"
      />
    </div>
  );
}
