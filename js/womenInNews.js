    
        const shortenAnswer = (answer) => {
            if (answer && answer.length) {
                let content = "";
                for (let i = 0; i < (answer.length > 100 ? 100 : answer.length); i++) {
                    content = content + answer[i];
                }
                return content;
            } else {
                return "NULL"; 
        };
    }
        fetch('https://newsapi.org/v2/everything?q=businesswomen&from=2023-11-5&sortBy=publishedAt&apiKey=b7fa3b4ce38d4b2ebfef8d3595fe99c3')
        .then(res => {
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.status}`);
            }
            return res.json();
        })
        .then(res => {
            const newsOne = res.articles;
            news = newsOne; 
            let content = "";
            news.forEach(ele => {
                if (ele.urlToImage) {
                    content = content +
                        `<div class="col-12 col-lg-4" style="padding: 5px">
                            <div class="card" style="width: 20rem;margin: auto auto; border-radius: 10px;">
                            <img class="card-img-top" src=${ele.urlToImage} alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${ele.title}</h5>
                                <p class="card-text">${shortenAnswer(ele.description)}.....</p>
                                <a href=${ele.url} class="btn women-news-btn">Read more</a>
                            </div>
                            </div>
                        </div>`;
                }
            });
            document.getElementById("women-in-news").innerHTML = content;
            document.getElementById("preloader").style.display = "none";
        })
        .catch((err) => {
            console.error("Error during fetch:", err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There was an error fetching data. Contact Kanishka.",
            });
        });
    
    
    
    
    