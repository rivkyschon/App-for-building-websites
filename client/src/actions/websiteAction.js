const port = 8080;

export default {

    saveWebsite: async (arr) => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(arr)
        };
        try {
            debugger
            let data = await fetch(`http://localhost:${port}/api/website/${JSON.parse(localStorage.getItem('siteID'))}/store-data`, requestOptions);
            data = await data.json();
            if (!data) {
                throw ("qqqqqqqqqqqqqq");
            }
            else {
                console.log(data);
            }
        }
        catch (err) {
            alert(err);
        }
    },

    getWebDesign: async () => {
        debugger
        try {
            let data = await fetch(`http://localhost:${port}/api/users-website/${JSON.parse(localStorage.getItem('siteID'))}`);
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

    }
}