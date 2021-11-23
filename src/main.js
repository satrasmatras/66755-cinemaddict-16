import { renderTemplate, RenderPosition } from './utils/render';

import { createProfileTemplate } from './view/profile-view';
import { createMainNavigationTemplate } from './view/main-navigation-view';
import { createSortTemplate } from './view/sort-view';
import { createContentTemplate } from './view/content-view';
import { createMainListTemplate } from './view/main-list-view';
import { createCardTemplate } from './view/card-view';
import { createShowMoreButtonTemplate } from './view/show-more-button-view';
import { createExtraListTemplate } from './view/extra-list-view';
import { createStatisticsTemplate } from './view/statistics-view';
import { createPopupTemplate } from './view/popup-view';

const headerElement = document.querySelector('.header');
renderTemplate(headerElement, createProfileTemplate(), RenderPosition.BEFORE_END);

const mainElement = document.querySelector('.main');
renderTemplate(mainElement, createMainNavigationTemplate(), RenderPosition.AFTER_BEGIN);
renderTemplate(mainElement, createSortTemplate(), RenderPosition.BEFORE_END);

renderTemplate(mainElement, createContentTemplate(), RenderPosition.BEFORE_END);
const contentElement = mainElement.querySelector('.films');
renderTemplate(contentElement, createMainListTemplate(), RenderPosition.AFTER_BEGIN);

const mainFilmsList = contentElement.querySelector('.films-list');
const mainFilmListContainerElement = contentElement.querySelector('.films-list__container');

for (let i = 0; i < 5; i++) {
  renderTemplate(mainFilmListContainerElement, createCardTemplate(), RenderPosition.BEFORE_END);
}

renderTemplate(mainFilmsList, createShowMoreButtonTemplate(), RenderPosition.BEFORE_END);

renderTemplate(contentElement, createExtraListTemplate(), RenderPosition.BEFORE_END);
const topRatedListElement = contentElement.querySelector('.films-list--extra');
const topRatedListContainerElement = topRatedListElement.querySelector('.films-list__container');

for (let i = 0; i < 2; i++) {
  renderTemplate(topRatedListContainerElement, createCardTemplate(), RenderPosition.BEFORE_END);
}

renderTemplate(contentElement, createExtraListTemplate(), RenderPosition.BEFORE_END);
const mostCommentedListElement = contentElement.querySelectorAll('.films-list--extra')[1];
const mostCommentedListContainerElement = mostCommentedListElement.querySelector('.films-list__container');

for (let i = 0; i < 2; i++) {
  renderTemplate(mostCommentedListContainerElement, createCardTemplate(), RenderPosition.BEFORE_END);
}

const statisticsElement = document.querySelector('.footer__statistics');
renderTemplate(statisticsElement, createStatisticsTemplate(), RenderPosition.BEFORE_END);

const bodyElement = document.querySelector('body');
renderTemplate(bodyElement, createPopupTemplate(), RenderPosition.BEFORE_END);
