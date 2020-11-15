/*
 * ComiXed - A digital comic book library management application.
 * Copyright (C) 2020, The ComiXed Project
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses>
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import {
  BUSY_FEATURE_KEY,
  reducer as busyReducer
} from '@app/core/reducers/busy.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(BUSY_FEATURE_KEY, busyReducer),
    EffectsModule.forFeature([]),
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: []
})
export class CoreModule {}
