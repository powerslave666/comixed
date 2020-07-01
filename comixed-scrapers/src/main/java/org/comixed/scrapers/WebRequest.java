/*
 * ComiXed - A digital comic book library management application.
 * Copyright (C) 2017, The ComiXed Project
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

package org.comixed.scrapers;

/**
 * <code>WebRequest</code> represents a type for describing a web service request.
 *
 * <p>Requests are executed by an instance of {@link WebRequestProcessor}.
 *
 * @author Darryl L. Pierce
 */
public interface WebRequest {
  /**
   * Returns the URL for the request.
   *
   * @return the URL
   * @throws WebRequestException if the URL is missing data
   */
  String getURL() throws WebRequestException;
}