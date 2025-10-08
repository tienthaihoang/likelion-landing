import { ReactNode } from "react";

export default function MDXLayout({ children }: { children: ReactNode }) {
  return (
    <div className="prose lg:prose-xl my-10 max-w-screen-xl mx-auto px-8">
      <div className="bg-[#F2FAFF] px-8 py-2 rounded-md">{children}</div>
    </div>
  );
}
