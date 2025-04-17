import { Check } from "lucide-react";
import Image from "next/image";
import CourseSectionHeading from "./CourseSectionHeading";

function ObjectivesItem({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-4">
      <div className="flex items-center justify-center text-orange-500 bg-orange-100 rounded-full w-7 h-7 shrink-0">
        <Check className="w-4 h-4 font-bold" strokeWidth={3} />
      </div>
      {name}
    </li>
  );
}

export default function CourseObjectives({
  objectives,
  src,
}: {
  objectives: string[];
  src?: string;
}) {
  return (
    <section className="bg-slate-100">
      <div className="container">
        <div className="flex items-center justify-between gap-8 py-10 sm:py-20">
          <div className="hidden md:block">
            <div className="relative w-[300px] md:w-[400px] aspect-[1/1] rounded-lg overflow-hidden">
              <Image
                src={
                  src ||
                  "https://res.cloudinary.com/dbscqlwl7/image/upload/v1695783126/courses/5143541_1_c7fkvm.png"
                }
                alt="Bạn sẽ học được gì?"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="space-y-8">
            <CourseSectionHeading>Bạn sẽ học được gì?</CourseSectionHeading>
            <ul className="flex flex-col gap-4 text-lg">
              {objectives.map((ob) => (
                <ObjectivesItem key={ob} name={ob} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
