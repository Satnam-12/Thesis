let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));
let MsgHead = document.getElementById('msg');
let GreetHead = document.getElementById('greet');
let SignoutBtn = document.getElementById('signoutbutton');

let Signout = () => {
    console.log("Signing out...");
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info");
    window.location.href = 'login.html';
};

let CheckCred = () => {
    console.log("Checking credentials...");
    if (!sessionStorage.getItem("user-creds")) {
        console.log("User credentials not found. Redirecting to login page...");
        window.location.href = 'Login.html';
    } else {
        console.log("User credentials found. Displaying user information...");
        console.log("UserCreds:", UserCreds);
        console.log("UserInfo:", UserInfo);
        MsgHead.innerText = `User with email "${UserCreds.email}" logged in`;
        GreetHead.innerText = `Welcome ${UserInfo.Firstname} ${UserInfo.Lastname}!`;
    }
};

window.addEventListener('load', CheckCred);
SignoutBtn.addEventListener('click', Signout);
