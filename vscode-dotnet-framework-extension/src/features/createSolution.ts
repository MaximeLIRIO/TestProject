import * as vscode from 'vscode';

export function createSolution() {
    vscode.window.showInputBox({ prompt: 'Enter the name of the new solution' }).then(solutionName => {
        if (!solutionName) {
            vscode.window.showErrorMessage('Solution name cannot be empty.');
            return;
        }

        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            vscode.window.showErrorMessage('Please open a workspace folder first.');
            return;
        }

        const solutionPath = `${workspaceFolder.uri.fsPath}/${solutionName}.sln`;

        // Create the solution file
        const fs = require('fs');
        fs.writeFile(solutionPath, '', (err: NodeJS.ErrnoException) => {
            if (err) {
                vscode.window.showErrorMessage(`Error creating solution: ${err.message}`);
            } else {
                vscode.window.showInformationMessage(`Solution created: ${solutionPath}`);
            }
        });
    });
}