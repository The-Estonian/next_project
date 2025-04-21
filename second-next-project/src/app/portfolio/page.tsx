"use client"
import { useState } from "react";
import Image  from "next/image"

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
            <div className={styles.portfolio_pictures}>
                {portfolioItems.map((item, key) => {
                    return <div key={key} className={styles.portfolio_pictures_image}>
                        <Image src={item.download_url} style={{ display: 'block' }} width={500} height={333} alt="author image"></Image>
                    </div>
                })}
            </div>
            <span onClick={clearItems} className={styles.portfolio_fetch_button}>Clear</span>
        </div>
    )
}

type PortfolioItem = {
    id: number;
    author: string;
    download_url: string;
};

export default Portfolio