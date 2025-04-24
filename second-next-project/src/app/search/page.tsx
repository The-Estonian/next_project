"use client"
import { useState, useEffect } from "react";
import {searchResult$, searchUsers} from "@/lib/searchStore"

import styles from "./search.module.scss"



const Search = () => {
    const [searchResults, setSearchResults] = useState<UserStruct[]>([]);

    useEffect(() => {
        const sub = searchResult$.subscribe(setSearchResults);
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