"use client"
import { useState, useEffect } from "react";

import styles from "./users.module.scss"



const Portfolio = () => {
    const [users, setUsers] = useState<UserStruct[]>([])

    const [username, setUsername] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")

    const [error, setError] = useState<string | undefined>(undefined)

    useEffect(() => {
        const fetchAllUsers = async () => {
            const response = await fetch("/api/users")
            const data = await response.json()
            console.log(data);
            
            setUsers(data);
        }
        fetchAllUsers()
    }, [])

    const registerNewUserHandler = async () => {
        try {
            const response = await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify({
                    username,
                    firstName,
                    lastName
                })
            })
            if (response.ok) {
                console.log("User received!");
                setError(undefined)
                setUsername("")
                setFirstName("")
                setLastName("")
            } else {
                console.error("Failed to register user: ", response.statusText);
                setError("Failed to register user: " + response.statusText)
            }
        } catch (e) {
            console.log("Error with new user registration method!", e);
            setError("Error with new user registration method!" + e)
        } 
    }
    return (
        <div className={styles.users}>
            <h3>Users</h3>
            {users && <div>
                {users.map((user) => {
                    return <div key={user.id}>{user.id}</div>;
                })}
            </div>}
            <div className={styles.users_add_new_user}>
                <span>Add new user!</span>
                <div className={styles.users_add_new_user_input_container}>
                    <span>Username</span>
                    <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text"></input>
                    <span>First Name</span>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"></input>
                    <span>Last Name</span>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"></input>
                    <span className={styles.users_add_new_user_input_container_submit} onClick={registerNewUserHandler}>Submit</span>
                    {error && error}
                </div>
            </div>
        </div>
    )
}

type UserStruct = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
};

export default Portfolio