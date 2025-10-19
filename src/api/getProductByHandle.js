
import { shopifyFetch } from "../lib/shopify";

export async function getProductByHandle(handle) {
  const query = `
    query ProductByHandle($handle: String!) {
      product(handle: $handle) {
        title
        description
        images(first: 5) {
          edges {
            node {
              url
            }
          }
        }
        variants(first: 5) {
          edges {
            node {
              id
              price {
                amount
              }
            }
          }
        }
      }
    }
  `;
  const res = await shopifyFetch(query, { handle });
  return res.data.product;
}
