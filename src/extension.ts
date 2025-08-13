import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let validateJsonCommand = vscode.commands.registerCommand('ethical-valid-json.validateJson', () => {
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

    let prettyFormatJsonCommand = vscode.commands.registerCommand('ethical-valid-json.prettyFormatJson', async () => {
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

    let minifyJsonCommand = vscode.commands.registerCommand('ethical-valid-json.minifyJson', async () => {
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

    let stringifyJsonCommand = vscode.commands.registerCommand('ethical-valid-json.stringifyJson', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor found.');
            return;
        }

        const selection = editor.selection;
        if (selection.isEmpty) {
            vscode.window.showInformationMessage('Please select a JSON block to stringify.');
            return;
        }

        const text = editor.document.getText(selection);

        try {
            // Ensure the selected text is valid JSON before trying to stringify it.
            JSON.parse(text); 
            
            // Stringify the text. This wraps it in quotes and escapes characters.
            const stringified = JSON.stringify(text);
            
            await editor.edit(editBuilder => {
                editBuilder.replace(selection, stringified);
            });
        } catch (e) {
            const message = e instanceof Error ? e.message : String(e);
            vscode.window.showErrorMessage(`Could not stringify invalid JSON: ${message}`);
        }
    });

    let parseStringifiedJsonCommand = vscode.commands.registerCommand('ethical-valid-json.parseStringifiedJson', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor found.');
            return;
        }

        const selection = editor.selection;
        if (selection.isEmpty) {
            vscode.window.showInformationMessage('Please select a string containing JSON to parse.');
            return;
        }

        const text = editor.document.getText(selection);

        try {
            // The selection is a string literal. We need to parse it to get the content.
            const unescapedString = JSON.parse(text);

            // Now, the unescaped string should be valid JSON. Parse it again.
            const jsonObject = JSON.parse(unescapedString);

            // Now format it nicely.
            const formattedJson = JSON.stringify(jsonObject, null, 2);
            
            await editor.edit(editBuilder => {
                editBuilder.replace(selection, formattedJson);
            });
        } catch (e) {
            const message = e instanceof Error ? e.message : String(e);
            vscode.window.showErrorMessage(`Could not parse stringified JSON: ${message}`);
        }
    });

    context.subscriptions.push(validateJsonCommand);
    context.subscriptions.push(prettyFormatJsonCommand);
    context.subscriptions.push(minifyJsonCommand);
    context.subscriptions.push(stringifyJsonCommand);
    context.subscriptions.push(parseStringifiedJsonCommand);
}

export function deactivate() {}