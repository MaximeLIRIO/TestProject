import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export async function createProject() {
    const projectName = await vscode.window.showInputBox({ prompt: 'Enter the name of the new project' });
    if (!projectName) {
        vscode.window.showErrorMessage('Project name is required.');
        return;
    }

    const framework = await vscode.window.showQuickPick(['.NET Framework 4.5', '.NET Framework 4.6', '.NET Framework 4.7', '.NET Framework 4.8'], { placeHolder: 'Select the .NET Framework version' });
    if (!framework) {
        vscode.window.showErrorMessage('Framework selection is required.');
        return;
    }

    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
        vscode.window.showErrorMessage('Please open a workspace folder first.');
        return;
    }

    const projectPath = path.join(workspaceFolder.uri.fsPath, projectName);
    fs.mkdirSync(projectPath, { recursive: true });

    const csprojContent = `
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>${framework}</TargetFramework>
  </PropertyGroup>

</Project>
    `.trim();

    fs.writeFileSync(path.join(projectPath, `${projectName}.csproj`), csprojContent);
    vscode.window.showInformationMessage(`Project ${projectName} created successfully with ${framework}.`);
}