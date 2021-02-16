/*
 * ComiXed - A digital comic book library management application.
 * Copyright (C) 2021, The ComiXed Project
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

package org.comixedproject.controller.page;

import org.comixedproject.model.net.library.AddBlockedPageHashRequest;
import org.comixedproject.service.page.BlockedPageHashService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class BlockedPageControllerTest {
  private static final String TEST_PAGE_HASH = "TESTPAGEHASH";

  @InjectMocks private BlockedPageController controller;
  @Mock private BlockedPageHashService blockedPageHashService;

  @Test
  public void testAddBlockedPageHash() {
    Mockito.doNothing().when(blockedPageHashService).addHash(Mockito.anyString());

    controller.addBlockedPageHash(new AddBlockedPageHashRequest(TEST_PAGE_HASH));

    Mockito.verify(blockedPageHashService, Mockito.times(1)).addHash(TEST_PAGE_HASH);
  }

  @Test
  public void testDeleteBlockedPageHash() {
    Mockito.doNothing().when(blockedPageHashService).deleteHash(Mockito.anyString());

    controller.deleteBlockedPageHash(TEST_PAGE_HASH);

    Mockito.verify(blockedPageHashService, Mockito.times(1)).deleteHash(TEST_PAGE_HASH);
  }
}
