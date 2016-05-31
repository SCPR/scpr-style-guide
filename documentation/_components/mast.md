---
layout: component
type: component
title: Masthead
---

#### Masthead - Full

<div class="mast">
  <button class="mast__mobile-menu-toggler js-mast__menu-toggler">
    <svg class="icon icon--size-med">
      <use class="icon--line icon--color-gray-dark icon--inherit-hover" xlink:href="#icon_line-menu"/>
    </svg>
    <label>Menu</label>
  </button>
  <button class="mast__mobile-menu-toggler js-mast__menu-close js--hidden">
    <svg class="icon icon--size-med">
      <use class="icon--line icon--color-gray-dark icon--inherit-hover" xlink:href="#icon_line-close"/>
    </svg>
    <label>Close</label>
  </button>
  <div class="mast__branding">
    <a href="/" class="mast__logo-link">
      <svg class="mast__logo">
        <use class="" xlink:href="/img/scpr-sprite.svg#logo_kpcc-black"/>
      </svg>
    </a>
    <span class="mast__divider"></span>
    <ul class="mast__currently-airing c-nav js-search--hide">
      <li class="c-nav__item">
        <a class="mast__currently-airing-label c-nav__link c-nav__link--action c-nav__link--inline" href="#">
          <svg class="icon icon--size-lg icon--size-lg@mobile-tablet icon--left">
            <use class="icon--line icon--color-link" xlink:href="#icon_line-listen-live"/>
          </svg>
          Listen Live
          <span class="mast__currently-airing-program">- A Prairie Home Companion</span>
        </a>
      </li>
    </ul>
  </div>
  <nav class="mast__nav js-mast__menu-mobile">
    <ul class="c-nav mast__nav-sections js-search--hide">
      <li class="c-nav__item"><a class="c-nav__link" href="#">News</a></li>
      <li class="c-nav__item"><a class="c-nav__link" href="#">Programs</a></li>
      <li class="c-nav__item"><a class="c-nav__link" href="#">Events</a></li>
      <li class="c-nav__item"><a class="c-nav__link" href="#">Support</a></li>
      <li class="c-nav__item"><a class="c-nav__link" href="#">About</a></li>
    </ul>
    <ul class="c-nav mast__nav-actions">
      <li class="c-nav__item">
        <div class="c-search js-search js--hidden">
          <form method="get" action="/search/" id="site-search">
            <input type="text" class=" input-text input--wide input--align-bottom input--focused-placeholder" placeholder="Enter your search here" name="q" id="q" />
            <button type="submit" class="c-btn c-btn--icon c-btn--outline-secondary">
              <svg class="icon icon--size-med">
                <use class="icon--line icon--color-link icon--inherit-hover" xlink:href="#icon_line-search"/>
              </svg>
            </button>
          </form>
        </div>
        <a class="mast__search-link c-nav__link js-search--toggle js-search--hide" href="#">
          <svg class="icon icon--size-med icon--size-med@mobile-tablet">
            <use class="icon--line icon--color-gray" xlink:href="#icon_line-search"/>
          </svg>
        </a>
      </li>
      <li class="c-nav__item">
        <span class="mast__divider mast__divider--margin-sm"></span>
      </li>
      <li class="c-nav__item">
        <a class="mast__donate-link c-nav__link c-nav__link--action" href="#">
          <svg class="icon icon--size-med icon--left">
            <use class="icon--line icon--color-link" xlink:href="#icon_line-donate"/>
          </svg>
          Donate
        </a>
      </li>
    </ul>
  </nav>
</div>

