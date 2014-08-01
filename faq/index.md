---
layout: page
title: Using Markdown
---

##Headers

{% highlight HTML %}
#Header One
##Header Two
###Header Three
####Header Four
#####Header Five
######Header Six
{% endhighlight %}

Renders:
#Header One
##Header Two
###Header Three
####Header Four
#####Header Five
######Header Six
<br>
And the following HTML:

{% highlight HTML %}
<h1>Header One</h1>
<h2>Header Two</h2>
<h3>Header Three</h3>
<h4>Header Four</h4>
<h5>Header Five</h5>
<h6>Header Six</h6>
{% endhighlight %}

<br>
<br>
<br>

---


##Paragraphs

Body copy can be written as normal, plain text and will be wrapped with paragraph tags in the rendered HTML.

{% highlight HTML %}
This is a paragraph with some **bold text** and a bit of *emphasis*.

Hit return twice to automatically create paragraphs.
{% endhighlight %}

Renders:

This is a paragraph with some **bold text** and a bit of *emphasis*.

Hit return twice to automatically create paragraphs.

And the following HTML:

{% highlight HTML %}
<p>This is a paragraph with some <strong>bold text</strong> and a bit of<em>emphasis</em>.</p>
<p>Hit return twice to automatically create paragraphs.</p>
{% endhighlight %}

<br>
<br>
<br>

---

##Lists

###Ordered list

{% highlight HTML %}
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem
{% endhighlight %}

Renders:

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem

And the following HTML:
{% highlight HTML %}
<ol>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Nulla volutpat aliquam velit</li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
</ol>
{% endhighlight %}
###Unordered list

Any of the following symbols will denote bullets for each list item:

{% highlight HTML %}
* valid bullet
- valid bullet
+ valid bullet
{% endhighlight %}

{% highlight HTML %}
+ Lorem ipsum dolor sit amet
+ Consectetur adipiscing elit
+ Integer molestie lorem at massa
+ Facilisis in pretium nisl aliquet
+ Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoreet porttitor sem
  - Ac tristique libero volutpat at
+ Faucibus porta lacus fringilla vel
+ Aenean sit amet erat nunc
+ Eget porttitor lorem
{% endhighlight %}

Renders:

+ Lorem ipsum dolor sit amet
+ Consectetur adipiscing elit
+ Integer molestie lorem at massa
+ Facilisis in pretium nisl aliquet
+ Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoreet porttitor sem
  - Ac tristique libero volutpat at
+ Faucibus porta lacus fringilla vel
+ Aenean sit amet erat nunc
+ Eget porttitor lorem

And the following HTML:
{% highlight HTML %}
<ul>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Nulla volutpat aliquam velit
        <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
        </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
</ul>
{% endhighlight %}

<br>
<br>
<br>

---

##Blockquote

{% highlight HTML %}
>Let's make a blockquote
{% endhighlight %}

Renders:

>Let's make a blockquote

And the following HTML:
{% highlight HTML %}
<blockquote>
    <p>Let's make a blockquote</p>
</blockquote>
{% endhighlight %}

<br>
<br>
<br>

---

##A horizontal rule

{% highlight HTML %}

___ three consecutive underscores
--- three consecutive dashes
*** three consecutive asterisks

{% endhighlight %}

Renders:

___
---
***

And the following HTML:
{% highlight HTML %}
<hr>
<hr>
<hr>
{% endhighlight %}

<br>
<br>
<br>

---

##An inline link

{% highlight HTML %}
An [inline link](http://newmedialabs.co.za)
{% endhighlight %}

Renders:

An [inline link](http://newmedialabs.co.za)

And with a title:

{% highlight HTML %}
An [inline link](http://newmedialabs.co.za "Inline link")
{% endhighlight %}

Renders:

An [inline link](http://newmedialabs.co.za "Inline link")

And the following HTML:
{% highlight HTML %}
<a title="Inline link" href="http://newmedialabs.co.za">inline link</a>
{% endhighlight %}
<br>
<br>
<br>

---


##An image

Images are similar to links but are preceded by an exclamation mark.

{% highlight HTML %}
![A swimming pool](/assets/img/pool.jpg "A swimming pool")
{% endhighlight %}

Renders:

![A swimming pool](/assets/img/pool.jpg "A swimming pool")

And the following HTML:
{% highlight HTML %}
<img src="/assets/img/pool.jpg" alt="A swimming pool" title="A swimming pool">
{% endhighlight %}

<br>
<br>
<br>