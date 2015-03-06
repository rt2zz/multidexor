# multidexor
Simple interface for collections of indexor indexes

## usage
```js
var Multidex = require('multidexor')

var feeds = Multidex({cursorTranslator: translator }) //where translator derives a useful cursor form the PostID 

getSomeFeedData(function(FeedID, posts){
  feeds(FeedID).append(posts)
})

feeds(FeedID) //returns indexor object
```
