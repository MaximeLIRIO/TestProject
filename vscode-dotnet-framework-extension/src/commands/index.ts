import { commands } from 'vscode';
import { createProject } from '../features/createProject';
import { createSolution } from '../features/createSolution';
import { addProjectReference } from '../features/addProjectReference';
import { debug } from '../features/debug';
import { TestExplorer } from '../features/testExplorer';

export function registerCommands() {
    commands.registerCommand('extension.createProject', createProject);
    commands.registerCommand('extension.createSolution', createSolution);
    commands.registerCommand('extension.addProjectReference', addProjectReference);
    commands.registerCommand('extension.debug', debug);
    commands.registerCommand('extension.testExplorer', () => new TestExplorer());
}