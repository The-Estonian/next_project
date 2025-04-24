"use client"
import { useState, useEffect } from "react";

import styles from "./users.module.scss"



const Users = () => {
    const [users, setUsers] = useState<UserStruct[]>([])

    const [username, setUsername] = useState<string>("")
    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")

    const [error, setError] = useState<string | undefined>(undefined)

    const fetchAllUsers = async () => {
        const response = await fetch("/api/users")
        const data = await response.json()            
        setUsers(data);
    }

    useEffect(() => {
        fetchAllUsers()
    }, [])

    const registerNewUserHandler = async () => {
        try {
            const response = await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify({
                    username,
                    firstname,
                    lastname
                })
            })
            if (response.ok) {
                console.log("User received!");
                setError(undefined)
                setUsername("")
                setFirstname("")
                setLastname("")
                fetchAllUsers()
            } else {
                console.error("Failed to register user: ", response.statusText);
                setError("Failed to register user: " + response.statusText)
            }
        } catch (e) {
            console.log("Error with new user registration method!", e);
            setError("Error with new user registration method!" + e)
        } 
    }

    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 3) {
            setError("At least 3 letters for username please!")
        } else {
            setError(undefined)
        }
        setUsername(e.target.value)
    }

    const firstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 2) {
            setError("At least 2 letters for First name please!")
        } else {
            setError(undefined)
        }
        setFirstname(e.target.value)
    }

    const lastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 2) {
            setError("At least 2 letters for Last name please!")
        } else {
            setError(undefined)
        }
        setLastname(e.target.value)
    }

    return (
        <div className={styles.users}>
            <h3>Users</h3>
            {users && <div className={styles.users_container}>
                {users.map((user) => {
                    return <div key={user.id} className={styles.users_container_user}>
                        <span>
                            UserId: {user.id}
                        </span>
                        <span>
                            Username: {user.username}
                        </span>
                        <span>
                            First name: {user.firstname}
                        </span>
                        <span>
                            Last name: {user.lastname}
                        </span>
                    </div>;
                })}
            </div>}
            <div className={styles.users_add_new_user}>
                <span>Add new user!</span>
                <div className={styles.users_add_new_user_input_container}>
                    <span>Username</span>
                    <input value={username} onChange={usernameHandler} type="text"></input>
                    <span>First Name</span>
                    <input value={firstname} onChange={firstNameHandler} type="text"></input>
                    <span>Last Name</span>
                    <input value={lastname} onChange={lastNameHandler} type="text"></input>
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
    firstname: string;
    lastname: string;
};

export default Users