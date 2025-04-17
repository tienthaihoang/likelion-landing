import data from "@/data/data.json";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      PORT?: string;
      PWD: string;
      NEXT_PUBLIC_MONGO_URI: string;
    }
  }
}

export interface IBlog {
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  thumbnail_desktop: string;
  thumbnail_mobile: string;
  thumbnail_og: string;
  readingTime: number;
  publishOn: number;
  tags: string[];
}

export interface ICourse {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  abbr: string;
  subtitle: string;
  thumbnail: string;
  thumbnail_og: string;
  youtubeId: string;
  price: number;
  discountedPrice: number;
  objectives: string[];
  features: string[];
  modules: IModule[];
  requirements: string[];
  calendar?: ICalendar[];
  promotions?: string[];
  payment_methods?: {
    once: {
      origin: number;
      discounted?: number;
    };
    monthly: {
      times: number;
      origin: number;
    };
  };
  lecturers: {
    name: string;
    profession: string;
    avatar: string;
    description: string;
  }[];
  tags: {
    schedules: string[];
    status: string[];
  };
  benefits?: {
    title: string;
    description: string;
    icon: string;
  }[];
  highlights: string[];
  techs?: string[];
  showcases?: {
    src: string;
    title: string;
    tags: string[];
  };
}

export interface IModule {
  name: string;
  lessons: string[];
  projects?: string[];
}

export interface ICalendar {
  title: string;
  start_date: string;
  duration: string;
  schedule: string;
  location?: {
    name: string;
    address: string;
  };
  tuition?: {
    once: { price: number };
    monthly: { price: number; times: number };
  };
  platform?: string;
}
