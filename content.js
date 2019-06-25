chrome.runtime.onMessage.addListener(gotMessage);
c = false;
function gotMessage(message, sender, sendResponse){
		if(message.txt === "hello"){

			if(document.querySelectorAll('body')[0] && c == false)
			{
				document.querySelectorAll('body')[0].setAttribute('hidden','');
				document.title = 'New Tab';
				c = true;
				for(i=0;i<4;i++)
				{
					(function() {
					    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
					    link.type = 'image/x-icon';
					    link.rel = 'shortcut icon';
					    link.href = 'https://lh3.googleusercontent.com/DDzTH_JblnE0eI64sMhzvg8-Si8pvCi5W3r1rOTjpSAxeGtdTPgDUUhD_RvGxkIIInE=w412-h220-rw';
					    document.getElementsByTagName('head')[0].appendChild(link);
					})();
				}
			}
			else if (document.querySelectorAll('body')[0] && c == true)
			{
				document.querySelectorAll('body')[0].removeAttribute('hidden');
				c=false;
			}
	}
}