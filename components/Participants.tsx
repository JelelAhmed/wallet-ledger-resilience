// components/Participants.tsx
import Image from "next/image";
import { Participant } from "@/types";

type ParticipantsProps = {
  participants?: Participant[];
  maxVisible?: number;
};

export default function Participants({
  participants = [],
  maxVisible = 4,
}: ParticipantsProps) {
  // participants is guaranteed to be an array (default [])
  const visibleParticipants = participants.slice(0, maxVisible);
  const remainingCount = Math.max(
    0,
    participants.length - visibleParticipants.length
  );

  return (
    <div className="flex items-center gap-3">
      {/* Profile Pictures (stacked) */}
      <div className="flex items-center isolate">
        {visibleParticipants.map((p, index) => (
          <div
            key={`${p.name}-${index}`}
            className="relative w-8 h-8 rounded-full border-2 border-[#FCFDFD] overflow-hidden -ml-1.5 first:ml-0"
            style={{ zIndex: visibleParticipants.length - index }}
            aria-hidden
          >
            <Image
              src={p.imageUrl}
              alt={p.name}
              fill
              className="rounded-full object-cover"
              sizes="32px"
            />
          </div>
        ))}
      </div>

      {/* Names + Others */}
      <div className="flex items-center gap-1 text-[15px] leading-5 tracking-[-0.005em] text-[rgba(21,39,45,0.62)]">
        {visibleParticipants.map((p, idx) => (
          <span key={`name-${p.name}`} className="whitespace-nowrap">
            {p.name}
            {idx < visibleParticipants.length - 1 ? ", " : ""}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="whitespace-nowrap">+{remainingCount} others</span>
        )}
      </div>
    </div>
  );
}
