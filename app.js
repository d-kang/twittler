// https://learn.jquery.com/about-jquery/
// ready event
$( document ).ready (function() {

  var $body = $('body');
  $body.html('');

  var $tweetContent = $(`<div id=tweet-content></div>`)
  $tweetContent.appendTo($body);

  $upperContent = $(`<div id=upper-content></div>`)
  $upperContent.prependTo($body);
  var $friendsTweets = $(`<div id=friends-tweets></div>`)
  $friendsTweets.appendTo($body);
  // creating an onclick event on an element
  var $r=$('<input/>').attr({
       type: "button",
       id: "field",
       value: 'All Tweets'
   });

   $upperContent.append($r);

   $($r).click(() => {
     console.log('hi')
     $(`div.all-tweets`).show(`slow`);
   });





  var getUserTweets = function(user) {
    console.log('getUserTweets:', 'hi');
    console.log('user', user);

    console.log('typeof user', typeof user);
    $('.all-tweets').hide('slow');
    console.log('streams.users[user]', streams.users[user]);
    _.each(streams.users[user], (dataObject) => {
      var $tweet = $(`<div></div>`);
      $tweet.text(dataObject.message)
      console.log('dataObject.message', dataObject.message);
      $tweet.appendTo(`div#friends-tweets`)
    })
  }



  //starter code
  const getTweets = function() {
    // var $body = $('body');
    // $body.html('');

    for (var index = streams.home.length - 1; index >= 0; index--) {
      var tweet = streams.home[index];

      var $tweet = $(`<div></div>`);
      // set attribute on $tweet
      $tweet.attr('div-user', tweet.user)
      $tweet.attr('class', 'all-tweets')
      // $tweet.text('@' + tweet.user + ': ' + tweet.message);

      $tweet.html(`@ <span>${tweet.user}</span>: ${tweet.message}`);
      // console.log('$tweet', $tweet.children("span"));


      // Traversing - Descendants
        // Returns all <span> elements that are direct children of <div>
        // ('span.className') would return all <span> elements with specified class name
      var $span = $tweet.children("span");
      $span.css('color', 'blue')
      $span.attr('user', tweet.user);
      $span.click((event) => {
        event.preventDefault()
        console.log('event', event);
        console.log('event.target', event.target);
        console.log('event.target.childNodes[0].nodeValue', event.target.childNodes[0].nodeValue);
        var userName = event.target.childNodes[0].nodeValue
        console.log('userName', userName);

        console.log('typeof userName', typeof userName);
        getUserTweets(userName)
        console.log('click tweet.user:', tweet.user);
      })

      // $tweet.html('@' + '<a href="#">' + tweet.user + '</a>' + ': ' + tweet.message);

      // $tweet.html(`@ <span user=${tweet.user} onclick=${someFunction()}>${tweet.user}</span>: ${tweet.message} `);
      // set attr on div
      // $tweet.attr('user', tweet.user);

      // append to a div instead of the body
      // $tweet.appendTo($body);
      $tweet.appendTo($tweetContent);
    }
  }

  // involked to show initial tweets
  getTweets();
  // retrieve new tweets with setInterval
  // setInterval(getTweets, 5000);

})


// Note: The jQuery library exposes its methods and properties via two properties of the window object called jQuery and $.
// $ is simply an alias for jQuery and it's often employed because it's shorter and faster to write.


// add a click handler to the link:
$( "a" ).click(function( event ) {
  alert( "Thanks for visiting!" );
  // in this case, prevents you from going to link
  event.preventDefault();

  // Special Effects
    // jQuery also provides some handy effects to help you make your web sites stand out. For example, if you create a click handler of:
    // Then the link slowly disappears when clicked.
  $( this ).hide( "slow" );
});

// add a class
$( "a" ).addClass( "test" );
// add styling
$('a.test').css('font-weight', 'bold')
// add muliple styles
$('a.test').css({ color: 'orange', background: 'yellow'})


// setting attributes on the fly
  // $p = $(`<p></p>`)
  // $p.attr('attribute', 'paragraph')
  // $p.text('hi');
  // $p.appendTo('body')
  // $p.attr('onclick', "someFunc()")

// selecting by attribute
  // $( "div,a[user='sharksforcheap']" ).css({color: 'red'})
  // $( "div,a" ).css({color: 'red'})
  // $( "div[user='sharksforcheap']" )


// The onclick="" attribute looks for It's because that function isn't in a global context, which is where your onclick="" is looking for it. You need to move it outside your document.ready (so it's not scoped exclusively to that closure), or (a better approach IMO) bind it inside the document.ready, here's what I mean by each:

  // var someFunc = function(user) {
  //   var $body = $('body')
  //   console.log('this', this);
  //   console.log(user);
  //   // $( `div[user=${user}]` ).css({color: 'red'})
  //   $(`div.all-tweets`).hide(`slow`);
  //
  //   $user = $(`<div friend=${user}></div>`)
  //   $user.appendTo($body)
  //   $(`div.all-tweets[div-user=${user}]`).appendTo($user)
  //
  //
  //
  //   // $(`div.all-tweets[div-user=${user}]`).show(`slow`);
  //
  //
  //   // selecting children with attribute selector
  //     // $( `div` ).children(`span[user=${user}]`).hide('slow')
  //     // $( 'div' ).children(`span[user=${user}]`).show('slow')
  //     // $( `span[user=${user}]` ).show('slow')
  //
  //   // streams.users[user].forEach(function(tweet) {
  //   //   tweet.appendTo
  //   // })
  // }




// streams.users
// console.log('streams.users', JSON.stringify(streams.users, null, 2));

var streamsUsers = {
  "shawndrost": [
    {
      "user": "shawndrost",
      "message": "that wizard formulated the mind #omg",
      "created_at": "2017-06-07T08:58:50.019Z"
    },
    {
      "user": "shawndrost",
      "message": "ask me how i systematized the cloud but only i know how",
      "created_at": "2017-06-07T08:58:50.019Z"
    },
    {
      "user": "shawndrost",
      "message": "last night i navigated my future #ballin",
      "created_at": "2017-06-07T08:58:50.019Z"
    },
    {
      "user": "shawndrost",
      "message": "just developed my worm #magic",
      "created_at": "2017-06-07T08:58:50.019Z"
    },
    {
      "user": "shawndrost",
      "message": " formulated the cloud #yolo",
      "created_at": "2017-06-07T08:58:50.019Z"
    }
  ],
  "sharksforcheap": [
    {
      "user": "sharksforcheap",
      "message": " systematized a future #sf",
      "created_at": "2017-06-07T08:58:50.019Z"
    },
    {
      "user": "sharksforcheap",
      "message": "a ninja interfaced my cat ",
      "created_at": "2017-06-07T08:58:50.019Z"
    },
    {
      "user": "sharksforcheap",
      "message": "last night i invented the life ",
      "created_at": "2017-06-07T08:58:50.019Z"
    }
  ],
  "mracus": [
    {
      "user": "mracus",
      "message": " systematized an entire cat ",
      "created_at": "2017-06-07T08:58:50.019Z"
    },
    {
      "user": "mracus",
      "message": " navigated this cloud #sf",
      "created_at": "2017-06-07T08:58:50.019Z"
    }
  ],
  "douglascalhoun": [
    {
      "user": "douglascalhoun",
      "message": " systematized a new form of potato #sf",
      "created_at": "2017-06-07T08:58:50.019Z"
    }
  ]
}
