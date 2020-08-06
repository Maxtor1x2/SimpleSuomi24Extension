/** Get a date from a comment user info container **/

/** document.getElementsByClassName('ThreadBody__ReadMoreButton-sc-1mjl49q-2')[0].click(); **/
/** Lisätty sivun alas vieritys joka varmistaa koko sivun renderöinnin **/
var scrolldelay;
var EkaScroll;


/*
 * Tähän on lisätty Page Right ja Page Left näppäimille tehtävä
 * jolla sivua siistitään PDF tulostusta varten.
*/
document.onkeydown = function (e) { 
  e = e || window.event; 
  var charCode = (e.charCode) ? e.charCode : e.keyCode;

  if (charCode == 37) {
  let x = document.activeElement.tagName;
  if ( x != "TEXTAREA" ) { 
	  document.getElementsByClassName('LeftSidePanel__Wrapper-tz92ss-0 esrkdV')[0].style.display = 'block';
	  document.getElementsByClassName('Header__StickyWrapper-sc-1lviqz7-6 lhTttk')[0].style.display = 'block';
	  document.getElementsByClassName('Header__S24Navbar-sc-1lviqz7-2 fxMXcP promotion-links-nav')[0].style.display = 'block';
	  document.getElementsByClassName('Footer__FlexColumnWrapper-jvilwk-1 ehxOeQ footer')[0].style.display = 'block';
	  document.getElementsByClassName('ReplyToThreadButton__Button-j4oz46-2 cJzJow ReplyToThreadButton-j4oz46-3 eehJcA')[0].style.display = 'block';
	}
  }
  else if (charCode == 39) {
  let x = document.activeElement.tagName;
  if ( x != "TEXTAREA" ) { 
	  document.getElementsByClassName('LeftSidePanel__Wrapper-tz92ss-0 esrkdV')[0].style.display = 'none';
	  document.getElementsByClassName('Header__StickyWrapper-sc-1lviqz7-6 lhTttk')[0].style.display = 'none';
	  document.getElementsByClassName('Header__S24Navbar-sc-1lviqz7-2 fxMXcP promotion-links-nav')[0].style.display = 'none';
	  document.getElementsByClassName('Footer__FlexColumnWrapper-jvilwk-1 ehxOeQ footer')[0].style.display = 'none';
	  document.getElementsByClassName('ReplyToThreadButton__Button-j4oz46-2 cJzJow ReplyToThreadButton-j4oz46-3 eehJcA')[0].style.display = 'none';
	}
  }
};

document.addEventListener("keyup", o);

function o(event) {
if (event.keyCode===81 && event.ctrlKey ) { BadWords(); }
};


// POISTAA LOUKKAAVAT KETJUT
function BadWords() {
let ur = window.location.href
let OK = "https://keskustelu.suomi24.fi/tiede-ja-teknologia/tietotekniikka"
pos = ur.search(OK);
if (pos >= 0) {
	var BadWord = ["indows", "W10", "in10", "Kyppi", "Winhihhulit", "Winvajakit", "win-trolli", "Winvajakki", "inkura", "ainoks", "öllöaalto", "inkura", "buntu","inuksia","dge","w10","inuks"];
	var x = BadWord.length;
	var PoistetutKetjut = 0;

	for (j = 0; j < x; j++) {
		for (i = 0; i < 20; i++) {
			let a1 = document.getElementsByClassName("ThreadCard__CardWrapper-bya6cm-1 hdaYsh")[i].innerText;
			var pos = a1.search(BadWord[j]);
			if (pos < 0 ) {
				let a1 = document.getElementsByClassName("ThreadCard__BodyWrapper-bya6cm-2 gWImKi")[i].innerText;
				pos = a1.search(BadWord[j]);
				}
			if (pos >= 0) {
				if (document.getElementsByClassName("ThreadCard__CardWrapper-bya6cm-1 hdaYsh")[i].style.display != "none" ) {
					PoistetutKetjut = PoistetutKetjut + 1;
					document.getElementsByClassName("ThreadCard__CardWrapper-bya6cm-1 hdaYsh")[i].style.display = "none";
					}
					

				}
			}
		}
	}
let msg = "Loukkaavan sisältönsä vuoksi poistettu: " + PoistetutKetjut + " ketju(a).";
document.getElementsByClassName('TopicViewPage__AdWrapper-i7x11t-5 aOOPO')[0].innerText = msg;
document.getElementsByClassName('TopicViewPage__AdWrapper-i7x11t-5 aOOPO')[0].style = "text-align: center; margin-top: 2px;";
}


