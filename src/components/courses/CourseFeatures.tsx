import { Code, Plus } from "lucide-react";
import Image from "next/image";
import CourseSectionHeading from "./CourseSectionHeading";

function CourseFeature({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-4">
      <div className="flex items-center justify-center rounded-full w-7 h-7 shrink-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <Code className="w-4 h-4 text-muted" strokeWidth={3} />
      </div>
      {name}
    </li>
  );
}

export default function CourseFeatures({ features }: { features: string[] }) {
  return (
    <section>
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="flex items-center justify-between gap-8">
          <div className="hidden md:block">
            <div className="relative w-[300px] md:w-[400px] aspect-[1/1] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1695783126/courses/5143541_1_c7fkvm.png"
                alt="Bạn sẽ học được gì?"
                fill
              />
            </div>
          </div>
          <div className="space-y-8">
            <CourseSectionHeading>Khoá học bao gồm</CourseSectionHeading>
            <ul className="flex flex-col gap-4 text-lg">
              {features.map((feature) => (
                <CourseFeature key={feature} name={feature} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
