# Ethical JSON Tools - Secure and Simple

![Ethical JSON Tools](images/json_tools_image.png)

A Visual Studio Code extension that provides a set of tools to work with JSON data ethically and efficiently. This extension is designed with transparency and security as top priorities, ensuring that your data remains private and your workflow is streamlined.

## 🚀 Features

This extension provides a comprehensive set of commands to help you work with JSON data. You can access these commands from the "JSON Tools" view in the Explorer sidebar or through the Command Palette.

### JSON Actions

*   ✅ **Validate**: Checks if the selected text or the entire file is valid JSON.
*   🎨 **Prettify**: Formats the selected JSON or the entire file with standard indentation.
*   📦 **Minify**: Compresses the selected JSON or the entire file into a single line.

### String Actions

These commands are useful when you have JSON data embedded inside a string literal in your code.

*   📜 **Stringify**: Takes a block of JSON text and converts it into an escaped, single-line string literal.
*   📝 **Unstringify**: Takes a string literal containing JSON and replaces it with the formatted, "un-escaped" JSON content.

## 🛡️ Ethical and Secure

In light of growing concerns about VS Code extensions potentially misusing user data, this tool was built with the following principles:

*   **Built for Personal Use**: This extension was created for my own productivity and only includes the functionality I need, with no hidden tracking or data collection.
*   **Open Source and Verifiable**: The complete source code is available on GitHub for you to review and verify. You can be confident that the extension does exactly what it claims to do, and nothing more.
*   **No Malicious Code**: This extension does not contain any code that could harm your computer or steal your data.

You can view the source code here: [https://github.com/ankitmalikg2/ethical-json-tools](https://github.com/ankitmalikg2/ethical-json-tools)

## Getting Started

1.  Install the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=AnkitMalikTools.ethical-json-tools).
2.  Open the Explorer sidebar in VS Code.
3.  Find the "JSON Tools" view.
4.  Click on the action you want to perform.
5.  The commands will operate on your current selection. If no text is selected, they will operate on the entire active file.

## Command Reference

This extension provides the following commands, which can be accessed through the Command Palette (Ctrl+Shift+P or Cmd+Shift+P):

| Command | Description |
| --- | --- |
| `JSON: validate` | Checks if the selected text or the entire file is valid JSON. |
| `JSON: prettify` | Formats the selected JSON or the entire file with standard indentation. |
| `JSON: minify` | Compresses the selected JSON or the entire file into a single line. |
| `JSON: stringify` | Takes a block of JSON text and converts it into an escaped, single-line string literal. |
| `JSON: unstringify` | Takes a string literal containing JSON and replaces it with the formatted, "un-escaped" JSON content. |

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request on our [GitHub repository](https.github.com/ankitmalikg2/ethical-json-tools).

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