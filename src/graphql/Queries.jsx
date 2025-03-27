import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int = 1, $status: String, $species: String) {
    characters(page: $page, filter: { status: $status, species: $species }) {
      info {
        next
      }
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
        image
      }
    }
  }
`;
