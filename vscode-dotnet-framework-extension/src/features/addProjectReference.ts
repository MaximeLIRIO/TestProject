import * as vscode from 'vscode';
import { Project } from '../types';

export function addProjectReference(project: Project, reference: string) {
    const csprojPath = `${project.path}/${project.name}.csproj`;

    vscode.workspace.fs.readFile(vscode.Uri.file(csprojPath)).then(data => {
        let csprojContent = data.toString();
        
        const referenceTag = `<ProjectReference Include="${reference}">`;
        const closingTag = '</ProjectReference>';

        if (!csprojContent.includes(referenceTag)) {
            const insertPosition = csprojContent.lastIndexOf('</ItemGroup>');
            csprojContent = csprojContent.slice(0, insertPosition) + 
                            `\n    ${referenceTag}\n    ${closingTag}` + 
                            csprojContent.slice(insertPosition);
            
            return vscode.workspace.fs.writeFile(vscode.Uri.file(csprojPath), Buffer.from(csprojContent));
        } else {
            vscode.window.showInformationMessage('Project reference already exists.');
        }
    }).catch(err => {
        vscode.window.showErrorMessage(`Error adding project reference: ${err.message}`);
    });
}