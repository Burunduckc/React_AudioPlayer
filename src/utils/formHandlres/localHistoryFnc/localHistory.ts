export const saveSearchHistory = (search: string) => {
    const searchHistoryString = localStorage.getItem('searchHistory');
    let searchHistory = searchHistoryString !== null ? JSON.parse(searchHistoryString) : [];
    searchHistory.unshift(search);

    if (searchHistory.length > 4) {
        searchHistory = searchHistory.slice(0, 4);
    }

    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
};