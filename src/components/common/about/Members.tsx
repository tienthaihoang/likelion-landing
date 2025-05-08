import Image from "next/image";
import SectionHeading from "../home/SectionHeading";

interface Member {
  src: string;
  name: string;
  profession: string;
}

const members: Member[] = [
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1746697116/Our_Team_Sean_o6tnq4.png",
    name: "Kim HyeonGyu",
    profession: "Director",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1746697114/Our_Team_Lee_vmzuvj.png",
    name: "Lee Hyunjoo",
    profession: "Project Manager",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1746697114/Our_Team_c_Tien_hergj6.png",
    name: "Trần Thủy Tiên",
    profession: "Head",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1746697115/Our_Team_Loc_naycyh.png",
    name: "Nguyễn Phước Lộc",
    profession: "Leader",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1746697115/Our_Team_Nhi_wkmvsi.png",
    name: "Đặng Vân Nhi",
    profession: "Designer",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1746697116/Our_Team_anh_Tien_lmmyiq.png",
    name: "Thái Hoàng Tiến",
    profession: "Developer",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1746697116/Our_Team_Nhu_ebbqre.png",
    name: "Nguyễn Thị Nguyệt Như",
    profession: "UX/UI Designer",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1746697115/Our_Team_Hang_asbj9k.png",
    name: "Nguyễn Vũ Thái Hằng",
    profession: "HR",
  },
  {
    src: "https://res.cloudinary.com/do6l2audn/image/upload/v1746697115/Our_Team_Phuong_iqj6qi.png",
    name: "Nguyễn Việt Phương",
    profession: "Developer",
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
