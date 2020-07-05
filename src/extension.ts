// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getWebViewContent, getExtensionFileVscodeResource } from './utils/index';

/**
 * 插件触发时执行
 */
export function activate(context: vscode.ExtensionContext) {
  // 插件启动时只会执行一次
  console.log('Congratulations, your extension "vscode-npm-manage" is now active!');

  // 将函数绑定到命令ID openNpmManageView上
  const disposable = vscode.commands.registerCommand('vscode-npm-manage.openNpmManageView', (url) => {
    console.log('当前文件地址:', url.path);
    const html = getWebViewContent(context, 'dist/view/webView.html');
    const panel = vscode.window.createWebviewPanel('webView', 'NPM Manage', vscode.ViewColumn.One, {
      enableScripts: true, // 启用JS
      retainContextWhenHidden: true, // webview被隐藏时保持状态,避免被重置.
    });
    panel.webview.html = html;
    panel.iconPath = getExtensionFileVscodeResource(context, 'dist/images/npm-outline.svg');
  });

  const updateLatest = vscode.commands.registerCommand('vscode-npm-manage.npmUpdateLatest', () => {
    vscode.window.showInformationMessage('更新最新的2npm');
  });

  const handler = vscode.commands.registerCommand('vscode-npm-manage.helloWebpack', () => {
    vscode.window.showInformationMessage(`41 + 1 = 2222`);
  });

  context.subscriptions.push(handler);
  context.subscriptions.push(disposable);
  context.subscriptions.push(updateLatest);
}

/**
 * 插件关闭时执行
 */
export function deactivate() {}
