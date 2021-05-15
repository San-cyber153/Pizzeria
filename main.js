name_of_the_person_array = [];
    
function submit()
{
    
    var name_of_the_person = document.getElementById("name_of_the_person").value;
    name_of_the_person_array.push(name_of_the_person);
    console.log(name_of_the_person_array);

}

function show()
{
    name_of_the_person_array.sort();
    console.log(name_of_the_person_array);

    var display_person_array_sorting = [];

    var lenght_of_name_of_persons_array = name_of_the_person_array.length;
    console.log(lenght_of_name_of_persons_array);

    for (var k = 0; k < lenght_of_name_of_persons_array; k++) 
    {
        display_person_array_sorting.push("<h4>NAME - " + name_of_the_person_array[k] + "</h4>");
        console.log(display_person_array_sorting);
    }

    var remove_commas = display_person_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function searching()
{
    var s = document.getElementById("s1").value
    var found=0;
    var j;
    for(j=0; j<name_of_people.length;j++)
    {
        if(s==names_of_people[j])
        found=found+1;
    }
    document.getElementById("p2").innerHTML="name found "+found+"time/s";
    console.log("found name "+found+" time/s");
}
