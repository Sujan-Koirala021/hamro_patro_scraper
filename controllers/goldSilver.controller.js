
import { scrapeGoldSilver } from "../services/scraper.service.js";
export const getGoldSilverPrice = async (req, res) => {
    try {
        const {lastUpdated, prices} = await scrapeGoldSilver();
        res.status(200).json({ status: "success", lastUpdated, data: prices});
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}


