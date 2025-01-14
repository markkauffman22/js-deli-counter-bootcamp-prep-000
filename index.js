// Deli Counter - program "Take a Number" feature for the counter.

// input --> var katzDeliLine = [];

function takeANumber (curLinePeople, newPersonName) {
  curLinePeople.push(newPersonName);
  var curLineLen = curLinePeople.length ;
  return ("Welcome, " + newPersonName + ". You are number " +  curLineLen + " in line.")
}

function nowServing (katzDeliLine) {

  if (katzDeliLine.length === 0) {
     return ("There is nobody waiting to be served!");
  }
  // run the currentLine function to 'process' the katzDeliLine queue (array)
  currentLine(katzDeliLine);
  var curPerson =  katzDeliLine[0];
  
  // return the first person in line and remove that individual from the line
  katzDeliLine.shift();
  return ("Currently serving " + curPerson + ".");
}

function currentLine(line) {
  var outputStr = "The line is currently: ";
  
  if (line.length === 0) {
     return ("The line is currently empty.");
  }
  for (var i = 0; i < line.length; i++) {
    var pos = i + 1;
    outputStr = outputStr + pos + ". " + line[i] ;
    if (pos != line.length) {
      outputStr = outputStr + ", "
    }
    //expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
  }
    return (outputStr );
}

 