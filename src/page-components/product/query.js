import fragments from 'lib/graph/fragments';

export default `
  query PRODUCT_PAGE($language: String!, $path: String) {
    product: catalogue(language: $language, path: $path) {
      ...item
      ...product

      topics {
        id
        name
        items(first: 4) {
          edges {
            node {
              ...item
              ...product
            }
          }
        }
      }
    }
  }

  ${fragments}
`;