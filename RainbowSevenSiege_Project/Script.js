
var error = document.getElementById("Errorlbl");

$(document).ready(function(){

    $("#AllBtn").click(function(){
        $("img.Attacker").show();
        $("img.Defender").show();
    });

    $("#AttackerBtn").click(function(){
        $("img.Attacker").show();
        $("img.Defender").hide();
    });

    $("#DefenderBtn").click(function(){
        $("img.Defender").show();
        $("img.Attacker").hide();
    });

    $(".PrevImg").on('click',function(){
        var currentimage = $(".CurrentImg");
        var previmage = currentimage.prev();

        if(previmage.length)
        {
            currentimage.removeClass("CurrentImg");
            previmage.addClass("CurrentImg");
        }
    })

    $(".NextImg").on('click',function(){
        var currentimage = $(".CurrentImg");
        var Nextimage = currentimage.next();

        if(Nextimage.length)
        {
            currentimage.removeClass("CurrentImg");
            Nextimage.addClass("CurrentImg");
        }
    })

});

function ValidateForm()
{
    var username = document.getElementById("UsernameTxt").value;
    var email = document.getElementById("EmailTxt").value;
    var pass = document.getElementById("PassTxt").value;
    var address = document.getElementById("AddressTxtArea").value;
    var copies = document.getElementById("Copies").value;
    var physic = document.getElementById("Physiclrb").checked;
    var digital = document.getElementById("Digitallrb").checked;
    var agreement = document.getElementById("agreement").checked;
    var type;

    if(physic == true)
    {
        type = "Physic";
    }
    if(digital == true)
    {
        type = "Digital";
    }

    if(username == "" )
    {
        error.innerHTML = "Username must be filled !";
    }
    else if(username.length < 6 || username.length > 20)
    {
        error.innerHTML = "Username must consist 7 - 19 Character";
    }
    else if(email == "" )
    {
        error.innerHTML = "Email must be filled !";
    }
    else if (email.indexOf('@') == -1 || email.indexOf('.com') == -1 || email.indexOf('@') == 0 || email.indexOf('.') == 0 || email.indexOf('.com') == 0)
    {
        error.innerHTML = "Email Format is not correct [ Ex : abc@gmail.com ]" ;
    }
    else if(pass == "")
    {
        error.innerHTML = "Password must be filled !";
    }
    else if(pass.length < 5 )
    {
        error.innerHTML = "Password must be above 5 character !";
    }
    else if(address == "")
    {
        error.innerHTML = "Address must be filled !";
    }
    else if(copies == "")
    {
        error.innerHTML = "Number of copies must be filled !";
    }
    else if(type == "")
    {
        error.innerHTML = "Type of game must be checked !";
    }
    else if(agreement == false)
    {
        error.innerHTML = "Aggreement and Terms must be checked !";
    }
    else
    {
        alert("Success PreOrder");
        document.getElementById('Form1').reset;
    }
}

function ResetForm()
{
    alert("Success Reset");
    document.getElementById('Form1').Reset;
}