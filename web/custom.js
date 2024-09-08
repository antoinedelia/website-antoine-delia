document.getElementById("age").innerHTML = _calculateAge(new Date("1996-12-09"));

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
startedWorkingDate = new Date("2018-09-01")
currentDate = new Date()
monthsWorking = monthDiff(startedWorkingDate, currentDate)
year = Math.floor(monthsWorking / 12)
yearString = year + " an" + (year > 1 ? "s" : "")
months = monthsWorking % 12
monthsString = months + " mois"
message = "Au total, je dispose de <b>" + yearString + (months > 0 ? " et " + monthsString : "") + " d'expérience</b>."
smallMessage = yearString + (months > 0 ? " et " + monthsString : "")
document.getElementById("workTime").innerHTML = message;

document.getElementById("workTimeProfile").innerHTML = smallMessage;
