var $ = document.querySelector.bind( document );
var $$ = document.querySelectorAll.bind( document );

var createEntry = ( nosNPUBName, nosProPic, nosContentText) => {

var template = `
	<a id="NosNoteLink" class="divNoteLink" href="#">
		<div id="NosNote" class="divNote">
			<div class="divNoteTop">
				<div class="divNoteTopPP"><img id="NosPP" class="divNoteTopPPImg" src="${nosProPic}"></div>
				<div class="divNoteTopName">
					<p id="NosNPUB" class="divNoteTopNamePara">${nosNPUBName}</p>
				</div>
			</div>
			<div class="divNoteMid">
				<p id="NosContent" class="divNoteMidPara">${nosContentText}</p>
			</div>
			<div class="divNoteBot"></div>
		</div>
	</a>
`;

		var div = document.createElement("div");
		div.innerHTML = template;
		div.querySelector("#NosContent").innerText = nosContentText;
		div.querySelector("#NosNPUB").innerText = nosNPUBName;

		return div.firstElementChild;
	}
	var entries = [{
		nosNPUBName: "banan",
		nosProPic: "banan",
		nosContentText: "banan",
	}];
	entries.forEach(item => {
		//$( '#NosNotesHolder' ).append( createEntry( item["nosNPUBName"], item["nosProPic"], item["nosContentText"]) );
	})