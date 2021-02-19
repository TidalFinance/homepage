fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tidalfinance')
   .then((res) => res.json())
   .then((data) => {
      // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
      const res = data.items //This is an array with the content. No feed, no info about author etc..
      const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !

      // Functions to create a short text out of whole blog's content
      function toText(node) {
         let tag = document.createElement('div')
         tag.innerHTML = node
         node = tag.innerText
         return node
      }
      function shortenText(text,startingPoint ,maxLength) {
         return text.length > maxLength?
         text.slice(startingPoint, maxLength):
         text
      }

      // Put things in right spots of markup
      let output = '';
      let counter = 0;
      posts.forEach((item) => {
          if (counter < 12 ){

            console.log(item);

            output += 
         
            `<a href='${item.link}' target='_blank' class='news-item'>
                <div class='news-item-image'>
                    <img src='${item.thumbnail}' /> 
                </div>

                <div class='news-item-content'>
                    <div class='news-item-content-title'>
                    ${shortenText(item.title, 0, 45)+ '...'}
                    </div>

                    <div class='news-item-content-line'>
                        <div class='news-item-content-line-date'>
                        ${shortenText(item.pubDate,0 ,10)}
                        </div>
                        <div class='news-item-content-line-read'>
                            medium.com
                        </div>
                    </div>
                </div>

            </a>`

            counter++

          }
         
         
        
      })
      document.querySelector('.news-wrapper').innerHTML = output
})