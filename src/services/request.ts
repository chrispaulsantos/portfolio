/**
     * Retrieve the JSON from the remote location
     * @returns 
     */
export const post = <T>(url: string, body?: any) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("POST", url);
        req.setRequestHeader('Content-type', 'application/json')
        req.onloadend = function() {
            if (this.status === 200) {
                let body: T;
                try {
                    body = JSON.parse(this.responseText)
                } catch (e) {
                    setTimeout(() => {
                        reject(e);
                    }, 2000);

                    return;
                }

                // Just set a timeout so that it simulates a longer request time
                // for better UX
                setTimeout(() => {
                    resolve(body);
                }, 1000);
            } else {
                setTimeout(() => {
                    reject(this.responseText);
                }, 1000);
            }
        };
    
        req.send(JSON.stringify(body));
    });
}