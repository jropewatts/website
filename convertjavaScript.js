function convert() {
	let text1 = document.getElementById("select1").value;
	let text2 = document.getElementById("select2").value;
	let text3 = document.getElementById("select3").value;
    let text4 = document.getElementById("select4").value;
	let text5 = document.getElementById("select5").value;
	let text = document.getElementById("text").value;
	let regex = /<BoundLabel layout="(\d+\.\d+,\d+\.\d+,\d+\.\d+,\d+\.\d+)""/g;
	let newText = "";
  
  text.split("\n").forEach((line) => {
  
if (line.includes("I"))  {
    let newLine = line.replace(regex, '<BoundLabel layout="$1 " ' );
		newLine = newLine.replace(/L(\d{2})/i, '\n  <BoundLabelBinding '+[text4] + 'L0$1')
		newLine = newLine.replace(/font="[^"]*"/i, '');
		newLine = newLine.replace(/foreground="[^"]*"/i, 'summary="' +[text3] + '" statusEffect="' + [text5] + '">\n <ObjectToString name="text" format="%out.value%"/>\n  </BoundLabelBinding>\n  </BoundLabel> \n');
        newLine = newLine.replace(/text="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,5}\//i, [text1]+ [text2]+'>');
    let num = newLine.match(/[I](\d+)/)[1];
        newLine = newLine.replace(/[I]\d+/, `${newLine.match(/[I]/)}${num.padStart(4, '0')}`);
        newLine = newLine.replace(/ blink="true"/i,'');
      	newText += newLine + "\n";
        
} else if (line.includes("D")) {
    let newLine = line.replace(regex, '<BoundLabel layout="$1" ');
		newLine = newLine.replace(/L(\d{2})/i, '\n  <BoundLabelBinding '+[text4] +  'L0$1')
     	newLine = newLine.replace(/font="[^"]*"/i,'summary="' +[text3]+ '" statusEffect="' + [text5] + '">\n <ObjectToString name="text" format="%out.value%"/>\n  </BoundLabelBinding>\n  </BoundLabel> \n');
		newLine = newLine.replace(/foreground="[^"]*"/i, '');
        newLine = newLine.replace(/text="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,5}\//i, [text1]+ [text2]+ '>' );
    let num = newLine.match(/[D](\d+)/)[1];
        newLine = newLine.replace(/[D]\d+/, `${newLine.match(/[D]/)}${num.padStart(4, '0')}`);
        newLine = newLine.replace(/ blink="true"/i,'');
      	newText += newLine + "\n";
     
} else if (line.includes("W")) {
    let newLine = line.replace(regex, '<BoundLabel layout="$1"');
      	newLine = newLine.replace(/BoundLabel layout="/i,'ToggleButton layout="' );
		newLine = newLine.replace(/L(\d{2})/i, '<SetPointBinding '  + [text4] +'L0$1')
		newLine = newLine.replace(/font="[^"]*"/i,'');
		newLine = newLine.replace(/foreground="[^"]*"/i,'widgetEvent="actionPerformed" widgetProperty="selected">\n<ObjectToString name="text" format="%out.value%"/>\n</SetPointBinding>\n<ValueBinding/>\n</ToggleButton>');
        newLine = newLine.replace(/text="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,5}\//i, [text1]+  '>\n' );
    let num = newLine.match(/[W](\d+)/)[1];
        newLine = newLine.replace(/[W]\d+/, `${newLine.match(/[W]/)}${num.padStart(4, '0')}`);
        newLine = newLine.replace(/ blink="true"/i,'');
        newText += newLine + "\n";
		newText += '\n';
	 
} else if (line.includes("S")) {
	let newLine = line.replace(regex, '<BoundLabel layout="$1"' );
		newLine = newLine.replace(/L(\d{2})/i, [text1] + [text2] + '>\n' + '<BoundLabelBinding ' + [text4] + 'L0$1')
		newLine = newLine.replace(/" font="[^"]*" foreground="[^"]*"/i,  '' );
		newLine = newLine.replace(/text="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,5}\//i, '' );
	let num = newLine.match(/[S](\d+)/)[1];
		newLine = newLine.replace(/[S]\d+/, `${newLine.match(/[S]/)}${num.padStart(4, '0')}` + '"  statusEffect="' + [text5] + '"> \n<ObjectToString name="text" format="%out.value%"/> \n</BoundLabelBinding>' );
		newLine = newLine.replace(/ blink="true"/i, '' );
		newText += newLine + "\n";
		newText += '<PopupBinding '+ [text4] + 'L' + line.match(/L(\d+)/)[1].padStart(3,'0') + '/O' + line.match(/O(\d+)/)[1].padStart(2,'0') + '/S' + line.match(/S(\d+)/)[1].padStart(4,'0') + '|view:webChart:ChartWidget" title=""/>\n</BoundLabel>' ;   
		newText += '\n';
   
} else if (line.includes("K")) {
	let newLine = line.replace(regex, '<BoundLabel layout="$1"');
		newLine = newLine.replace(/BoundLabel layout="/i,'ImageButton layout="' );
		newLine = newLine.replace(/L(\d{2})/i, '\n <ActionBinding ' + [text4] + 'L0$1')
		newLine = newLine.replace(/" font="[^"]*" foreground="[^"]*"/i, '' );
		newLine = newLine.replace(/text="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,5}\//i,'>' );
	let num = newLine.match(/[K](\d+)/)[1];
		newLine = newLine.replace(/[K]\d+/, `${newLine.match(/[K]/)}${num.padStart(4, '0')}` + '/set" widgetEvent="actionPerformed"/>\n <WsAnnotation name="wsAnnotation" value="6,6,8"');
		newLine = newLine.replace(/ blink="true"/i,'' ); 
		newText += newLine + "\n";
		newText += ' <ValueBinding '+ [text4] + 'L' + line.match(/L(\d+)/)[1].padStart(3,'0') + '/O' + line.match(/O(\d+)/)[1].padStart(2,'0') + '/K' + line.match(/K(\d+)/)[1].padStart(4,'0') + '" summary="%parent.parent.parent.name% %parent.parent.name% %proxyExt.trendItemReference% = %.%;  " popupEnabled="false"> \n  <ObjectToString name="text" format="%out.value%"/>\n </ValueBinding>\n  </ImageButton>' ;   
		newText +=  "\n" ;
		
} else if (line.includes("GalileoBoundLabelBinding")) {
	let newLine = line.replace(regex, '<BoundLabel layout="$1"');
	
	  
} else {
      newText += line + "\n";
    }
  });
  
  newText = newText.replace(/L(\d{2})/g, 'L$1').replace(/O(\d{2})/g, 'O0$1'+ '/points')
 
  
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