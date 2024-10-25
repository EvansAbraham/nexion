export default {
    providers: [
      {
        domain: process.env.NEXT_PUBLIC_CONVEX_ISSUER_URL,
        applicationID: "convex",
      },
    ]
  };