import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let validateCommand = vscode.commands.registerCommand('ethical-json-tools.validate', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor found.');
            return;
        }

        const selection = editor.selection;
        const text = selection.isEmpty ? editor.document.getText() : editor.document.getText(selection);

        if (!text) {
            vscode.window.showInformationMessage('No text found to validate.');
            return;
        }

        try {
            JSON.parse(text);
            vscode.window.showInformationMessage('Valid JSON');
        } catch (e) {
            const message = e instanceof Error ? e.message : String(e);
            vscode.window.showErrorMessage(`Invalid JSON: ${message}`);
        }
    });

    let prettifyCommand = vscode.commands.registerCommand('ethical-json-tools.prettify', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor found.');
            return;
        }

        const document = editor.document;
        const selection = editor.selection;

        const range = selection.isEmpty
            ? new vscode.Range(new vscode.Position(0, 0), document.lineAt(document.lineCount - 1).range.end)
            : selection;

        const text = document.getText(range);
        if (!text) {
            vscode.window.showInformationMessage('No text to format.');
            return;
        }

        try {
            const json = JSON.parse(text);
            const formattedJson = JSON.stringify(json, null, 2);
            
            await editor.edit(editBuilder => {
                editBuilder.replace(range, formattedJson);
            });
        } catch (e) {
            const message = e instanceof Error ? e.message : String(e);
            vscode.window.showErrorMessage(`Could not format JSON: ${message}`);
        }
    });

    let minifyCommand = vscode.commands.registerCommand('ethical-json-tools.minify', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor found.');
            return;
        }

        const document = editor.document;
        const selection = editor.selection;

        const range = selection.isEmpty
            ? new vscode.Range(new vscode.Position(0, 0), document.lineAt(document.lineCount - 1).range.end)
            : selection;

        const text = document.getText(range);
        if (!text) {
            vscode.window.showInformationMessage('No text to minify.');
            return;
        }

        try {
            const json = JSON.parse(text);
            const minifiedJson = JSON.stringify(json);
            
            await editor.edit(editBuilder => {
                editBuilder.replace(range, minifiedJson);
            });
        } catch (e) {
            const message = e instanceof Error ? e.message : String(e);
            vscode.window.showErrorMessage(`Could not minify JSON: ${message}`);
        }
    });

    let stringifyCommand = vscode.commands.registerCommand('ethical-json-tools.stringify', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor found.');
            return;
        }

        const document = editor.document;
        const selection = editor.selection;

        const range = selection.isEmpty
            ? new vscode.Range(new vscode.Position(0, 0), document.lineAt(document.lineCount - 1).range.end)
            : selection;

        const text = document.getText(range);
        if (!text) {
            vscode.window.showInformationMessage('No text to stringify.');
            return;
        }

        try {
            // Ensure the selected text is valid JSON before trying to stringify it.
            JSON.parse(text); 
            
            // Stringify the text. This wraps it in quotes and escapes characters.
            const stringified = JSON.stringify(text);
            
            await editor.edit(editBuilder => {
                editBuilder.replace(range, stringified);
            });
        } catch (e) {
            const message = e instanceof Error ? e.message : String(e);
            vscode.window.showErrorMessage(`Could not stringify invalid JSON: ${message}`);
        }
    });

    let unstringifyCommand = vscode.commands.registerCommand('ethical-json-tools.unstringify', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor found.');
            return;
        }

        const document = editor.document;
        const selection = editor.selection;

        const range = selection.isEmpty
            ? new vscode.Range(new vscode.Position(0, 0), document.lineAt(document.lineCount - 1).range.end)
            : selection;

        const text = document.getText(range);
        if (!text) {
            vscode.window.showInformationMessage('No text to unstringify.');
            return;
        }

        try {
            // The selection is a string literal. We need to parse it to get the content.
            const unescapedString = JSON.parse(text);

            // Now, the unescaped string should be valid JSON. Parse it again.
            const jsonObject = JSON.parse(unescapedString);

            // Now format it nicely.
            const formattedJson = JSON.stringify(jsonObject, null, 2);
            
            await editor.edit(editBuilder => {
                editBuilder.replace(range, formattedJson);
            });
        } catch (e) {
            const message = e instanceof Error ? e.message : String(e);
            vscode.window.showErrorMessage(`Could not parse stringified JSON: ${message}`);
        }
    });

    context.subscriptions.push(validateCommand);
    context.subscriptions.push(prettifyCommand);
    context.subscriptions.push(minifyCommand);
    context.subscriptions.push(stringifyCommand);
    context.subscriptions.push(unstringifyCommand);
}

export function deactivate() {}