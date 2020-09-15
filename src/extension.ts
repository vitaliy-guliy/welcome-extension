// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export const welcomeViewType = 'welcome';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('### welcome-extension::activate');

	// vscode.window.registerWebviewPanelSerializer(welcomeViewType, new WelcomePageSerializer());

	let disposable = vscode.commands.registerCommand('welcome-extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);

    // Open Welcome tab
	const panel = vscode.window.createWebviewPanel(welcomeViewType, "Welcome",
		{
			viewColumn: vscode.ViewColumn.One,
			preserveFocus: false
		},
		{
	});
	
	panel.webview.html = "Hello";
}

// this method is called when your extension is deactivated
export function deactivate() {}

// export class WelcomePageSerializer implements vscode.WebviewPanelSerializer {

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel, state: any): Thenable<void> {
// 		webviewPanel.webview.html = "Restored"
// 		return Promise.resolve();
// 	}

// }
