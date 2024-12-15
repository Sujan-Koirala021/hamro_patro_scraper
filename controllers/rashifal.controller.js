
import { scrapeRashifal } from "../services/scraper.service.js";
export const getRashifal = async (req, res) => {
    try {
        const rashifal_results =  await scrapeRashifal();
        res.status(200).json({ status: "success", data: rashifal_results });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}


