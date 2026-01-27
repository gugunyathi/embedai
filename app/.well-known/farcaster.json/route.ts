function withValidProperties(properties: Record<string, undefined | string | string[]>) {
  return Object.fromEntries(
    Object.entries(properties).filter(([_, value]) => (Array.isArray(value) ? value.length > 0 : !!value))
  );
}

export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL as string;
  
  const manifest = {
    accountAssociation: {
      header: "",
      payload: "",
      signature: ""
    },
    miniapp: {
      version: "1",
      name: "AI Multi-Format Studio",
      homeUrl: URL,
      iconUrl: `${URL}/icon.png`,
      splashImageUrl: `${URL}/splash.png`,
      splashBackgroundColor: "#0f172a",
      webhookUrl: `${URL}/api/webhook`,
      subtitle: "Generate AI images in multiple formats",
      description: "A powerful AI image generator that creates multiple format variants from a single prompt using Google's Gemini API.",
      screenshotUrls: [
        `${URL}/screenshot1.png`,
        `${URL}/screenshot2.png`,
        `${URL}/screenshot3.png`
      ],
      primaryCategory: "utilities",
      tags: ["ai", "image-generation", "gemini", "design"],
      heroImageUrl: `${URL}/og-image.png`,
      tagline: "Generate multiple format variants instantly",
      ogTitle: "AI Multi-Format Studio",
      ogDescription: "Generate AI images in multiple formats with a single prompt",
      ogImageUrl: `${URL}/og-image.png`,
      noindex: false
    }
  };

  return Response.json(manifest);
}
