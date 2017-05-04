#WEB js exercise-2 
在這次的練習中需先瞭解上禮拜的程式結構，然後利用jQuery取代上禮拜學的JavaScript來處理資料的輸出與輸入，由於html上有些小改動，所以你需要下載這個檔案包，修改裡頭的js/js.js以完成此次作業

# Requirment
### 1.使用jQuery的方式，改寫 createTodoElement 以及微調其他相關的方程式。
 提示1. 教材中 DOM modification with jQuery - Creating elements with jQuery
___

### 2.用 jqeury 的方式拿取/重設 input 的值。（不得使用原js/js.js檔案最上方的變數）
 提示1. 教材中 DOM access with jQuery - Finding elements with jQuery & Get info on elements with jQuery
___

### 3.跟隨助教參考文件，當使用者載入或點擊更換圖片按鈕時，使用 $.getJSON 對 flickr api 爬取關鍵字為 "beautiful" 的照片，"隨機"拿取一張圖片，依照 flickr url 的格式替換 body 的 background-image
 提示1.flickr 相關的 api 文件 https://www.flickr.com/services/api/flickr.photos.search.html
 
 提示2.flickr api 試用：先登入Flickr，輸入你要找的關鍵字在 text 欄位；點選使用完整權限將呼叫簽署為你的帳號；輸出格式選 JSON ；點選 call method 按鈕後，就可以在文件最下面看到範例的 api 網址。 https://www.flickr.com/services/api/explore/flickr.photos.search
 
 提示3.照片 URL 格式說明 https://www.flickr.com/services/api/misc.urls.html
 
 提示4.如何從0-99隨機取一數字
 ```js
 Math.floor(Math.random() * 100 )
 ```

___

### BONUS. 當使用者點擊代辦事項時，用animate做顏色、位移、透明度變化的視覺特效。要在動畫完成後，讓該待辦事項消失。若點選全部標示已完成鈕，則全部代辦事項同時開始動畫，同時消失。
 提示1. 教材中 DOM animation & effects with jQuery
 * 會有以下結構
 ```js
 $("#example").animate({ key : value },[duration]);
 ```
 提示2. $(this) 是指觸發 callback 的 Element 的 jqeury 物件。
 
 
