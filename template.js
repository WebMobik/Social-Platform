export default ({markup, css}) => {
    return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <style>
                    html, body {
                        margin: 0;
                        padding: 0;
                    }
                    a {
                        text-decoration: none;
                    }
                </style>
                <title>MERN Skeleton</title>
            </head>
            <body>
                <div id="root">${markup}</div>
                <style id="jss-server-side">${css}</style>
                <script type="text/javascript" src="/dist/bundle.js"></script>
            </body>
        </html>
    `
}
