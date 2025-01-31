# Customed-Search-Engine
<b> This is a Simple Demo Search Engine, just to demonstrate how Search Engines Works. </b> <br><br>
<i> Here I use "CUSTOM_SEARCH_ENGINE_ID" & "GOOGLE_API_KEY".</i><br>

<i>It basically provides the answers of your queries using Google Search Engine Behind.</i>
<br>

<p><i>You can ask 100 queried per day</i></p>
<br><br>

#The Process: 
<p>
<i>Here is the Process:</i>

---

### Steps to Create a Google Custom Search Engine:
1. Go to the [Google Programmable Search Engine](https://programmablesearchengine.google.com/about/) and create a new search engine.
2. Add the websites you want to search (or leave it blank to search the entire web).
3. Get your **Search Engine ID** and **API Key** (if needed).
4. Embed the search engine into your website using the provided code.

---

### Code: Embedding Google Search into Your Website

```
See the Code in the base.html
```

---

### How It Works:
1. **Search Box**:
   - Users enter a query in the search box and click the "Search" button.
2. **API Request**:
   - The `performSearch` function sends a request to the Google Custom Search API with the user's query.
3. **Display Results**:
   - The `displayResults` function processes the API response and displays the search results on the page.

---

### Steps to Set Up:
1. **Get a Google API Key**:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project and enable the **Custom Search API**.
   - Generate an API key.

2. **Create a Custom Search Engine**:
   - Go to the [Google Programmable Search Engine](https://programmablesearchengine.google.com/about/).
   - Add the websites you want to search (or leave it blank to search the entire web).
   - Get your **Search Engine ID**.

3. **Replace Placeholder Values**:
   - Replace `YOUR_CUSTOM_SEARCH_ENGINE_ID` with your actual Search Engine ID.
   - Replace `YOUR_GOOGLE_API_KEY` with your actual API Key.

---

### Example Output:
- When a user searches for a query, the results will be displayed below the search box.
- Each result includes the title, snippet, and link to the webpage.

---

### Notes:
- The free tier of the Google Custom Search API allows up to **100 queries per day**. For more queries, you’ll need to upgrade to a paid plan.
- You can customize the appearance of the search results using CSS.
- Ensure your API key is kept secure and not exposed publicly in production environments.

This is a fully functional search engine using Google's search capabilities!

<b><i>The "Google Custom Search Engine ID" & "Google API Key" isn't provided in the code. Provide it by your self. The process of How you can get both keys are mentioned above.</i></b>
</p>


## © Dipman Majumdar
