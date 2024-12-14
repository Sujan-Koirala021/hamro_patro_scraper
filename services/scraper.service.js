import axios from "axios";
// import cheerio from "cheerio"; 
import * as cheerio from "cheerio";

export const scrapeNepaliNews = async () => {
    try {
        const url = "https://www.hamropatro.com/news/national"; // Replace with actual Nepali news site
        const { data } = await axios.get(url);
        // console.log(data)
        const $ = cheerio.load(data);  // Corrected case here
        const news = [];
        $(".newsCard").each((i, element) => {
            // console.log(element)
            news.push({
                title: $(element).find(".newsheadingMobile").text().trim(),
                link: 'www.hamropatro.com'+ $(element).find("a").attr("href"),
                summary: $(element).find(".newsSummary").text().trim(),
            });
        });

        return news;
    } catch (error) {
        console.error("Error scraping news:", error);
        throw new Error("Failed to fetch news");
    }
};
