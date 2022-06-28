import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslationComponent } from './translation.component';

const routes: Routes = [{ path: '', component: TranslationComponent }];

@NgModule({
  declarations: [TranslationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class TranslationModule {}
