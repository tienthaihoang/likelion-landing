"use client";

import { Code2, LucideIcon, Star, Users } from "lucide-react";
import CountUp from "react-countup";

const achievements: Achievement[] = [
  {
    icon: Users,
    label: "Học viên",
    count: 24000,
    startCount: 22000,
    suffix: "+",
    duration: 3,
  },
  {
    icon: Code2,
    label: "Kinh nghiệm giáo dục",
    count: 10,
    startCount: 0,
    suffix: " năm",
    duration: 5,
  },
  {
    icon: Star,
    label: "Học viên hài lòng",
    count: 95,
    startCount: 50,
    suffix: "%",
    duration: 3,
  },
];

type Achievement = {
  count: number;
  startCount: number;
  label: string;
  icon: LucideIcon;
  suffix?: string;
  duration?: number;
};

function AchievementCard({
  count,
  label,
  icon: Icon,
  suffix,
  startCount = 0,
  duration = 5,
}: Achievement) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-1">
      <CountUp
        start={startCount}
        end={count}
        duration={duration}
        suffix={suffix}
        className="text-4xl md:text-6xl font-extrabold text-[#FF6B00]"
      />
      <span className="text-medium md:text-2xl font-medium text-muted-foreground text-[#1C1B1AE5]">
        {label}
      </span>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="container py-12 bg-white">
      <h1 className="mb-10 text-3xl font-bold md:text-4xl text-center">
        Tại sao nên chọn <span className="text-[#FF6B00]">LIKELION</span>?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <div key={achievement.label} className="relative flex justify-center">
            <AchievementCard {...achievement} />

            {index !== achievements.length - 1 && (
              <span className="absolute right-0 hidden w-[3px] h-16 bg-[#1C1B1A80] md:block top-1/2 -translate-y-1/2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
