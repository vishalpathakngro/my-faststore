
import { gql } from '@faststore/core/api'

export const query = gql(`
  query Extra {
    extra {
        message
    }
  }
`);

