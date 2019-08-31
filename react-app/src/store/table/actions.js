export const FETCH_ENTRIES = 'FETCH_ENTRIES';

export const fetchEntries = () => dispath => {
    fetch('http://localhost:3100/service/getEntries')
        .then(res => res.json())
        .then(entries => dispath({
            type: FETCH_ENTRIES,
            payload: entries
        }));
};