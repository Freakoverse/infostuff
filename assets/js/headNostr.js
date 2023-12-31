var relay = "wss://nostrue.com";
  var socket = new WebSocket( relay );

    var url_params = new URLSearchParams(window.location.search);
    var url_keys = url_params.keys();
    var $_GET = {}
    for (var key of url_keys) $_GET[key] = url_params.get(key);

  socket.addEventListener('message', async function( message ) {
    console.log("Received message data:", message.data);
    var [ type, subId, event ] = JSON.parse( message.data );
    var { kind, content } = event || {}
    if (!event || event === true) return
    //console.log('message:', event)
    if (kind === 4) {
      content = await decrypt(privKey, event.pubkey, content)
    }
    //console.log('content:', content)

    if (kind === 1){
      var now = Math.floor(Date.now()/1000);
      //event = JSON.parse(content);
      var obj = {
            nosNPUBName: event.pubkey.substring(0,20)+"...",
    		nosProPic: "https://cdn.nostr.build/i/0ee39010157559115d847ee20e8ede0a64bc38fef7707cda9ed96b9587c0ccea.jpg",
    		nosContentText: event.content,
            publishedOn: convertHMS(now - event.created_at),
            repliesCountNumber: "0",
            repostsCountNumber: "0",
            reactionsCountNumber: "0",
            zapsCountNumber: "0",
      }
      $( '#NosNotesHolder' ).append( createEntry( obj["nosNPUBName"], obj["nosProPic"], obj["nosContentText"], obj["publishedOn"], obj["repliesCountNumber"], obj["repostsCountNumber"], obj["reactionsCountNumber"], obj["zapsCountNumber"], event.id));
    }
  })

  socket.addEventListener('open', async function( e ) {
    console.log( "connected to " + relay )

    var subId   = bitcoinjs.ECPair.makeRandom().privateKey.toString( "hex" ).substring(0,16)
    if (!$_GET["post"]){
        var filter = { "kinds": [ 1 ], "limit": 10 }
        }
      else {
            var filter = {"ids": [$_GET["post"]]}
    }
    var subscription = [ "REQ", subId, filter ]
    //console.log('Subscription:', subscription)

    socket.send(JSON.stringify( subscription ));

  }) //close this bracket, but we’ll put more stuff in here later


  function hexToBytes( hex ) {
    return Uint8Array.from( hex.match( /.{1,2}/g ).map( ( byte ) => parseInt( byte, 16 ) ) );
  }

  function bytesToHex( bytes ) {
    return bytes.reduce( ( str, byte ) => str + byte.toString( 16 ).padStart( 2, '0' ), '' );
  }


  function base64ToHex( str ) {
    var raw = atob( str );
    var result = '';
    var i; for ( i=0; i<raw.length; i++ ) {
      var hex = raw.charCodeAt( i ).toString( 16 );
      result += ( hex.length === 2 ? hex : '0' + hex );
    }
    return result;
  }


  function convertHMS(value) {
    if (value < 0) {
      value = 0;
    }

    const sec = parseInt(value, 10); // convert value to number if it's a string
    let years = Math.floor(sec / 31536000); // get years
    let months = Math.floor((sec - years * 31536000) / 2592000); // get months
    let days = Math.floor((sec - years * 31536000 - months * 2592000) / 86460); // get days
    let hours = Math.floor((sec - years * 31536000 - months * 2592000 - days * 86400) / 3600); // get hours
    let minutes = Math.floor((sec - years * 31536000 - months * 2592000 - days * 86460 - hours * 3600) / 60); // get minutes
    let seconds = sec - years * 31536000 - months * 2592000 - days * 86400 - hours * 3600 - minutes * 60; // get seconds

    var yearsstring = years > 1 ? 'years' : 'year';
    var monthsstring = months > 1 ? 'months' : 'month';
    var daysstring = days > 1 ? 'days' : 'day';
    var hoursstring = hours > 1 ? 'hours' : 'hour';
    var minutesstring = minutes > 1 ? 'minutes' : 'minute';
    var secondsstring = seconds > 1 ? 'seconds' : 'second';

    if (years > 0) return `${years} ${yearsstring} ago`;
    if (months > 0) return `${months} ${monthsstring} ago`;
    if (days > 0) return `${days} ${daysstring} ago`;
    if (hours > 0) return `${hours} ${hoursstring} ago`;
    if (minutes > 0) return `${minutes} ${minutesstring} ago`;
    if (seconds == 0) return `${seconds} seconds ago`;
    return `${seconds} ${secondsstring} ago`;
  }
