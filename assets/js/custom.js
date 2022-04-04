function putAge()
{
    var age = document.getElementById('age');
    calc_age= getAge('22/03/2002');
    age.innerHTML=calc_age;
}


function getAge(birth) {
    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth() + 1;
    var curr_year = today.getFullYear();
 
    var pieces = birth.split('/');
    var birth_date = pieces[0];
    var birth_month = pieces[1];
    var birth_year = pieces[2];
 
    if (curr_month == birth_month && curr_date >= birth_date) return parseInt(curr_year-birth_year);
    if (curr_month == birth_month && curr_date < birth_date) return parseInt(curr_year-birth_year-1);
    if (curr_month > birth_month)
    {
        var year=parseInt(curr_year-birth_year);
        var month=Math.abs(parseInt(curr_month-birth_month));
        var date=Math.abs(parseInt(curr_date-birth_date));

        var final_age= String(year)+" years " + String(month) + " months " + String(date) + " days";
        return final_age;
    }
    if (curr_month < birth_month)
    {
        var year=parseInt(curr_year-birth_year -1);
        var month=Math.abs(parseInt(curr_month-birth_month));
        var date=Math.abs(parseInt(curr_date-birth_date));

        var final_age= String(year)+" years " + String(month) + " months " + String(date) + " days";
        return final_age;
    }

}