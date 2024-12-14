
import { scrapeNepaliNews } from "../services/scraper.service.js";
export const getNews = async (req, res) => {
    try {
        const news = await scrapeNepaliNews();
        res.status(200).json({ status: "success", data: news });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}


