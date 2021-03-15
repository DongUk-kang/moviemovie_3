import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Poster from "../../Components/Poster";
import Section from "../../Components/Sectiong";
import Loading from "../../Components/Loading";

const Container = styled.div`
  padding-top: 0px 20px;
`

const Form = styled.form`
  margin-bottom: 10px;
  width: 100%;
`

const Input = styled.input`
  all: unset;
  font-size: 32px;
  width: 100%;
`

const SearchPresenter = ({movies, shows, onSubmit, keyword, onChange, moviesError, showsError, loading}) => {
    return (
        loading ? (
            <Loading />
            ) : (
                <Container>
                    <Form onSubmit={onSubmit}>

                        <Input
                            placeholder={"Search Movie and Tv Show"}
                        />
                    </Form>
                    <>
                        {movies && movies.length > 0 && (
                            <Section title={"Movie Results"}>
                                {movies.map(item => (
                                    <Poster
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        rating={item.vote_average}
                                        year={item.release_date}
                                        poster={item.poster_path}
                                    />
                                ))}
                            </Section>
                        )}
                        {shows && shows.length > 0 && (
                            <Section title={"Tv Results"}>
                                {shows.map(item => (
                                    <Poster
                                        key={item.id}
                                        id={item.id}
                                        title={item.name}
                                        rating={item.vote_average}
                                        year={item.first_air_date}
                                        poster={item.poster_path}
                                    />
                                ))}
                            </Section>
                        )}
                    </>
                </Container>
            )

    );
};

SearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    movies: PropTypes.array,
    shows: PropTypes.array,
    keyword: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    moviesError: PropTypes.string,
    showsError: PropTypes.string

};

export default SearchPresenter;
