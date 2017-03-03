var fs = require('fs');
function allNames() {
    var ch = '';
    var text;
    var sertID = ['var', 'function', 'if', 'else', 'return', 'true', 'false'];
    var dotID = [',', '(', ')', '{', '}','\'',':']
    var sertConst = [];

    fs.readFile('input.js', 'UTF-8', function (err, data) {
            text = data.toString().split('');

            for (var i = 0; i < text.length;) {
                var strToken = '';
                ch = text[i];
                var tag = 0;
                if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {

                    while ((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                        strToken += ch;
                        i += 1;
                        ch = text[i];
                    }

                    for (var j = 0; j < sertID.length; j++) {

                        if (sertID[j] === strToken && tag === 0) {
                            console.log(strToken, 'sertID' + j)
                            tag = 1;
                        }
                    }

                    if (sertConst.length === 0 && tag === 0) {
                        sertConst.push(strToken);
                        console.log(strToken, 'sertConst' + 0)
                        tag = 1;
                    }

                    if (sertConst.length != 0 && tag === 0) {
                        for (var t = 0; t < sertConst.length; t++) {

                            if (sertConst[t] === strToken && tag === 0) {
                                tag = 1;
                                console.log(strToken, 'sertConst' + t)
                                break;
                            }
                            else {
                                sertConst.push(strToken);
                                tag = 1;
                                var put = sertConst.length - 1
                                console.log(strToken, 'sertConst' + put)
                                break;
                            }
                        }
                    }
                }
                else if (ch >= '0' && ch <= '9') {
                    while (ch >= '0' && ch <= '9') {
                        strToken += ch;
                        i += 1;
                        ch = text[i];
                    }
                    console.log(strToken, 'num')
                    tag = 1;
                }

                for (var d = 0; d < dotID.length; d++) {
                    if (dotID[d] === ch) {
                        console.log(ch, 'dotID' + d)
                        i++;
                        tag = 1;
                        break;
                    }
                }

                if (tag === 0) {
                    console.log('0');
                    i++;
                }


            }
        }
    )
}

allNames()