// POISTAA LOUKKAAVAT VIESTIT
function TrimViestit() {
	let ur = window.location.href
	let OK = "https://keskustelu.suomi24.fi/t/"
	pos = ur.search(OK);
	if (pos >= 0) {
		var PoistetutViestit = 0;
		var PistetutViittaukset = 0;
		var BadWord = ["bioksen","mytomaani","winhihhuli","trolli","atajätkä","homo","Pata"];
		let allP = document.querySelectorAll('.CommentListItem__Text-tg4aw6-3').length;
		let msg = 'Tämä viesti on poistettu, loukkaavan sisältönsä vuoksi!';
		for (let i = 0; i < allP; i++) {
			let t = document.getElementsByClassName('CommentListItem__Text-tg4aw6-3')[i].innerText;
			for (let j = 0; j < BadWord.length; j++) {
				var n = t.search(BadWord[j]);
				if (n >= 0) break;
			}
			
			if (n >= 0) {
				//console.log(t);
				PoistetutViestit = PoistetutViestit + 1;
				document.getElementsByClassName('CommentListItem__Text-tg4aw6-3')[i].style.color = 'DarkGrey';
				document.getElementsByClassName('CommentListItem__Text-tg4aw6-3')[i].innerText = msg;
			}
		}
			
		msg = 'Tämä viite on poistettu, loukkaavan sisältönsä vuoksi!';
		allP = document.querySelectorAll('.CommentQuote-sc-1qwad6i-0').length;
		for (let i = 0; i < allP; i++) {
			let t = document.getElementsByClassName('CommentQuote-sc-1qwad6i-0')[i].innerText;
			for (let j = 0; j < BadWord.length; j++) {
				var n = t.search(BadWord[j]);
				if (n >= 0) break;
			}
				
			if (n >= 0) {
				//console.log(t);
				PistetutViittaukset = PistetutViittaukset + 1;
				document.getElementsByClassName('CommentQuote-sc-1qwad6i-0')[i].style.color = 'DarkGrey';
				document.getElementsByClassName('CommentQuote-sc-1qwad6i-0')[i].innerText = msg;
			}
		}
	}
	msg = "Poistetut viestit: " + PoistetutViestit + "        Poistetut viittaukset: " + PistetutViittaukset;
	document.getElementsByClassName('ThreadView__AdWrapper-sc-1va8w8b-14 hhkOmi')[0].innerText = msg;
	document.getElementsByClassName('ThreadView__AdWrapper-sc-1va8w8b-14 hhkOmi')[0].style = "text-align: center;";
}
	

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		clearTimeout(scrolldelay);
	if (EkaScroll === 1) {
		window.scrollTo(0,100);
		EkaScroll = 0;
		TrimViestit();

	}
    }
};


if (document.readyState === "complete" || document.readyState === "interactive") {
	BadWords();
	let onko = document.getElementsByClassName('TopicViewPage__Description-i7x11t-7 eplqYv');
	if (onko.length === 0) {
		function pageScroll(speed) {
			window.scrollBy(0,50);
			scrolldelay = setTimeout(pageScroll,speed);	
		};
		pageScroll(1000);		
    };
    var EkaScroll = 1;
   };
   
   
