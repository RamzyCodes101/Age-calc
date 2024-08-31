// Set the max attribute for the date input
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let birthDate = new Date(userInput.value);
    let today = new Date();

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth();
    let y1 = birthDate.getFullYear();

    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let y3 = y2 - y1;
    let m3, d3;

    if (m2 > m1 || (m2 === m1 && d2 >= d1)) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    let result = document.getElementById("result");
    result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old.`;

}

function getDaysInMonth(year, month) {
    // Month is zero-based so we need to pass month + 1 to get the last date of the month
    return new Date(year, month + 1, 0).getDate();
}
