

const domain = "frozo-shop-2.myshopify.com";
const storefrontAccessToken = "f3ab14e004a0f0f044a3d37c47f67f8b";

export async function shopifyFetch(query, variables = {}) {
  const res = await fetch(`https://${domain}/api/2024-07/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await res.json();
  // console.log("Shopify response data:", data);
  if (data.errors) {
    console.error("Shopify errors:", data.errors);
    throw new Error("Shopify API returned errors. See console.");
  }
  return data;
}
