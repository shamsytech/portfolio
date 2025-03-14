import { Component } from '@angular/core';
import { projectMocks } from './mocks/project-mocks';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects = projectMocks;
}
