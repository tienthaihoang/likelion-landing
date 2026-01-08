import Image from "next/image";
import SectionHeading from "../home/SectionHeading";

interface Member {
  src: string;
  name: string;
  profession: string;
}

const members: Member[] = [
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1767839835/Sean_izgsqm.png",
    name: "Kim HyeonGyu",
    profession: "Director",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1767839837/Thuy-Tien_m49pj8.png",
    name: "Trần Thủy Tiên",
    profession: "Head",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1767839836/Phuoc-Loc_gxs5s4.png",
    name: "Nguyễn Phước Lộc",
    profession: "Leader",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1767839836/My-Nguyen_hdj7o3.png",
    name: "Tô Phạm Mỹ Nguyên",
    profession: "Designer",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1767839836/Viet-Phuong_nq54cp.png",
    name: "Nguyễn Việt Phương",
    profession: "Developer",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1767839836/Hoang-Tien_actoo5.png",
    name: "Thái Hoàng Tiến",
    profession: "Developer",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1767839837/Van-Oanh_kcvym6.png",
    name: "Trần Văn Oanh",
    profession: "Marketing",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1767839836/Minh-Thu_olwra3.png",
    name: "Nguyễn Thị Minh Thư",
    profession: "Marketing",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1767839837/Thai-Hang_l2gu84.png",
    name: "Nguyễn Vũ Thái Hằng",
    profession: "HR",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1767839837/Bao-Tran_sw0taf.png",
    name: "Dương Bảo Trân",
    profession: "HR Assistant",
  },
];

function MemberCard({ src, name, profession }: Member) {
  return (
    <div className="flex flex-col w-full h-full xs:max-w-sm overflow-hidden rounded shadow max-w-[280px]">
      <div className="aspect-[1/1] relative bg-[#ff8d3f]">
        <Image src={src} alt={name} fill />
      </div>
      <div className="p-4 text-center">
        <h4 className="text-lg font-medium">{name}</h4>
        <p className="text-muted-foreground">{profession}</p>
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <section>
      <div className="container">
        <div className="py-20 space-y-8 sm:space-y-16">
          <SectionHeading
            title="Đội ngũ của chúng tôi"
            subtitle="Mỗi mảnh ghép của LIKELION đều làm việc chăm chỉ, đam mê và nhiệt huyết cống hiến cho giáo dục. Chúng tôi đều nỗ lực để phục vụ cho sứ mệnh “Mang lập trình tiếp cận mọi đối tượng”. "
          />
          <div className="grid gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center">
            {members.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
