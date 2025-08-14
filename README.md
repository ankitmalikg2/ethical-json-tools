# Ethical JSON Tools

![Ethical JSON Tools](https://i.ibb.co/FLTkQj4f/json-tools-image.png)

A Visual Studio Code extension that provides a set of tools to work with JSON data ethically and efficiently.

## Features

This extension provides a set of commands to help you work with JSON data. You can access these commands from the "JSON Tools" view in the Explorer sidebar.

### JSON Actions

*   **Validate**: Checks if the selected text or the entire file is valid JSON.
*   **Prettify**: Formats the selected JSON or the entire file with standard indentation.
*   **Minify**: Compresses the selected JSON or the entire file into a single line.

### String Actions

These commands are useful when you have JSON data embedded inside a string literal in your code.

*   **Stringify**: Takes a block of JSON text and converts it into an escaped, single-line string literal.
*   **Unstringify**: Takes a string literal containing JSON and replaces it with the formatted, "un-escaped" JSON content.

## Usage

1.  Open the Explorer sidebar in VS Code.
2.  Find the "JSON Tools" view.
3.  Click on the action you want to perform.
4.  The commands will operate on your current selection. If no text is selected, they will operate on the entire active file.

## Why This Extension is Ethical

In light of growing concerns about VS Code extensions potentially misusing user data, this tool was built with transparency and security as top priorities.

*   **Built for Personal Use:** I created this extension primarily for my own productivity. It only contains the functionality I need, with no hidden tracking or data collection.
*   **Open Source and Verifiable:** The complete source code is available on GitHub for you to review and verify. You can be confident that the extension does exactly what it claims to do, and nothing more.
*   **No Malicious Code:** This extension does not contain any code that could harm your computer or steal your data.

You can view the source code here: [https://github.com/ankitmalikg2/ethical-json-tools](https://github.com/ankitmalikg2/ethical-json-tools)

## Command Reference

This extension provides the following commands, which can be accessed through the Command Palette (Ctrl+Shift+P or Cmd+Shift+P):

| Command | Description |
| --- | --- |
| Validate | Checks if the selected text or the entire file is valid JSON. |
| Prettify | Formats the selected JSON or the entire file with standard indentation. |
| Minify | Compresses the selected JSON or the entire file into a single line. |
| Stringify | Takes a block of JSON text and converts it into an escaped, single-line string literal. |
| Unstringify | Takes a string literal containing JSON and replaces it with the formatted, "un-escaped" JSON content. |

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## Release Notes

### 0.0.1

Initial release of Ethical JSON Tools with the following features:
- Validate JSON
- Prettify JSON
- Minify JSON
- Stringify JSON
- Unstringify JSON

---

**Enjoy using Ethical JSON Tools!**