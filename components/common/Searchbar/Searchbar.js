import React from 'react'

const Searchbar = () => {
    return (
        <div>
            <form class="main-form">
            <label for="main-search"></label>
            <input class="input-text input-text--border-radius input-text--style-1" type="text" id="main-search" placeholder="Search" />
            <button class="btn btn--icon fas fa-search main-search-button" type="submit"></button></form>
        </div>
    )
}

export default Searchbar
