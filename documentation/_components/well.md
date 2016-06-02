---
layout: component
type: component
title: Wells
---

#### Basic Well

<div class="c-well">
  <p>Well content goes here</p>
</div>

<pre>
  <code>
    &lt;div class="c-well">
      &lt;p>Well content goes here.&lt;/p>
    &lt;/div>
  </code>
</pre>

#### Informational Well

<div class="c-well c-well--info">
  <p>This is an informational well.</p>
</div>

<pre>
  <code>
    &lt;div class="c-well c-well--info">
      &lt;p>This is an informational well.&lt;/p>
    &lt;/div>
  </code>
</pre>

#### Alert Well

<div class="c-well c-well--alert">
  <p>This is an alert well.</p>
</div>

<pre>
  <code>
    &lt;div class="c-well c-well--alert">
      &lt;p>This is an alert well.&lt;/p>
    &lt;/div>
  </code>
</pre>

#### Dark Well

<div class="c-well c-well--dark">
  <p>This is a dark well.</p>
</div>

<pre>
  <code>
    &lt;div class="c-well c-well--dark">
      &lt;p>This is a dark well.&lt;/p>
    &lt;/div>
  </code>
</pre>

#### Large Well

<div class="c-well c-well--dark c-well--xl-padding u-text-align--center">
  <div class="container container--med">
    <div class="section">
      <h2 class="heading heading--h1 heading--serif heading--italic heading--extrabold">The Voice of Southern California.</h2>
      <p class="text text--sans-alt text--large">Angelenos rely on KPCC’s member-supported news to stay informed.</p>
      <p class="text text--sans-alt text--large text--light">Listen to our broadcast, check out our top stories below, or sign up for vital news delivered to your inbox every afternoon.</p>
    </div>
    <a href="#" class="c-btn c-btn--primary">Show me the news now</a>
    &nbsp;
    <a href="#" class="c-btn c-btn--primary">Send news to my inbox</a>
  </div>
</div>

<pre>
  <code>
    &lt;div class="c-well c-well--dark c-well--xl-padding u-text-align--center">
      &lt;div class="container container--med">
        &lt;div class="section">
          &lt;h2 class="heading heading--h1 heading--serif heading--italic heading--extrabold">The Voice of Southern California.&lt;/h2>
          &lt;p class="text text--sans-alt text--large">Angelenos rely on KPCC’s member-supported news to stay informed.&lt;/p>
          &lt;p class="text text--sans-alt text--large text--light">Listen to our broadcast, check out our top stories below, or sign up for vital news delivered to your inbox every afternoon.&lt;/p>
        &lt;/div>
        &lt;a href="#" class="c-btn c-btn--primary">Show me the news now&lt;/a>
        &nbsp;
        &lt;a href="#" class="c-btn c-btn--primary">Send news to my inbox&lt;/a>
      &lt;/div>
    &lt;/div>
  </code>
</pre>

#### Dismissible Well

_A well that can be dismissed by a user, with the option to set a cookie so the well is permanently hidden if a user dismisses it or views it a certain number of times._

<div class="c-well c-well--dark c-well--dismissible js-well js-well--dismissible" data-name="example-well" data-views="300">
  <p>This is a dismissible well.</p>
  <button class="c-well__dismiss-btn js-well--dismiss-btn">
    <svg class="icon icon--size-med">
      <use class="icon--line icon--color-gray icon--inherit-hover" xlink:href="#icon_line-close"/>
    </svg>
  </button>
  </span>
</div>

<pre>
  <code>
    &lt;div class="c-well c-well--dismissible">
      &lt;p>This is a dismissible well.&lt;/p>
    &lt;/div>
  </code>
</pre>
