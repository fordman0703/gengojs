//initialize code mirror for #code-gengo-npm
var gengo_npm = CodeMirror.fromTextArea(document.getElementById('code-gengo-npm'), {
    mode: {
        name: 'shell'
    },
    theme: 'monokai',
    readOnly: true
});

gengo_npm.setSize(400, 50);

//initialize code mirror for #code-gengo-init
var gengo_init = CodeMirror.fromTextArea(document.getElementById('code-gengo-init'), {
    mode: {
        name: 'javascript',
        json: true
    },
    theme: 'monokai',
    readOnly: true
});

//initialize code mirror for #code-gengo-template
var gengo_template = CodeMirror.fromTextArea(document.getElementById('code-gengo-template'), {
    mode: {
        name: "jade",
        alignCDATA: true
    },
    theme: 'monokai',
    readOnly: true
});

//initialize code mirror for #code-gengo-template
var gengo_dict = CodeMirror.fromTextArea(document.getElementById('code-gengo-dict'), {
    mode: {
        name: "javascript",
        json: true
    },
    theme: 'monokai',
    readOnly: true
});

//initialize code mirror for #code-gengo-template
var gengo_momnum = CodeMirror.fromTextArea(document.getElementById('code-gengo-moment-numeral'), {
    mode: {
        name: "jade",
        alignCDATA: true
    },
    theme: 'monokai',
    readOnly: true
});
