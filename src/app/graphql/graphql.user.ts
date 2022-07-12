import { gql }  from 'apollo-angular';

const USER_DESCRIPTION = gql`
query{
  user{
    _id
    email
    name
    password
    username

  }

}`
export { USER_DESCRIPTION };
