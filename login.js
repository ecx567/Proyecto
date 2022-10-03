class Login{
    login(){
        let inputlogin=document.getElementById("usuario")
        let inputpassword=document.getElementById("password")
        if(inputlogin=="Erick" && inputpassword=="1234"){
            return true
        } else{
        console.log("Los datos son incorrectos")
        return false
    }
    
    }
}
let Log = new Login()
