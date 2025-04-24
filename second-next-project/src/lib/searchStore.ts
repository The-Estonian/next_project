import { Subject, debounceTime, switchMap } from 'rxjs';

const searchInput$ = new Subject<string>();

export const searchResult$ = searchInput$.pipe(
    debounceTime(300),
    switchMap(query => fetch(`/api/search`, {
        method: "POST",
        body: JSON.stringify({
            searchQuery: query
        })
    }).then(res => res.json()))
);

export const searchUsers = (query: string) => {
    searchInput$.next(query);
};