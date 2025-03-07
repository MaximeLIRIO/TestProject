import * as vscode from 'vscode';
import { createProject } from './features/createProject';
import { createSolution } from './features/createSolution';
import { addProjectReference } from './features/addProjectReference';
import { debug } from './features/debug';
import { TestExplorer } from './features/testExplorer';

export function activate(context: vscode.ExtensionContext) {
    const createProjectCommand = vscode.commands.registerCommand('extension.createProject', createProject);
    const createSolutionCommand = vscode.commands.registerCommand('extension.createSolution', createSolution);
    const addProjectReferenceCommand = vscode.commands.registerCommand('extension.addProjectReference', addProjectReference);
    const debugCommand = vscode.commands.registerCommand('extension.debug', debug);
    
    const testExplorer = new TestExplorer(context);
    context.subscriptions.push(testExplorer);

    context.subscriptions.push(createProjectCommand);
    context.subscriptions.push(createSolutionCommand);
    context.subscriptions.push(addProjectReferenceCommand);
    context.subscriptions.push(debugCommand);
}

export function deactivate() {}