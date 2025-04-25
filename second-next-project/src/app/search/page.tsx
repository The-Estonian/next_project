"use client"
import { useState, useEffect } from "react";
import {searchResult$, searchUsers} from "@/lib/searchStore"

import styles from "./search.module.scss"



const Search = () => {
    const [searchResults, setSearchResults] = useState<UserStruct[]>([]);
    const [error, setError] = useState<string | undefined>(undefined)

    useEffect(() => {
        const sub = searchResult$.subscribe((res: any) => {
            if ("error" in res) {
                setError(res.error)
                setSearchResults([])
            } else {
                setError(undefined)
                setSearchResults(res)
            }
        });
        return () => sub.unsubscribe();
    }, []);
    
    return (
        <div className={styles.users}>
            <input
                type="text"
                placeholder="Search users..."
                onChange={(e) => searchUsers(e.target.value)}
            />
            <ul>
                {searchResults.map((user) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
            {error && <p>{error}</p>
            }
        </div>
    )
}

type UserStruct = {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
};

export default Search