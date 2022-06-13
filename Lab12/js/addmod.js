"use strict"

exports.add = function(req, res, vals) {
    let sum = parseInt(vals.first) + parseInt(vals.second);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset=\"utf-8\"/>
            <title>Calculator Web Site</title>
            <link rel="stylesheed" href="./css/style.css" />
        </head>
        <body>
            <p>
                The sum is: <span>
                                ${String(new Intl.NumberFormat().format(sum))}
                            </span>
            </p>
        </body>
    </html>`);
    console.log("heree in the addmod");
    return res.end();
}
// Lecture's code
// exports.add = function (req,res,vals) {
//     var sum = parseInt(vals.first) + parseInt(vals.second);
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(`<!DOCTYPE html>
//           <html>
//            <head><meta charset=\"utf-8\"/>
//             <title>Calculator Web Site</title>
//            </head>
//            <body>
//              <p>The sum is:  ${String(sum)}</p>
//            </body>
//           </html> ` );    
//           return res.end();
//     };