"use client"
import { useState } from "react";

import styles from "./portfolio.module.scss"

const Portfolio = () => {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])

    const clearItems = () => {
        setPortfolioItems([])
    }

    const fetchPortfolioItems = async () => {
        try {
            const response = await fetch("/api/portfolio")
            const data:PortfolioItem[] = await response.json()
            setPortfolioItems(data)
            
            
        } catch (e) {
            console.log("Endpoint error", e);
            setPortfolioItems([])
        }

    }
    return (
        <div className={styles.portfolio}>
            <h3>Portfolio</h3>
            <span onClick={fetchPortfolioItems} className={styles.portfolio_fetch_button}>Fetch pictures</span>
            {portfolioItems.map((item, key) => {
                return <p key={key}>{item.title}</p>
            })}
            <span onClick={clearItems} className={styles.portfolio_fetch_button}>Clear</span>
        </div>
    )
}

type PortfolioItem = {
  id: number;
  title: string;
};

export default Portfolio