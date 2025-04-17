import { Montserrat } from "next/font/google";
import SectionHeading from "../home/SectionHeading";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const values: Value[] = [
  {
    title: "Loyalty",
    subtitle: "Trung thành",
  },
  {
    title: "integrity",
    subtitle: "chính trực",
  },
  {
    title: "kindness",
    subtitle: "tử tế",
  },
  {
    title: "enthusiasm",
    subtitle: "nhiệt huyết",
  },
  {
    title: "lion-heartedness",
    subtitle: "dũng cảm",
  },
  {
    title: "innovation",
    subtitle: "đổi mới",
  },
  {
    title: "ownership",
    subtitle: "làm chủ công việc",
  },
  {
    title: "nurturing",
    subtitle: "Nuôi dưỡng",
  },
];

interface Value {
  title: string;
  subtitle: string;
}

function ValueCard({ title, subtitle }: Value) {
  return (
    <div className="flex items-baseline max-w-[170px]  lg:max-w-[230px] w-full">
      <span
        className={cn(
          "uppercase font-bold lg:text-8xl text-[#ff7100] text-6xl",
          montserrat.className
        )}
      >
        {title[0]}
      </span>
      <div className="flex flex-col gap-1">
        <span className="lg:text-2xl text-[#ff7100] opacity-80 w-max font-bold">
          {title.slice(1)}
        </span>
        <span className="text-sm capitalize md:text-base md: text-muted-foreground">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export default function Values() {
  return (
    <section>
      <div className="container">
        <div className="py-10 space-y-8 sm:space-y-16 sm:py-20">
          <SectionHeading
            title="Giá trị"
            subtitle="Những giá trị cốt lõi định hình tư tưởng, văn hoá và chiến lược của LIKELION."
          />
          <div className="grid items-start max-w-md grid-cols-2 mx-auto sm:grid-cols-4 gap-x-4 lg:gap-y-16 gap-y-6 sm:max-w-none place-items-center">
            {values.map((value) => (
              <ValueCard {...value} key={value.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
