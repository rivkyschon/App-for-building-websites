
const port = 8080;

export default {

    postMessage: async (inputs) => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        };
        let res = await fetch("http://localhost:" + port + "/api/messages/post",requestOptions);
        res = await res.json();
        if (res) {
            alert(res.message)
        }
        else {
            return true;
        }
    },

    getUnreadMessage: async () => {
        try {
            let data = await fetch("http://localhost:" + port + "/api/messages/getUnread");
            data = await data.json();
            if (!data) {
                throw ("you don't exist, please sign up");
            }
            else {
                return data;
            }
        }
        catch (err) {
            alert(err);
        }

    },

    updateMessage: async (inputs) => {
        const requestOptions = {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        };
        let res = await fetch("http://localhost:" + port + "/api/messages/reply",requestOptions);
        res = await res.json();
        if (res) {
            alert(res.message)
        }
        else {
            return true;
        }
    },

    deleteMessage: async (details) => {
        const requestOptions = {
            method: 'DELETE',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        };
        let res = await fetch("http://localhost:" + port + "/api/messages/delete",requestOptions);
        res = await res.json();
        if (res) {
            alert(res.message)
        }
        else {
            return true;
        }
    }

}