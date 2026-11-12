import {
  UtensilsCrossed,
  BedDouble,
  GraduationCap,
  Sparkles,
  Users,
  UserCog,
  BookOpenText,
  Boxes,
  Link2,
  Layers3,
  Cctv,
  Radio,
  Map,
  Mail,
  ShoppingBag,
  HeartPulse,
  Pill,
  Headset,
  PhoneCall,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

export type DawingoProduct = {
  name: string;
  tagline: string;
  status: "live" | "coming-soon";
  icon: LucideIcon;
  note?: string;
  /** Bento emphasis: the live product gets the hero cell */
  featured?: boolean;
};

export const dawingoProducts: DawingoProduct[] = [
  {
    name: "Dawingo Resto",
    tagline: "Restaurant Management",
    status: "live",
    icon: UtensilsCrossed,
    featured: true,
  },
  {
    name: "Dawingo Radiowaves",
    tagline: "Live Radio & Podcasts",
    status: "live",
    icon: Radio,
  },
  { name: "Dawingo Stay", tagline: "Hotel Management", status: "coming-soon", icon: BedDouble },
  { name: "Dawingo Edu", tagline: "Schools & Institutions Management", status: "coming-soon", icon: GraduationCap },
  { name: "Dawingo Beauty", tagline: "Salon & Spa Management", status: "coming-soon", icon: Sparkles },
  { name: "Dawingo CRM", tagline: "Customer Relationship Management for Sales Teams", status: "coming-soon", icon: Users },
  { name: "Dawingo Crew", tagline: "HRM / Human Resource Management", status: "coming-soon", icon: UserCog },
  { name: "Dawingo Books", tagline: "Finance Management", status: "coming-soon", icon: BookOpenText },
  { name: "Dawingo Stock", tagline: "Inventory Management", status: "coming-soon", icon: Boxes },
  { name: "Dawingo Link", tagline: "Supply Chain Management", status: "coming-soon", icon: Link2 },
  {
    name: "Dawingo Core",
    tagline: "All-in-one ERP · HRM, Inventory, Finance, CRM & Supply Chain",
    status: "coming-soon",
    icon: Layers3,
  },
  { name: "Dawingo Vision", tagline: "CCTV Management & Analytics", status: "coming-soon", icon: Cctv },
  { name: "Dawingo Map", tagline: "Mapping & Location Intelligence", status: "coming-soon", icon: Map },
  { name: "Dawingo Mail", tagline: "Business Email & Communication", status: "coming-soon", icon: Mail },
  { name: "Dawingo Shop", tagline: "E-commerce Architecture", status: "coming-soon", icon: ShoppingBag },
  { name: "Dawingo Care", tagline: "Hospital Management", status: "coming-soon", icon: HeartPulse },
  { name: "Dawingo Cure", tagline: "Pharmacy Management", status: "coming-soon", icon: Pill },
  { name: "Dawingo Desk", tagline: "Help Desk & Customer Support", status: "coming-soon", icon: Headset },
  {
    name: "Dawingo Voice",
    tagline: "Inbound / Outbound AI Calls",
    status: "coming-soon",
    icon: PhoneCall,
    note: "Available as an addon for CRM & Desk subscribers",
  },
  { name: "Dawingo Till", tagline: "Advanced Cloud POS System", status: "coming-soon", icon: MonitorSmartphone },
];
