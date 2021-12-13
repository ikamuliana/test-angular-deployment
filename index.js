function requireHTTPS(req, res, next) {
    // the 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const express = require('express');
const app = express();

// Penerapan middleware
// app.use(requiredHTTPS);
app.use(express.static('./dist/test-angular-deployment'))

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/test-angular-deployment'})
});

const port = process.eventNames.PORT || 8080
app.listen(port, () => {
    console.log(`App is ready at http://localhost:${port}`)
})