import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOYO",
  description: "3D Showroom for product preview",
  //圖片
  openGraph: {
    title: "3D Showroom",
    description: "3D Showroom for product preview",
    images: "/og.png",
  }
};

export default function ShowroomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
