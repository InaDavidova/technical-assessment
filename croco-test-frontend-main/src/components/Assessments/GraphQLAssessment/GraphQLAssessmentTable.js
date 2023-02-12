import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CAKES = gql`
  query GetCakes {
    cakes {
      description
      id
      image
      title
    }
  }
`;
export default function GraphQLAssessmentTable() {
  const { loading, error, data } = useQuery(GET_CAKES);

  if (loading) return <p>Loading...</p>;

  if (error) {
    return <p>Error</p>;
  }

  return (
    <table id="reduxAssessmentTable">
      <thead>
        <tr>
          {data.cakes.map((el) => (
            <th key={el.id}>{el.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.cakes.map((el) => (
          <tr>
            <td>{el.description}</td>
            <td>
              <img src={el.image} alt={el.title} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
