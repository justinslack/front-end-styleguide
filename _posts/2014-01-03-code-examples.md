---
layout: post
title:  "Code examples"
---

###HTML
{% highlight html %}
<div class="search">
    <form id="search-form" action="@Url.Action("Search", "Cms")" method="GET">
        <fieldset>
            <input type="text" name="q" class="search-input">
            <input type="submit" class="search_submit">
        </fieldset>
    </form>
</div>
{% endhighlight %}

###CSS
{% highlight css %}
.menu > li::before {
    content: counter(decimal) "";
    counter-increment: item;
    margin-right: 15px;
    background-color: #f87039;
    padding: 0 5px;
    color: #fff;
}
{% endhighlight %}

###JS
{% highlight JavaScript %}
$(function () {
    function Node(name, level, topLevelActive, children) {
        var self = this;
        self.name = name;
        self.children = children;

        self.disabled = ko.observable(false);
        self.childrenVisible = ko.observable(false);
        self.nodeLevel = ko.observable(level);
        self.isTopLevelActive = ko.observable(topLevelActive);

        //computed
        self.haveChildren = ko.computed(function () {
            return self.children && self.children.length > 0;
        });

    };
{% endhighlight %}

###SCSS
{% highlight scss %}
@mixin maintain-ratio($ratio: 1 1) {
  @if length($ratio) < 2 or length($ratio) > 2 {
  @warn "$ratio must be a list with two values.";
  }

  $width: 100%;
  $height: percentage(nth($ratio, 2) / nth($ratio, 1));
  width: $width;
  height: 0;
  padding-bottom: $height;
  position: relative;
}
{% endhighlight %}