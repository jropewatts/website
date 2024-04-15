<script>

var textareas = document.querySelectorAll('textarea');

// Add input event listener to each textarea
for (let i = 0; i < textareas.length; i++) {
    textareas[i].addEventListener('input', function(e) {
        // Get the input value
        var inputValue = e.target.value;

        // Check if the input value is not in the allowed characters or if it exceeds 4 characters
        if (!/^[EFGHefgh]*$/.test(inputValue) || inputValue.length > 4) {
            // If it does, prevent the input and alert the user
            e.target.value = e.target.value.substring(0, e.target.value.length - 1);
            alert('Only EFGHefgh are allowed with a max of 4 letters per box');
        }
    });
}


document.getElementById("convertButton").addEventListener("click", convert);
function convert() {
  let select1 = document.getElementById("select1").value.trim();
  let select2 = document.getElementById("select2").value.trim();
  let select3 = document.getElementById("select3").value.trim();
  let select4 = document.getElementById("select4").value.trim();
  let output1 = '';
  let output2 = '';
  let output3 = '';
  let output4 = '';

  let mapping = {
    'E': 'inA',
    'F': 'inB',
    'G': 'inC',
    'H': 'inD',
    'e': 'not inA',
    'f': 'not inB',
    'g': 'not inC',
    'h': 'not inD'
  };

  if (select1 === '' && select2 === '' && select3 === '' && select4 === '') {
    return;
  }


  for (let key in mapping) {
    if (select1.includes(key)) {
      if (output1 !== '') {
        output1 += ' and ';
      }
      output1 += mapping[key];
    }
    if (select2.includes(key)) {
      if (output2 !== '') {
        output2 += ' and ';
      }
      output2 += mapping[key];
    }
	if (select3.includes(key)) {
      if (output3 !== '') {
        output3 += ' and ';
      }
      output3 += mapping[key];
    }
	if (select4.includes(key)) {
      if (output4 !== '') {
        output4 += ' and ';
      }
      output4 += mapping[key];
    }
  }

   let finalOutput = output1;

  if (select2 !== '') {
    finalOutput += " or " + output2;
  }
  if (select3 !== '') {
    finalOutput += " or " + output3;
  }
  if (select4 !== '') {
    finalOutput += " or " + output4;
  }

  document.getElementById("output").value = finalOutput + " as 'out'";
}

function copyToClipboard() {
  let copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

function ClearFields() {
  document.getElementById("select1").value = "";
  document.getElementById("select2").value = "";
  document.getElementById("select3").value = "";
  document.getElementById("select4").value = "";
  document.getElementById("output").value = "";
}

</script>