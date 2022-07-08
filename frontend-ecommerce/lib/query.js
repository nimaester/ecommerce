export const PRODUCT_QUERY = `
  query{
    inventories {
      data {
        attributes {
          title,
          description,
          price,
          slug,
          available,
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ITEM_INFO = `
  query getItem($slug: String!) {
    inventories(filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          title,
          description,
          price,
          slug,
          available,
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;
