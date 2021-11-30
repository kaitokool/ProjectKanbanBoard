import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainKanbanComponent } from './modules/main-kanban/main-kanban.component';
import { MainComponent } from './shared/components/main/main.component';

const routes: Routes = [
	{
		path: '', component: MainComponent,
		children: [
			{
				path: '', component: MainKanbanComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
