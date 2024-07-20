import AumentoDePadding from "../components/Header/AumentoDePadding.tsx";
import Header, { HeaderProps } from "../components/Header/index.tsx";

export default function Section({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Our Family", url: "/home#OurFamily" },
      { label: "Team", url: "/home#Team" },
      { label: "Get in Touch", url: "/home#GetInTouch" },
    ],
  },
}: HeaderProps) {
  return (
    <Header
      logo={logo}
      navigation={navigation}
    >
      <AumentoDePadding />
    </Header>
  );
}
