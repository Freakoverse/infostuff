var relay = "wss://relay.damus.io";
  var socket = new WebSocket( relay );


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
      //event = JSON.parse(content);
      var obj = {
        nosNPUBName: event.pubkey.substring(0,20)+"...",
    		nosProPic: "banan",
    		nosContentText: event.content.substring(0,100)+" ...",
      }
      $( '#NosNotesHolder' ).append( createEntry( obj["nosNPUBName"], obj["nosProPic"], obj["nosContentText"]) );
    }
  })

  socket.addEventListener('open', async function( e ) {
    console.log( "connected to " + relay )

    var subId   = bitcoinjs.ECPair.makeRandom().privateKey.toString( "hex" ).substring(0,16)
    var filter  = { "kinds": [ 1 ], "limit": 20 }
    var subscription = [ "REQ", subId, filter ]
    console.log('Subscription:', subscription)

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