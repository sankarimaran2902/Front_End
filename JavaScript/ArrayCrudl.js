let Travelsname=new Array("GT Holidays","Preethi Travels","Make My Trip","Goibibo");

let Adding=()=>
{
    let newvalue=document.getElementById('Travels').value;

    Travelsname.push(newvalue);
    alert(newvalue +"This Travels is Added Successfully..!")
    Printall()
}

var Printall=()=>
{
    let temp=" "
    Travelsname.map((getting)=>
    {
        temp+="<tr><td><ul><li>" +getting +"</li></ul></td></tr>";
    })
    document.getElementById('list').innerHTML="<table><thead bgcolor='red'><tr><th>Travels List</th></tr></thead><tbody bgcolor='pink' align='center'>" +temp +"</tbody></table>";
}

let Updating=()=>
{
    let updateindex=document.getElementById('Travels').value;

    let newvalue=prompt("Please Enter your Update Travel Name" +Travelsname[updateindex])

    Travelsname[updateindex]=newvalue;
    Printall();
}

var Removing=()=>
{
    let delete_value=document.getElementById('Travels').value;

    Travelsname=Travelsname.filter((getting)=>
    {
        if(getting!==delete_value)
        {
            return getting;
        }
    })

    Travelsname.map((get)=>
    {
        console.log(get)
    });
    Printall();
}

function Finding() {
    let searchingvalue = document.getElementById('Travels').value;

    for (i = 0; i < Travelsname.length; i++) {
        if (Travelsname[i] === searchingvalue) {
            return i;
        }
    }
}

function Findfirst() {
    for (i = 0; i < Travelsname.length; i++) {
        alert(" Travels names is :" + Travelsname[i]);
        break;
    }
}