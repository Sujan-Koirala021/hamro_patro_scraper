import axios from "axios";
import * as cheerio from "cheerio";

export const scrapeNepaliNews = async () => {
    try {
        const url = "https://www.hamropatro.com/news/national"; 
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);  
        const news = [];
        $(".newsCard").each((i, element) => {
            news.push({
                title: $(element).find(".newsheadingMobile").text().trim(),
                link: 'www.hamropatro.com' + $(element).find("a").attr("href"),
                summary: $(element).find(".newsSummary").text().trim(),
            });
        });

        return news;
    } catch (error) {
        console.error("Error scraping news:", error);
        throw new Error("Failed to fetch news");
    }
};


export const scrapeRashifal = async () => {
    try {
        const url = "https://www.hamropatro.com/rashifal"; 
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        // Select all rashifal links and extract required data
        const rashifals = [];

        $('#rashifal .item').each((index, element) => {
            const title = $(element).find('h3').text().trim(); // Horoscope name
            const desc = $(element).find('.desc p').text().trim(); // Horoscope description
            const href = 'www.hamropatro.com/' + $(element).closest('a').attr('href'); 

            rashifals.push({ title, desc, href });
        });

        // console.log(rashifals);
        return rashifals;
    } catch (error) {
        console.error("Error scraping rashifal:", error);
        throw new Error("Failed to fetch rashifal");
    }
};