let readMoreButt = document.querySelector("button.ThreadBody__ReadMoreButton-vlae9c-2");
    if (readMoreButt) {
		readMoreButt.click();
	}




/** Nämä "class" nimet saattavat muuttua päivityksissä **/
/** <time class="ThreadUser__Timestamp-sugcdk-1 Wmdss">Eilen 21:51</time> **/
let timeMaker = container => {
    let tEl = container.querySelector(".ThreadUser__Timestamp-sugcdk-1");
    if (!tEl) return new Date(0);
    let tStr = tEl.innerText.trim().toLocaleLowerCase();
    let year, month, day, hour, minute;
    let currDate = new Date();
    if (tStr.substring(0, 6) === "tänään") {
        year = currDate.getFullYear();
        month = currDate.getMonth();
        day = currDate.getDate();
    } else if (tStr.substring(0, 5) === "eilen") {
        let yesterDate = new Date(+currDate-86400000) //1000*60*60*24 = one full day
        year = yesterDate.getFullYear();
        month = yesterDate.getMonth();
        day = yesterDate.getDate();
    } else {
        let dateStr = tStr.split(" ")[0];
        [day, month, year] = dateStr.split(".").map(x=>parseInt(x));
        month -= 1; //moth is zero-based!
    }
    let timeStr = tStr.split(" ")[1];
    [hour, minute] = timeStr.split(":").map(x=>parseInt(x));
    return new Date(year, month, day, hour, minute);
};




/** Nämä "class" nimet saattavat muuttua päivityksissä */
/** <time class="ThreadUser__Timestamp-sugcdk-1 Wmdss">Eilen 21:51</time> **/
let getAllUserInfos = () => {
	let ret = Array.from(document.querySelectorAll(".ThreadComments__CommentResponsesItem-xoykri-7")).concat(Array.from(document.querySelectorAll(".ThreadComments__CommentItem-xoykri-4")));
    ret.forEach(c=>{c.dateForSorting = timeMaker(c);});
    ret.sort((a,b)=>+a.dateForSorting-b.dateForSorting);
    return ret;
};




/** scroll the page to the @postIndex'th user info container, ordering by timestamp **/
var moveInfoToUserPost = function(postIndex) {
    var userEls = getAllUserInfos();
    var elsN = userEls.length;
    if (elsN>0) {
        var elInd = (postIndex%elsN+elsN)%elsN;
        var el = userEls[elInd];
        var topPos = el.offsetTop;
        window.scrollTo(window.scrollX, topPos);
    }
};




var setKeyboardFindMsgListener = function() {
    let ob = {
        useKeyboard: true,
        prevKeyCode: {
            code: 33, //PG UP
            alt: false,
            ctrl: false,
            shift: false,
            },
        nextKeyCode: {
            code: 34, //PG DOWN
            alt: false,
            ctrl: false,
            shift: false,
        },
    };


    if (ob && ob.useKeyboard) {
		var postInd = 0; //assume want to go to the most recent (with prev button) first
        var checkKeyCodeFunc = function(keyCode, event) {
			clearTimeout(scrolldelay);
            if (!keyCode) return false;
            return event.keyCode === keyCode.code
                && event.altKey === keyCode.alt
                && event.ctrlKey === keyCode.ctrl
                && event.shiftKey === keyCode.shift;
        };

        var onKeyDownFunc = function(postIndIncr, event) {
            postInd += postIndIncr;
            moveInfoToUserPost(postInd);
            event.preventDefault();
        };

        var keyListener = function(event) {
            console.log("key down", event.keyCode);
            if (checkKeyCodeFunc(ob.prevKeyCode, event)) {
                onKeyDownFunc(-1, event);
            } else if (checkKeyCodeFunc(ob.nextKeyCode, event)) {
                onKeyDownFunc(1, event);
            }
        };
        document.body.addEventListener("keydown", keyListener);
    }
};




setKeyboardFindMsgListener();
