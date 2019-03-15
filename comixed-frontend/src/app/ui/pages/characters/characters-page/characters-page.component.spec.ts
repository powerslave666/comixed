/*
 * ComiXed - A digital comic book library management application.
 * Copyright (C) 2019, The ComiXed Project
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { libraryReducer } from '../../../../reducers/library.reducer';
import * as LibraryActions from '../../../../actions/library.actions';
import { LibraryFilterComponent } from '../../../components/library/library-filter/library-filter.component';
import { CharactersPageComponent } from './characters-page.component';

describe('CharactersPageComponent', () => {
  let component: CharactersPageComponent;
  let fixture: ComponentFixture<CharactersPageComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        FormsModule,
        StoreModule.forRoot({ library: libraryReducer }),
        RouterTestingModule,
        ButtonModule,
        DropdownModule,
        TableModule,
        PanelModule
      ],
      declarations: [CharactersPageComponent,
        LibraryFilterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.dispatch(new LibraryActions.LibraryReset());

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});