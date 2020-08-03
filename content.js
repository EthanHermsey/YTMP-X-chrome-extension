
chrome.runtime.onMessage.addListener( function () {

	if ( document.querySelector( 'ytd-app' ).hasAttribute( 'miniplayer-active_' ) ) {

		//when message is received and the mini player is active: click the close button.
		document.getElementsByClassName( 'ytp-miniplayer-close-button ytp-button' )[ 0 ].click();

	}

} );
