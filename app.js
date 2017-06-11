// https://learn.jquery.com/about-jquery/
// ready event
$( document ).ready (function() {
  $body = $('body');

  $body.append(`<button id=all-tweets>hi</button>`)

  $('#all-tweets').on('click', function() {
    $(`.allTweets`).show('slow')
  })
  const app = {};

  app.getTweets = function() {
    _.each(streams.home, function(home) {
      $tweets = $(`<div class=allTweets username=${home.user}></div>`);

      $tweets.html(`@ <span user=message>${home.user}</span>: ${home.message} ${String(home['created_at']).slice(17,24)}`)

      $(`span[user=message]`).data({user: home.user, message: home.message, ['created_at']: home['created_at']})


      // $(`span[username=${home.user}]`).on('click', {user: home.user, message: home.message, ['created_at']: home['created_at']}, function(event) {
      //
      //   app.clickUsername(event);
      // })

      $tweets.appendTo($body)
    })
  }();


  // app.getTweets();

  $(`span[user=message]`).on('click', function(event) {
    // this.data()
    event
    // console.log('event', event);
    console.log('this', this);
    this.innerText
    console.log('this.innerText', this.innerText);
    // console.log('this.data()', this.data());
    var username = this.innerText
    app.clickUsername(username);
  })

  app.clickUsername = function(user) {
    console.log('clickUsername: ', user);
    //$(`span[user=message]`).hide('slow');
    $(`.allTweets`).hide('slow')
    $(`div[username=${user}]`).show('slow')
  }



  // $('div.allTweets').append('<div id="footer"></div>')





  $('#bottom').on('click', (e) => {
    e.preventDefault();
  })






})



// how to get pass data via onclick?
 // https://api.jquery.com/event.data/
