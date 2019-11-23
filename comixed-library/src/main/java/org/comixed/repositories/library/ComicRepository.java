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

package org.comixed.repositories.library;

import java.util.Date;
import java.util.List;
import org.comixed.model.library.Comic;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ComicRepository extends JpaRepository<Comic, Long> {
  /**
   * Returns all comics not read by the specified user.
   *
   * @param userId the user's id
   * @return the list of comics
   */
  List<Comic> findAllUnreadByUser(@Param("userId") long userId);

  /**
   * Finds a comic based on filename.
   *
   * @param filename the filename
   * @return the comic
   */
  Comic findByFilename(String filename);

  /**
   * Returns all comic entries for the given series name.
   *
   * @param series the series name
   * @return the list of comics
   */
  List<Comic> findBySeries(String series);

  /**
   * Return all comic entries that have been updated after the specified timestamp.
   *
   * @param timestamp the timestamp
   * @param pageable the constraints
   * @return the list of comics
   */
  List<Comic> findAllByDateLastUpdatedGreaterThan(Date timestamp, Pageable pageable);

  /**
   * Returns the most recently updated comics.
   *
   * @param pageable the constraints
   * @return the list of comics
   */
  List<Comic> findTopByOrderByDateLastUpdatedDesc(Pageable pageable);

  /**
   * Returns the list of all comic locations.
   *
   * @return the locations
   */
  List<String> getLocationNames();

  int getComicCountForLocation(@Param("name") String name);

  List<String> getPublisherNames();

  int getComicCountForPublisher(@Param("name") String name);

  List<String> getSeriesNames();

  int getComicCountForSeries(@Param("name") String name);

  List<String> getCharacterNames();

  int getComicCountForCharacter(@Param("name") String name);

  List<String> getTeamNames();

  int getComicCountForTeam(@Param("name") String name);

  List<String> getStoryNames();

  int getComicCountForStory(@Param("name") String name);

  List<Comic> getComicPageForPublisher(@Param("name") String name, Pageable page);

  List<Comic> getComicPageForSeries(@Param("name") String name, Pageable page);

  List<Comic> getComicPageForCharacter(@Param("name") String name, Pageable page);

  List<Comic> getComicPageForTeam(@Param("name") String name, Pageable page);

  List<Comic> getComicPageForLocation(@Param("name") String name, Pageable page);

  List<Comic> getComicPageForStory(@Param("name") String name, Pageable page);
}