<pre>
  <code>
    &lt;div class="mast">
      &lt;button class="mast__mobile-menu-toggler js-mast__menu-toggler">
        &lt;svg class="icon icon--size-med">
          &lt;use class="icon--line icon--color-gray-dark icon--inherit-hover" xlink:href="#icon_line-menu"/>
        &lt;/svg>
        &lt;label>Menu&lt;/label>
      &lt;/button>
      &lt;button class="mast__mobile-menu-toggler js-mast__menu-close js--hidden">
        &lt;svg class="icon icon--size-med">
          &lt;use class="icon--line icon--color-gray-dark icon--inherit-hover" xlink:href="#icon_line-close"/>
        &lt;/svg>
        &lt;label>Close&lt;/label>
      &lt;/button>
      &lt;div class="mast__branding">
        &lt;a href="/" class="mast__logo-link">
          &lt;svg class="mast__logo">
            &lt;use class="" xlink:href="/img/scpr-sprite.svg#logo_kpcc-black"/>
          &lt;/svg>
        &lt;/a>
        &lt;span class="mast__divider">&lt;/span>
        &lt;ul class="mast__currently-airing c-nav js-search--hide">
          &lt;li class="c-nav__item">
            &lt;a class="mast__currently-airing-label c-nav__link c-nav__link--action c-nav__link--inline" href="#">
              &lt;svg class="icon icon--size-lg icon--size-lg@mobile-tablet icon--left">
                &lt;use class="icon--line icon--color-link" xlink:href="#icon_line-listen-live"/>
              &lt;/svg>
              Listen Live
              &lt;span class="mast__currently-airing-program">- A Prairie Home Companion&lt;/span>
            &lt;/a>
          &lt;/li>
        &lt;/ul>
      &lt;/div>
      &lt;nav class="mast__nav js-mast__menu-mobile">
        &lt;ul class="c-nav mast__nav-sections js-search--hide">
          &lt;li class="c-nav__item">&lt;a class="c-nav__link" href="#">News&lt;/a>&lt;/li>
          &lt;li class="c-nav__item">&lt;a class="c-nav__link" href="#">Programs&lt;/a>&lt;/li>
          &lt;li class="c-nav__item">&lt;a class="c-nav__link" href="#">Events&lt;/a>&lt;/li>
          &lt;li class="c-nav__item">&lt;a class="c-nav__link" href="#">Support&lt;/a>&lt;/li>
          &lt;li class="c-nav__item">&lt;a class="c-nav__link" href="#">About&lt;/a>&lt;/li>
        &lt;/ul>
        &lt;ul class="c-nav mast__nav-actions">
          &lt;li class="c-nav__item">
            &lt;div class="c-search js-search js--hidden">
              &lt;form method="get" action="/search/" id="site-search">
                &lt;input type="text" class=" input-text input--wide input--align-bottom input--focused-placeholder" placeholder="Enter your search here" name="q" id="q" />
                &lt;button type="submit" class="c-btn c-btn--icon c-btn--outline-secondary">
                  &lt;svg class="icon icon--size-med">
                    &lt;use class="icon--line icon--color-link icon--inherit-hover" xlink:href="#icon_line-search"/>
                  &lt;/svg>
                &lt;/button>
              &lt;/form>
            &lt;/div>
            &lt;a class="mast__search-link c-nav__link js-search--toggle js-search--hide" href="#">
              &lt;svg class="icon icon--size-med icon--size-med@mobile-tablet">
                &lt;use class="icon--line icon--color-gray" xlink:href="#icon_line-search"/>
              &lt;/svg>
            &lt;/a>
          &lt;/li>
          &lt;li class="c-nav__item">
            &lt;span class="mast__divider mast__divider--margin-sm">&lt;/span>
          &lt;/li>
          &lt;li class="c-nav__item">
            &lt;a class="mast__donate-link c-nav__link c-nav__link--action" href="#">
              &lt;svg class="icon icon--size-med icon--left">
                &lt;use class="icon--line icon--color-link" xlink:href="#icon_line-donate"/>
              &lt;/svg>
              Donate
            &lt;/a>
          &lt;/li>
        &lt;/ul>
      &lt;/nav>
    &lt;/div>
  </code>
</pre>
