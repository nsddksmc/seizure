function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5t1FI5hHVD0":
        Script1();
        break;
      case "5c13FsJ4FXC":
        Script2();
        break;
      case "6MH25QZliig":
        Script3();
        break;
      case "6FcLaz8hGpo":
        Script4();
        break;
      case "6gf6Kro2NQX":
        Script5();
        break;
      case "6W8c013c36Z":
        Script6();
        break;
      case "5WXGqxxf4lT":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

