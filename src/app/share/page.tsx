import type { Metadata } from "next";

type Props = { searchParams: { name?: string; position?: string } };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const name = (searchParams.name || "YOU").toUpperCase();
  const position = searchParams.position || "1";
  const ogImageUrl = `https://bugasura.io/api/og?name=${encodeURIComponent(name)}&position=${encodeURIComponent(position)}`;
  const title = `I'm #${position} in the World of Asuras`;
  const description = `I'm #${position} in line to build my own QA Agent in the World of Asuras. Are you behind me?`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImageUrl, width: 1200, height: 627 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function SharePage() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <meta httpEquiv="refresh" content="0;url=/asuras" />
    </>
  );
}
