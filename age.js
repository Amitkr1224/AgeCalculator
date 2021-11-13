function agecalc(){
    var date_c = document.getElementById("date").value;
    var month_c = document.getElementById("month").value;
    var year_c = document.getElementById("year").value;
    var text_c = document.getElementById("text");

    // Validating Input
    if(isNaN(date_c) || date_c == 00)
    {
    alert("You Have to Enter the Correct Date");
    return;
    }
    if(isNaN(month_c) || month_c == 00)
    {
    alert("You Have to Enter the Correct Month");
    return;
    }
    if(isNaN(year_c) || year_c == 0000)
    {
    alert("You Have to Enter the Correct Year");
    return;
    }

    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth()+1;
    let y = today.getFullYear();
    var moonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // console.log(d,m,y);
    if (date_c > d) {
        d = d + moonth[m - 1];
        m = m - 1;
    }
    if (month_c > m) {
        m = m + 12;
        y = y - 1;
    }
    var difDate = d - date_c;
    var difMonth = m - month_c;
    var difYear = y - year_c;

   

    // console.log(difDate,difMonth,difYear);
    document.getElementById("text").innerHTML = "Your Age is "+difYear+" Years " + difMonth+" Months "+difDate+" Days";
}