var ptLength = 0;

function AutokeyEncipher(keyword, plaintext) {
    var ciphertext = "";

    for (var i = 0; i < plaintext.length; i++) {
        var pCode = plaintext.charCodeAt(i) - 65;
        var kCode = keyword.charCodeAt(i) - 65;
        ciphertext += String.fromCharCode(((pCode + kCode) % 26) + 65);
    }

    return ciphertext;
}

function AutokeyDecipher(keyword, ciphertext) {
    var plaintext = "";
    var currentKey = keyword;

    for (var i = 0; i < ciphertext.length; i++) {
        var cCode = ciphertext.charCodeAt(i) - 65;
        var kCode = currentKey.charCodeAt(i) - 65;
        var pCode = cCode - kCode;
        pCode = pCode < 0 ? ((pCode % 26) + 26) % 26 : pCode % 26;
        plaintext += String.fromCharCode(pCode + 65);
        currentKey += String.fromCharCode(pCode + 65);
    }
    return plaintext;
}

function Encipher() {
    var plaintext = document.getElementById("source_text").value.toUpperCase();
    if (plaintext.length > 0) {
        // execute autokey
        var key = document.getElementById("atk-keyword").value.toUpperCase();

        if (key.length > 0) {

            var keyword = key + plaintext;
            var ciphertext = AutokeyEncipher(keyword, plaintext);
            document.getElementById("final_text").innerHTML = ciphertext;
            plaintext = ciphertext;
        } else {
            document.getElementById("atk-keyword").classList.add("error");
            document.getElementById("atk-error").innerHTML =
                "Expected Input for Autokey Keyword!";
        }
    } else {
        document.getElementById("source_text").classList.add("error");
        document.getElementById("st-error").innerHTML =
            "Expected Input for Plaintext!";
    }
}

function Decipher() {
    var ciphertext = document.getElementById("source_text").value.toUpperCase();

    if (ciphertext.length > 0) {

        // execute autokey
        var key = document.getElementById("atk-keyword").value.toUpperCase();

        if (key.length > 0) {

            var plaintext = AutokeyDecipher(key, ciphertext);
            document.getElementById("final_text").innerHTML = plaintext;
        } else {
            document.getElementById("atk-keyword").classList.add("error");
            document.getElementById("atk-error").innerHTML =
                "Expected Input for Autokey Keyword!";
        }
    } else {
        document.getElementById("source_text").classList.add("error");
        document.getElementById("st-error").innerHTML =
            "Expected Input for Ciphertext!";
    }
}