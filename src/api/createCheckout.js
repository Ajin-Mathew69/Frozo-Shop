
import { shopifyFetch } from "../lib/shopify";

export async function createCheckout(variantId, quantity) {
  const query = `
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
      }
    }
  `;
  const variables = {
    input: {
      lineItems: [{ variantId, quantity }],
    },
  };
  const res = await shopifyFetch(query, variables);
  return res.data.checkoutCreate.checkout;
}
