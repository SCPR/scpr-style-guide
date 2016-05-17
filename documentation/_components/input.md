---
layout: component
type: component
title: Inputs
---

#### Text Input

<input type="text" class="input-text" placeholder="First Name" />
<input type="text" class="input-text input--narrow" placeholder="Middle Initial" />
<input type="text" class="input-text input--wide" placeholder="Last Name" />

<pre>
  <code>
    &lt;input type="text" class="input-text" placeholder="First Name" />
    &lt;input type="text" class="input-text input--narrow" placeholder="Middle Initial" />
    &lt;input type="text" class="input-text input--wide" placeholder="Last Name" />
</code>
</pre>

#### Text Input + Label

<label class="input-group">
  <input type="text" class="input-text" placeholder="First Name" />
  <span class="input-label">First Name</span>
</label>

<pre>
  <code>
    &lt;label class="input-group">
      &lt;input type="text" class="input-text" placeholder="First Name" />
      &lt;span class="input-label">First Name&lt;/span>
    &lt;/label>
</code>
</pre>

#### Text Input Error State

<label class="input-group">
  <span class="input-help input-help--error">* letters only</span>
  <input type="text" class="input-text input--error" placeholder="First Name" value="12345" />
  <span class="input-label">First Name</span>
</label>

<pre>
  <code>
    &lt;label class="input-group">
      &lt;span class="input-help input-help--error">* letters only&lt;/span>
      &lt;input type="text" class="input-text input--error" placeholder="First Name" value="12345" />
      &lt;span class="input-label">First Name&lt;/span>
    &lt;/label>
  </code>
</pre>
