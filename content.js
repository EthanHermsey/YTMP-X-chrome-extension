
chrome.runtime.onMessage.addListener( () => {

	setTimeout( ()=>{

		if ( ! document.querySelector( 'ytd-miniplayer' ).hasAttribute( 'closed' ) ||
            document.querySelector( 'ytd-miniplayer' ).hasAttribute( 'active' ) ) {

			const btn = document.querySelector( 'yt-icon-button.style-scope.ytd-miniplayer' );
			btn.click();

		}

	}, 2000 );

} );
