(function(){

  DATA = [
    {
      "name": "jwt ruby",
      "category": "BE",
      "description": "Implement JWT as token-based auth with ruby-on-rails",
      "url": "https://github.com/ibrohhm/jwt-ruby"
    },
    {
      "name": "clean architecture",
      "category": "BE",
      "description": "Implement Clean Architect using Go",
      "url": "https://github.com/ibrohhm/clean-architecture"
    },
    {
      "name": "Go Mongo",
      "category": "BE",
      "description": "Simple CRUD using Go and Mongodb",
      "url": "https://github.com/ibrohhm/go-mongodb"
    },
    {
      "name": "sinatra crud api",
      "category": "BE",
      "description": "Simple CRUD using Sinatra Ruby",
      "url": "https://github.com/ibrohhm/learn-sinatra-crud-api"
    },
    {
      "name": "Prime Factors",
      "category": "BE",
      "description": "Benchmark checking prime factors whether using goroutine or not",
      "url": "https://github.com/ibrohhm/prime-factors"
    },
    {
      "name": "Sudoku Solver",
      "category": "BE",
      "description": "Sudoku solver using backtracking algorithm",
      "url": "https://github.com/ibrohhm/sudoku-solver"
    },
    {
      "name": "Gravity Balls",
      "category": "FE",
      "description": "Illustration of ball movements with single gravity point",
      "url": "https://codepen.io/colorcreate/pen/BOzKMP"
    },
    {
      "name": "Banana",
      "category": "FE",
      "description": "Banana everywhere",
      "url": "https://ibrohhm.github.io/banana/"
    },
    {
      "name": "Snake Game",
      "category": "FE",
      "description": "It's snake game",
      "url": "https://codepen.io/colorcreate/details/WNQbrar"
    },
    {
      "name": "Rain Balls",
      "category": "FE",
      "description": "Illustration of falling ball movements",
      "url": "https://codepen.io/colorcreate/pen/rZLeKB"
    },
    {
      "name": "Prime Count",
      "category": "FE",
      "description": "Finding the next prime number",
      "url": "https://codepen.io/colorcreate/pen/ZMOOEG"
    },
    {
      "name": "Color Touch",
      "category": "FE",
      "description": "Touch anywhere and you'll see",
      "url": "https://codepen.io/colorcreate/pen/VGmeZX"
    }
  ]

  var $projectList = $("#project-list")
  RenderBE(DATA.filter(x=> x.category == "BE"))
  RenderFE(DATA.filter(x=> x.category == "FE"))
  
  function RenderFE(data){
    var $fe = $("#fe")
    var header = '<p>* Front End Project List</p>'
    var list = data.map(function(x){
      return `<li>- ${x.name}: <span>${x.description}</span> <a href="${x.url}" target="_blank">link</a></li>`
    })

    $fe.html(header + "<ul>" + list.join("") + "</ul>")
  }

  function RenderBE(data){
    var $be = $("#be")
    var header = '<p>* Back End Project List</p>'
    var list = data.map(function(x){
      return `<li>- ${x.name}: <span>${x.description}</span> <a href="${x.url}" target="_blank">link</a></li>`
    })

    $be.html(header + "<ul>" + list.join("") + "</ul>")
  }
})()
