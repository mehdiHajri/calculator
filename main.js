var archive=[]
function startResult(str){
  var r =  $("#result").text()
  $("#result").text(r+str) 
}

function clearResult() {
    document.getElementById('result').textContent = ''
  }
  function calculateResult() {
    var result = eval(document.getElementById('result').textContent)
  document.getElementById('result').textContent = result
    archive.push(result)
  }
  function archivee(){
  if(archive.length===0){
    document.getElementById("result").textContent="empty archive"
  }
  for (var i=0;i<archive.length;i++){ 
    if(i===0){
        document.getElementById("result").textContent+="this is archive "+archive[i]
     } 
     else
    {
    document.getElementById("result").textContent+="/"+archive[i]
  } 
  }
  
  }


  