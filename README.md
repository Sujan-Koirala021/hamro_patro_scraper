# Hamro Patro News Scraper API

## Overview
This API scrapes Nepali news, rashifal, foreign exchange values and Gold Silver price from Hamropatro website (https://www.hamropatro.com/) and provides the response in JSON format.



---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sujan-Koirala021/hamro_patro_scraper
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   nodemon index
   ```

---

## API Endpoints

### 1. Fetch Nepali News

- **Endpoint:** `GET http://localhost:3000/api/v1/news/get_news`
- **Description:** Fetches the latest Nepali news articles.
- **Response Format:**
  ```json
  {
    "status": "success",
    "data": [
      {
        "title": "सशस्त्र सङ्घर्षको परिणामले सङ्घीय लोकतान्त्रिक गणतन्त्रमा छौँ : अध्यक्ष दाहाल",
        "link": "https://www.hamropatro.com/news/details/15838042991965172?ns=",
        "summary": "काठमाडौँ, १ फागुन : नेकपा (माओवादी केन्द्र) का अध्यक्ष पुष्पकमल दाहाल ‘प्रचण्ड’ले सशस्त्र सङ्घर्षको परिणामले अहिले देश सङ्घीय लोकतान्त्रिक गणतन्त्रमा रहेको बताउनुभएको छ । धुर्कोट गाउँपालिमा सहिद उ..."
      }
    ]
  }
  ```
### 2. Fetch Rashifal
- **Endpoint:** `GET http://localhost:3000/api/v1/rashifal/get_rashifal`
- **Description:** Fetches the reshifal(horoscope)
- **Response Format:**
  ```json
  {
    "status": "success",
    "data": [
        {
            "title": "मेष",
            "desc": "मेष (चु, चे, चो, ला, लि, लु, ले, लो, अ) आज तपाईं जोश र उत्साहले भरपुर रहनुहुनेछ साथै हजुरको कलात्मक वा रचनात्मक क्षेत्रमा विकास हुनेछ। वैदेशिक यात्राको प्रयास सफल रहनेछ। कार्यक्षेत्रमा नसोचेको लाभ मिल्नेछ। आजको शुभ रंग रातो हो भने शुभ अंक २ रहेको छ।",
            "href": "https://www.hamropatro.com/rashifal/daily/Mesh"
        },
        {
            "title": "बृष",
            "desc": "वृष (इ, उ, ए, ओ, वा, वि, वु, वे, वो) कार्यक्षेत्रमा हतारमा कुनै निर्णय नलिनुहोला। नयाँ कार्य प्रारम्भ नगरौँ। जीवनसाथीको स्वास्थ्यमा ध्यान दिनुहोस्। कानुनी आवेदन नदिनुहोस्। आजको शुभ रंग सुन्तला हो भने शुभ अंक ६ रहेको छ।",
            "href": "https://www.hamropatro.com/rashifal/daily/Brish"
        }
    ]
  }
  ```
### 3. Forex
- **Endpoint:** `GET http://localhost:3000/api/v1/forex/get_forex`
- **Description:** Fetches foreign exchange values
- **Response Format:**
  ```json
  {
    "status": "success",
    "lastUpdated": "2025-02-13",
    "data": [
        {
            "currency": "Indian Rupee (100)",
            "buy": 160,
            "sell": 160.15
        },
        {
            "currency": "U.S. dollar",
            "buy": 138.74,
            "sell": 139.34
        }
    ]
  }
  ```
### 4. Gold Silver Price
- **Endpoint:** `GET http://localhost:3000/api/v1/gold_silver/get_gold_silver_price`
- **Description:** Fetches recent gold silver price
- **Response Format:**
  ```json
  {
    "status": "success",
    "lastUpdated": "Thursday, February 13,2025 - 11:05 AM",
    "data": [
        {
            "itemType": "Gold Hallmark - tola ( छापावाल सुन )",
            "price": "Nrs. 169,798.68"
        },
        {
            "itemType": "Gold Tajabi - tola ( तेजाबी सुन )",
            "price": "Nrs. 0.00"
        },
    ]
  }
  ```

---

## Technologies Used
- Node.js
- Express.js
- Cheerio (for scraping)

## Contributing
1. Fork the repo.
2. Create a feature branch.
3. Commit changes and push.
4. Open a pull request.

---

## License
This project is licensed under MIT.

