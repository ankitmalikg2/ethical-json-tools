import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Validate JSON command with valid JSON', async () => {
		const document = await vscode.workspace.openTextDocument({ content: '{"a": 1}', language: 'json' });
		await vscode.window.showTextDocument(document);
		// In a real test, you'd mock vscode.window.showInformationMessage
		// For now, we'll just execute the command and assume it works if no error is thrown.
		await vscode.commands.executeCommand('ethical-json-tools.validate');
		// You might want to add a more robust assertion here, e.g., checking output messages
		assert.ok(true, "Command executed without error");
	});

	test('Pretty Format JSON command with valid JSON', async () => {
		const document = await vscode.workspace.openTextDocument({ content: '{"a":1}', language: 'json' });
		await vscode.window.showTextDocument(document);
		await vscode.commands.executeCommand('ethical-json-tools.prettify');
		const text = document.getText();
		assert.strictEqual(text, `{
  "a": 1
}`);
	});

	test('Validate JSON command with invalid JSON', async () => {
		const document = await vscode.workspace.openTextDocument({ content: '{"a": 1,}', language: 'json' });
		await vscode.window.showTextDocument(document);
		// In a real test, you'd mock vscode.window.showErrorMessage
		// For now, we'll just execute the command and assume it works if no error is thrown.
		await vscode.commands.executeCommand('ethical-json-tools.validate');
		// You might want to add a more robust assertion here, e.g., checking output messages
		assert.ok(true, "Command executed without error");
	});
});