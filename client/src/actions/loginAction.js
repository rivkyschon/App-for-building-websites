
const port = 8080;

export default {
    login: async (inputs) => {
        debugger
        let user = await fetch("http://localhost:" + port + "/api/users/" + inputs.email + "/password/" + inputs.password);
        user = await user.json();
        debugger
        console.log(user);
        debugger
        if (!user.ID) {
            alert("you don't exist, please sign up")
        }
        else {
            localStorage.setItem('userID', user.ID);
            return true;
        }
    },

    signUp: async (inputs) => {
        console.log(inputs);
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        };
        try {
            debugger
            let res = await fetch("http://localhost:" + port + "/api/users", requestOptions);
            res = await res.json();
            if (!res.insertId) {
                alert(res.message);
            }
            else {
                console.log(res);
                localStorage.setItem('userID', res.insertId);
                return true;
            }
        }
        catch (err) {
            alert(err);
        }
    },

    forgotPassword: async (email) => {
        debugger
        try {
            let password = await fetch("http://localhost:" + port + "/api/users/" + email + "/forgot-password");
            debugger
            password = await password.json();
            debugger
            console.log(password);
            if (!password) {
                alert("try again");
            }
            else {
                console.log(password);
                return true;
            }
        }
        catch (err) {
            // alert(err);
        }
    },
    resetPassword: async (email, password) => {
        const requestOptions = {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "email": email, "password": password })
        };
        try {
            let res = await fetch("http://localhost:" + port + "/api/users/reset-password",requestOptions);
            res = await res.json();
            console.log(res);
            if (!res) {
                alert("try again");
            }
            else {
                console.log(res);
                return true;
            }
        }
        catch (err) {
            // alert(err);
        }
    }

}