const DB_USER =[
    {
        username: "",
        password: ""
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputKonfirmasiPassword = document.querySelector("#KonfirmasiPassword");
const buttonSubmit = document.querySelector("#submitForm");



console.log(buttonSubmit);

buttonSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    const valueInputPassword = inputPassword.value;
    const valueInputUsername = inputUsername.value; 
    const valueInputKonfirmasiPassword = inputKonfirmasiPassword.value;

    console.log(inputUsername);
    console.log(inputPassword);
    console.log(inputKonfirmasiPassword);

    let flag = 0;
    
    DB_USER.map((data)=>{
        // if(data.username== valueInputUsername && data.password == valueInputPassword){
        //     flag = 1;
        // }
        if(valueInputPassword!=""&&valueInputUsername!=""&&valueInputKonfirmasiPassword!=""){
            if(valueInputPassword==valueInputKonfirmasiPassword){
                data.password = valueInputPassword;
                data.username = valueInputUsername;
                flag=1;
                const tampungdb=[valueInputUsername,valueInputPassword];
                console.log(tampungdb);
            }else{
                flag=2;
            }
        }
    })    

    const warningMsg = document.querySelector(".warning");
    const infogMsg = document.querySelector(".info");

    
    if(flag==0){
        infogMsg.className = "text-danger";
    }else if(flag==2){
        warningMsg.className = "text-danger";
    }else{
        alert("Selamat Proses Pendaftaran Anda Berhasil!");
    }
    console.log(flag);
})