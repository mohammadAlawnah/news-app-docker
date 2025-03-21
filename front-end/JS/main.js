var httpRequest = new XMLHttpRequest();
var httpRequest = new XMLHttpRequest();

httpRequest.open('GET', `http://localhost:4000/news`);
var news = [];
httpRequest.send();
httpRequest.onreadystatechange = function(){
    console.log(JSON.parse(httpRequest.response))
    if(httpRequest.readyState == 4){
        console.log(httpRequest.response)
        news = JSON.parse(httpRequest.response);

        console.log("news inside",news.News)

        printData();
    }
}

function printData(){
    var data = "";
    console.log('ne',news.length)
    for(var i=2 ;i<news.News.length;i++){
        data +=`

        
                <div class="card">
                    <div class="cart-body">
                        <figure class="card-image">
                            <img src="./images/news.jpg" alt="News image">
                            <figcaption>${news.News[i].title}</figcaption>

                            <div class="article-type">
                                <p>New</p>
                            </div>
                        </figure>
                        <div class="card-title">
                            <h3>${news.News[i].content}</h3>
                        </div>
                    </div>
                </div>

        
        `
    }




    console.log('zz',data)

    document.getElementById('new').innerHTML = data;
}
