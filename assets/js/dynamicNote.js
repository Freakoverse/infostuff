var $ = document.querySelector.bind( document );
var $$ = document.querySelectorAll.bind( document );

var createEntry = ( nosNPUBName, nosProPic, nosContentText, publishedOn, repliesCountNumber, repostsCountNumber, reactionsCountNumber, zapsCountNumber) => {

var template = `
	<div class="divNoteHolder">
        <div class="divNote">
            <a class="divNoteLink" href="#"></a>
			<div class="divNoteTop">
				<div class="divNoteTopPP"><img id="NosPP" class="divNoteTopPPImg" src="${nosProPic}"></div>
				<div class="divNoteTopName">
					<p id="NosNPUB" class="divNoteTopNamePara">${nosNPUBName}</p>
					<p class="divNoteTopNamePara divNoteTopNameParaDateTime">${publishedOn}</p>
				</div>
			</div>
			<div class="divNoteMid">
				<p id="NosContent" class="divNoteMidPara">${nosContentText}</p>
                <a class="btn btnMain btnNoteFull" type="button">Full View</a>
			</div>
			<div class="divNoteBot">
<div class="divNoteInfo">
    <div class="divNoteInfoBox"><a class="divNoteInfoBoxLink" href="#"><svg class="divNoteInfoBoxLinkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"></path>
            </svg>
            <p class="divNoteInfoBoxLinkPara">${repliesCountNumber}</p>
        </a></div>
    <div class="divNoteInfoBox"><a class="divNoteInfoBoxLink" href="#"><svg class="divNoteInfoBoxLinkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path d="M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"></path>
            </svg>
            <p class="divNoteInfoBoxLinkPara">${repostsCountNumber}</p>
        </a></div>
    <div class="divNoteInfoBox"><a class="divNoteInfoBoxLink" href="#"><svg class="divNoteInfoBoxLinkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path d="M256 287.4V32c0-17.67-14.31-32-32-32S192 14.33 192 32v216.3C218.7 248.4 243.7 263.1 256 287.4zM170.8 251.2c2.514-.7734 5.043-1.027 7.57-1.516L93.41 51.39C88.21 39.25 76.34 31.97 63.97 31.97c-20.97 0-31.97 18.01-31.97 32.04c0 4.207 .8349 8.483 2.599 12.6l81.97 191.3L170.8 251.2zM416 224c-17.69 0-32 14.33-32 32v64c0 17.67 14.31 32 32 32s32-14.33 32-32V256C448 238.3 433.7 224 416 224zM320 352c17.69 0 32-14.33 32-32V224c0-17.67-14.31-32-32-32s-32 14.33-32 32v96C288 337.7 302.3 352 320 352zM368 361.9C356.3 375.3 339.2 384 320 384c-27.41 0-50.62-17.32-59.73-41.55c-7.059 21.41-23.9 39.23-47.08 46.36l-47.96 14.76c-1.562 .4807-3.147 .7105-4.707 .7105c-6.282 0-12.18-3.723-14.74-9.785c-.8595-2.038-1.264-4.145-1.264-6.213c0-6.79 4.361-13.16 11.3-15.3l46.45-14.29c17.2-5.293 29.76-20.98 29.76-38.63c0-34.19-32.54-40.07-40.02-40.07c-3.89 0-7.848 .5712-11.76 1.772l-104 32c-18.23 5.606-28.25 22.21-28.25 38.22c0 4.266 .6825 8.544 2.058 12.67L68.19 419C86.71 474.5 138.7 512 197.2 512H272c82.54 0 151.8-57.21 170.7-134C434.6 381.8 425.6 384 416 384C396.8 384 379.7 375.3 368 361.9z"></path>
            </svg>
            <p class="divNoteInfoBoxLinkPara">${reactionsCountNumber}</p>
        </a></div>
    <div class="divNoteInfoBox"><a class="divNoteInfoBoxLink" href="#"><i class="fas fa-bolt divNoteInfoBoxLinkIcon"></i>
            <p class="divNoteInfoBoxLinkPara">${zapsCountNumber}</p>
        </a></div>
    <div class="divNoteInfoBox"></div>
</div>
</div>
</div>
		</div>
`;

		var div = document.createElement("div");
		div.innerHTML = template;
		div.querySelector("#NosContent").innerText = nosContentText;
		div.querySelector("#NosNPUB").innerText = nosNPUBName;

		return div.firstElementChild;
	}
