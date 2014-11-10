---
layout: page
title: Portfolio
page-class: page--portfolio
permalink: /portfolio/
---

Please be patient, more projects are being added to this area shortly.

<section class="post">
    <ul class='list-ui  post__list  mb'>
        {% for item in site.portfolio %}
        <li class="list-ui__item">
        	<div class="grid">
        		<div class="grid__item  grid__item--lap-one-half  grid__item--desk-one-quarter">
        			<a href="{{ item.url }}"><img src="/assets/images/portfolio/thumbnails/{{ item.image_name }}" alt="{{ item.title }}" class="post__img"></a>
        		</div><!--
        	--><div class="grid__item  grid__item--lap-one-half  grid__item--desk-three-quarters">
        			<h2 class="post__title"><a href="{{ item.url }}">{{ item.title }}</a></h2>
        		</div>
        	</div>            
        </li>
        {% endfor %}
    </ul>
</section>