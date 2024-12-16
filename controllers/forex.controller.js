
import { scrapeForex } from "../services/scraper.service.js";
export const getForex = async (req, res) => {
    try {
        const {lastUpdated, forex} = await scrapeForex();
        res.status(200).json({ status: "success", lastUpdated, data: forex});
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}


