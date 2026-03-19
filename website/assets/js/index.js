
//Javascript code for Lambda
const functionUrl = "https://hqegyh6ol4u44g5qcajsqlmnuu0nqkey.lambda-url.us-east-1.on.aws/";

    async function fetchViewCount() {
        try {
            const response = await fetch(functionUrl);
            const data = await response.json();

            document.getElementById("visitor").innerText = data.views;
        } catch (error) {
            console.error("Error fetching view count:", error);
            document.getElementById("visitor").innerText = "error";
        }
    }

    window.addEventListener("load", fetchViewCount);