/*
 * ComixEd - A digital comic book library management application.
 * Copyright (C) 2017, Darryl L. Pierce
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.package
 * org.comixed;
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';

import {ComicRoutingModule} from './comic-routing.module';
import {ComicListComponent} from './comic-list/comic-list.component';
import {ImportComicListComponent} from './import-comic-list/import-comic-list.component';
import {ComicListEntryComponent} from './comic-list-entry/comic-list-entry.component';
import {ComicDetailsComponent} from './comic-details/comic-details.component';
import {DuplicatePageListComponent} from './duplicate-page-list/duplicate-page-list.component';
import {DuplicatePageListEntryComponent} from './duplicate-page-list-entry/duplicate-page-list-entry.component';
import {PageThumbnailComponent} from './page-thumbnail/page-thumbnail.component';
import {ReadViewerComponent} from './read-viewer/read-viewer.component';
import {SeriesFilterPipe} from './series-filter.pipe';
import { PageDetailsComponent } from './page-details/page-details.component';

@NgModule({
  imports: [
    CommonModule,
    ComicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
      cancelButtonType: 'basic',
    }),
    NgxPaginationModule,
  ],
  declarations: [
    ComicListComponent,
    ImportComicListComponent,
    ComicListEntryComponent,
    ComicDetailsComponent,
    DuplicatePageListComponent,
    DuplicatePageListEntryComponent,
    PageThumbnailComponent,
    ReadViewerComponent,
    SeriesFilterPipe,
    PageDetailsComponent,
  ]
})
export class ComicModule {}
