let password = document.getElementById('password')
    function genPassword() {
        let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let password = ''
        for (let i = 1; i <= 10; i++) {
            let randomNumber = Math.random() * chars.length
            password += chars.substring(randomNumber, randomNumber + 1)
        }
        document.getElementById('password').value = password;
    }
    function copyPassword() {
        let copyText = document.getElementById('password')
        copyText.select()
        copyText.setSelectionRange(0, 20)
        navigator.clipboard.writeText(copyText.value);
        alert("Ter copy : " + copyText.value);
    } 