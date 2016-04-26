var google = require('google')

google.resultsPerPage = 2
var nextCounter = 0

google('hp pavillion-15 ac 179tx reviews', function (err, res){
  if (err) console.error(err)

  for (var i = 0; i < res.links.length; ++i) {
    var link = res.links[i];
    console.log(link.title + ' - ' + link.href)
    console.log(link.description + "\n")
  }

  if (nextCounter < 4) {
    nextCounter += 1
    if (res.next) res.next()
  }
})
