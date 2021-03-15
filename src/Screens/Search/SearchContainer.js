import React, { useState } from 'react';
import SearchPresenter from "./SearchPresenter"
import { movieAPI, tvAPI } from "../../api";

const SearchContainer = () => {
    const [keyword, setKeyword] = useState("")
    const [results, setResults] = useState({
        movies: [],
        shows: [],
        moviesError: [],
        showsError: [],
        loading: false
    })

    const onChange = (event) => setKeyword(event.target.value)

    const onSubmit = async () => {
        setResults( { loading : true })

        if (keyword === "") {
            return
        }

        const [movies, moviesError] = await movieAPI.search(keyword)
        const [shows, showsError] = await tvAPI.search(keyword)

        setResults({
            movies,
            shows,
            moviesError,
            showsError,
            loading: false
        })
    }

    return (
        <SearchPresenter
            {...results}
            keyword={keyword}
            onChange={onChange}
            onSubmit={onSubmit}

        />
    );
};

export default SearchContainer;
