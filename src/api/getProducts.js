import { shopifyFetch } from "../lib/shopify";

export async function getProducts() {
  const query = `
    {
      products(first: 6) {
        edges {
          node {
            id
            title
            handle
            description
            category {
              name
              
            }
            images(first: 5) {
              edges {
                node {
                  url
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                  }
                    unitPriceMeasurement {
                        measuredType
                        quantityUnit
                        quantityValue
                        referenceUnit
                        referenceValue
                    }   
        availableForSale
                }
              }
            }
          }
        }
      }
    }
  `;
  const res = await shopifyFetch(query);
  return res.data.products.edges.map((edge) => edge.node);
}
