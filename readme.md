
# YouTube MiniPlayer Closer Chrome Extension.

### This extention automatically closes the YouTube mini player.

__Install:
* Download all files to a folder.

* Open chrome and type chrome://extensions in the adresbar.

* In the top-right, enable developer mode.

* In the top-left, click 'load unpacked' and select the folder where you downloaded    
  the files.


__How the code works:

It's a pretty simple extension. The background script checks for updates on the youtube page. For example pressing the back button of the YouTube logo. When it detects an update, it sends a message to the content script.
The content script checks if the miniplayer is enabled and automatically clicks the close button.
