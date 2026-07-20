import { redirect } from "next/navigation";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { name?: string; position?: string };
}) {
  const name = (searchParams.name || "YOU").toUpperCase();
  const position = searchParams.position || "1";
  const ogImageUrl = `https://bugasura.io/api/og?name=${encodeURIComponent(name)}&position=${encodeURIComponent(position)}`;

  return {
    title: `I'm #${position} in the World of Asuras — Bugasura`,
    description: `I'm #${position} in line to build my own QA Agent in the World of Asuras. Are you behind me?`,
    openGraph: {
      title: `I'm #${position} in the World of Asuras`,
      description: `I'm #${position} in line to build my own QA Agent. Are you behind me?`,
      images: [{ url: ogImageUrl, width: 1200, height: 627 }],
      url: `https://bugasura.io/share?name=${encodeURIComponent(name)}&position=${encodeURIComponent(position)}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `I'm #${position} in the World of Asuras`,
      description: `I'm #${position} in line to build my own QA Agent. Are you behind me?`,
      images: [ogImageUrl],
    },
  };
}

export default function SharePage() {
  redirect(`/asuras`);
}
