
chrome.tabs.onUpdated.addListener( function ( tabId, info ) {

	if ( info.state = "complete" ) {

		//send a message to the content script to close the mini player
		chrome.tabs.sendMessage( tabId, { id: tabId } );

	}

} );


