import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  slug: string;
  tags: {
    schedules: string[];
    status: string[];
  };
  backgroundImage: string;
}

function CourseBadge({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 text-sm font-normal text-black bg-white rounded-full border border-[#FF6000] border-[1.5px]">
      {label}
    </span>
  );
}

export default function CourseCard({
  title,
  slug,
  tags,
  backgroundImage,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${slug}`}
      className="relative block w-full overflow-hidden rounded-xl group aspect-[4/3] md:aspect-[552/421]"
    >
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute bottom-6 md:bottom-10 left-1/2 w-full -translate-x-1/2 px-4">
        <div className="flex flex-col items-center gap-4 md:gap-5 text-center">
          <h3 className="font-black text-white md:text-[#FF6000] text-xl sm:text-2xl md:text-3xl max-w-[260px] md:max-w-[300px]">
            {title}
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            {[...tags.schedules, ...tags.status].map((tag) => (
              <CourseBadge key={tag} label={tag} />
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-1.5 md:px-6 md:py-2 bg-white rounded-full text-[#ff7100] font-semibold text-xs md:text-sm shadow-[0_3px_0_0_rgba(255,113,0,0.9)] transition-all duration-200 group-hover:-translate-y-[2px]">
            Xem Khoá Học
            <span className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#ff7100]">
              <ChevronRight size={14} className="text-white md:w-4 md:h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
