
export function setQueryParam(key, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
}

export function getQueryParam(key) {
    const url = new URL(window.location.href);
    return url.searchParams.get(key);
}

export function clearQueryParams() {
    const url = new URL(window.location.href);
    url.search = ''; // Clears all query parameters
    window.history.pushState({}, '', url);
}
