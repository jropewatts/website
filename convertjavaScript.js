function convert() {
	let text3 = document.getElementById("select3").value;
    let text4 = document.getElementById("select4").value;
	let text5 = document.getElementById("select5").value;
	let text6 = document.getElementById("select6").value;
	let text = document.getElementById("text").value;
	let regex = /<BoundLabel layout="(\d+\.\d+,\d+\.\d+,\d+\.\d+,\d+\.\d+)""/g;
	let newText = "";
  
  text.split("\n").forEach((line) => {

if (line.includes("S")) {
	let newLine = line.replace(regex, '<BoundLabel layout="$1" ');
        newLine = newLine.replace(/text="[^"]*\//i, '>\n <BoundLabelBinding '+[text4]+ 'L' + line.match(/L(\d+)/)[1].padStart(3,'0') + '/O' + line.match(/O(\d+)/)[1].padStart(2,'0') + '/points/' );
	let num = newLine.match(/[S](\d+)/)[1];
        newLine = newLine.replace(/[S]\d+/, `${newLine.match(/[S]/)}${num.padStart(4, '0')}`);
		newLine = newLine.replace(/foreground="[^"]*"/i, '\n  <ObjectToString name="text" format="'+[text6]+'"/>\n </BoundLabelBinding>\n');
		newLine = newLine.replace(/blink="true"\/>/i,'');
		newLine = newLine.replace(/" font="[^"]*"/i,'" summary="'+[text3]+'" statusEffect="'+[text5]+'">');
		newText += newLine + '';
		newText += '<PopupBinding '+[text4]+ 'L' + line.match(/L(\d+)/)[1].padStart(3,'0') + '/O' + line.match(/O(\d+)/)[1].padStart(2,'0') + '/points/S' + line.match(/S(\d+)/)[1].padStart(4,'0') + '|view:webChart:ChartWidget" title=""/>\n</BoundLabel>\n\n';   
		
} else if(line.includes("I"))  {
    let newLine = line.replace(regex, '<BoundLabel layout="$1 " ');
		newLine = newLine.replace(/text="[^"]*\//i, '>\n <BoundLabelBinding '+[text4]+ 'L' + line.match(/L(\d+)/)[1].padStart(3,'0') + '/O' + line.match(/O(\d+)/)[1].padStart(2,'0') + '/points/' );
	let num = newLine.match(/[I](\d+)/)[1];
        newLine = newLine.replace(/[I]\d+/, `${newLine.match(/[I]/)}${num.padStart(4, '0')}`);
		newLine = newLine.replace(/foreground="[^"]*"/i, '\n  <ObjectToString name="text" format="'+[text6]+'"/>\n </BoundLabelBinding>\n</BoundLabel>\n');
		newLine = newLine.replace(/blink="true"\/>/i,'');
		newLine = newLine.replace(/" font="[^"]*"/i,'" summary="'+[text3]+'" statusEffect="'+[text5]+'">');
		newText += newLine + "\n";     

} else if(line.includes("D"))  {
    let newLine = line.replace(regex, '<BoundLabel layout="$1 " ');
		newLine = newLine.replace(/text="[^"]*\//i, '>\n <BoundLabelBinding '+[text4]+ 'L' + line.match(/L(\d+)/)[1].padStart(3,'0') + '/O' + line.match(/O(\d+)/)[1].padStart(2,'0') + '/points/' );
	let num = newLine.match(/[D](\d+)/)[1];
        newLine = newLine.replace(/[D]\d+/, `${newLine.match(/[D]/)}${num.padStart(4, '0')}`);
		newLine = newLine.replace(/foreground="[^"]*"/i, '\n  <ObjectToString name="text" format="'+[text6]+'"/>\n </BoundLabelBinding>\n</BoundLabel>\n');
		newLine = newLine.replace(/blink="true"\/>/i,'');
		newLine = newLine.replace(/" font="[^"]*"/i,'" summary="'+[text3]+'" statusEffect="'+[text5]+'">');
		newText += newLine + "\n\n";     

} else if (line.includes("K")) {
	let newLine = line.replace(regex, '<BoundLabel layout="$1" ');
		newLine = newLine.replace(/BoundLabel layout="/i,'ImageButton layout="' );
        newLine = newLine.replace(/text="[^"]*\//i, 'styleClasses="toolbar" buttonStyle="toolBar">\n <ActionBinding '+[text4]+ 'L' + line.match(/L(\d+)/)[1].padStart(3,'0') + '/O' + line.match(/O(\d+)/)[1].padStart(2,'0') + '/points/' );
	let num = newLine.match(/[K](\d+)/)[1];
        newLine = newLine.replace(/[K]\d+/, `${newLine.match(/[K]/)}${num.padStart(4, '0')}`);
		newLine = newLine.replace(/foreground="[^"]*"/i, '');
		newLine = newLine.replace(/blink="true"\/>/i,'');
		newLine = newLine.replace(/" font="[^"]*"/i,'/set" widgetEvent="actionPerformed"/> ');
		newText += newLine + '';
		newText += '\n  <ValueBinding '+[text4]+ 'L' + line.match(/L(\d+)/)[1].padStart(3,'0') + '/O' + line.match(/O(\d+)/)[1].padStart(2,'0') + '/points/K' + line.match(/K(\d+)/)[1].padStart(4,'0') + '" summary="'+[text3]+'">\n <ObjectToString name="text" format="'+[text6]+'"/>\n </ValueBinding>\n</ImageButton>';   

} else if (line.includes("Z")) {
	let newLine = line.replace(regex, '<BoundLabel layout="$1" ');
		newLine = newLine.replace(/text="[^"]*\//i, 'image="module://icons/x32/calendar.png">\n <BoundLabelBinding '+[text4]+ 'L' + line.match(/L(\d+)/)[1].padStart(3,'0') + '/O' + line.match(/O(\d+)/)[1].padStart(2,'0') + '/schedules/' );
	let num = newLine.match(/[Z](\d+)/)[1];
        newLine = newLine.replace(/[Z]\d+/, `${newLine.match(/[Z]/)}${num.padStart(4, '0')}`);
		newLine = newLine.replace(/foreground="[^"]*"/i, '\n   <ObjectToString name="text" format="'+[text6]+'"/>\n  </BoundLabelBinding>');
		newLine = newLine.replace(/blink="true"\/>/i,'');
		newLine = newLine.replace(/" font="[^"]*"/i,'_IMP" summary="'+[text3]+'" statusEffect="'+[text5]+'"> ');
		newText += newLine + '';
		newText += '\n  <PopupBinding '+[text4]+ 'L' + line.match(/L(\d+)/)[1].padStart(3,'0') + '/O' + line.match(/O(\d+)/)[1].padStart(2,'0') + '/schedules/Z' + line.match(/Z(\d+)/)[1].padStart(4,'0') + '_IMP/ext|view:scheduleHome" title=""/>\n</BoundLabel>';   
				

} else if (line.includes("W")) {
    	let newLine = line.replace(regex, '<BoundLabel layout="$1" ');
		newLine = newLine.replace(/BoundLabel layout="/i,'ToggleButton layout="' );
        newLine = newLine.replace(/text="[^"]*\//i, 'styleClasses="toolbar" buttonStyle="toolBar">\n <SetPointBinding '+[text4]+ 'L' + line.match(/L(\d+)/)[1].padStart(3,'0') + '/O' + line.match(/O(\d+)/)[1].padStart(2,'0') + '/points/' );
	let num = newLine.match(/[W](\d+)/)[1];
        newLine = newLine.replace(/[W]\d+/, `${newLine.match(/[W]/)}${num.padStart(4, '0')}`);
		newLine = newLine.replace(/foreground="[^"]*"/i, '\n  <ObjectToString name="text" format="'+[text6]+'"/>\n </SetPointBinding>\n</ToggleButton>\n');
		newLine = newLine.replace(/blink="true"\/>/i,'');
		newLine = newLine.replace(/" font="[^"]*"/i,'" summary="'+[text3]+'" widgetEvent="actionPerformed" widgetProperty="selected"> ');
		newText += newLine + '';
		
		
} else {
      newText += line + "\n";
    }
  });
  
  newText = newText.replace(/L(\d+)/g, (_, num) => `L${num.padStart(3, '0')}`);
  newText = newText.replace(/O(\d+)/g, (_, num) => `O${num.padStart(3, '0')}`);

 
  
  document.getElementById("output").value = newText;
}

function copyToClipboard() {
  let copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

		 function ClearFields() {
      document.getElementById("text").value = "";
      document.getElementById("output").value = "";
}

//newText = newText.replace(/\/>/i,'');newText = newText.replace(/\/>/i,''); newText = newText.replace(/(L\d+\/O\d+\/)([A-Z]\d+)/g, '$1points/$2');//
