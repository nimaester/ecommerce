export const PRODUCT_QUERY = `
  query{
    inventories{
      data{
        attributes{
          title
          description
          price
          slug
          image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;

// export const GET_ITEM_INFO = `
//   query get
// `
