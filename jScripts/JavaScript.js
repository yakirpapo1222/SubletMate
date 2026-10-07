// משתנה ששומר את העיר שהמשתמש בחר
let selectedCity = "";


// הפונקציה מקבלת את שם העיר ואת התמונה שלה
function changeCity(city, imagePath) {
    // שמירת העיר שנבחרה
    selectedCity = city;
    // מציאת תמונת העיר
    const cityImage = document.getElementById("cityImage");

    // החלפת התמונה בהתאם לעיר שנבחרה
    cityImage.src = imagePath;
    cityImage.alt = "Sublet in " + city;
    cityImage.title = "Sublet in " + city;
    cityImage.style.display = "block";

    // הסתרת ההודעה שמבקשת לבחור עיר
    document.getElementById("chooseCityText").style.display = "none";

    // העברת השם והעיר לפונקציה שבודקת את הטופס
    const userName = document.getElementById("userName").value;
    checkForm(userName, city);
}

// הפונקציה מקבלת את השם והעיר ובודקת אם אפשר להפעיל את הכפתור
function checkForm(name, city) {
    // הכפתור מושבת אם השם ריק או אם לא נבחרה עיר
        // אם המשתמש הזין שם ובחר עיר, הכפתור יהיה פעיל
    // הצגת שם המשתמש באזור התצוגה
    document.getElementById("userNameDisplay").innerHTML = name;
        document.getElementById("findButton").disabled = name === "" || city === "";
}


// הפונקציה מקבלת את ה-Checkbox ואת מזהה התמונה המתאימה לו
function changeFeature(checkbox, imageId) {

    // מציאת התמונה המתאימה
    const image = document.getElementById(imageId);

    // שינוי השקיפות לפי מצב ה-Checkbox
    if (checkbox.checked) {
        image.style.opacity = "1";
    } else {
        image.style.opacity = "0.6";
    }
}



// הפונקציה מופעלת בלחיצה על כפתור האישור
function showResult() {

    // קבלת השם שהמשתמש הזין
    const name = document.getElementById("userName").value;

    // קבלת כל ה-Checkboxes
    const checkboxes = document.querySelectorAll(".checkboxLabel input");

    // קבלת ההעדפות שנבחרו
    const preferences = getPreferences(checkboxes);

    // העברת הנתונים לפונקציה שמציגה את הפופ אפ
    showPopup(name, selectedCity, preferences);
}

// הפונקציה מקבלת את רשימת ה-Checkboxes ומחזירה את ההעדפות שנבחרו
function getPreferences(checkboxes) {

    // מערך לשמירת ההעדפות
    let preferences = [];

    // מעבר על כל ה-Checkboxes
    for (let i = 0; i < checkboxes.length; i++) {

        // אם האפשרות מסומנת, מוסיפים אותה לסוף המערך
        if (checkboxes[i].checked) {
            preferences[preferences.length] = checkboxes[i].value;
        }
    }

    // החזרת מערך ההעדפות
    return preferences;
}



// הפונקציה מקבלת את הנתונים ומציגה אותם בתוך הפופ אפ
function showPopup(name, city, preferences) {

    // טקסט ברירת מחדל אם לא נבחרו העדפות
    let preferenceText = "No additional preferences selected";

    // אם נבחרו העדפות, מחברים אותן לטקסט אחד
    if (preferences.length > 0) {
        preferenceText = preferences.join(", ");
    }

    // הכנסת הטקסט לפופ אפ
    document.getElementById("popupText").innerHTML =
        "Your perfect sublet is ready, " + name +
        "<br><br>" +
        "City: " + city +
        "<br>" +
        "Your preferences: " + preferenceText;

    // הצגת הפופ אפ
    document.getElementById("resultPopup").style.display = "block";
}

// הפונקציה סוגרת את הפופ אפ
function closePopup() {
    document.getElementById("resultPopup").style.display = "none";
}