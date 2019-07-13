import React from "react";
import Movie from "./Movie";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import styled from "styled-components";


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <Container>
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return "LOADING. . .";
        if (error) return "ERROR";
        return data.movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            poster={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
          />
        ));
      }}
    </Query>
  </Container>
);

export default Home;
