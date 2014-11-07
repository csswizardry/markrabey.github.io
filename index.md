---
layout: landing
title: Home
masthead-title: Mark Rabey<br />Full-Stack Web Developer
page-class: page--home
---


<section class="band  band--tint" id="services">
    <div class="wrapper  wrapper--wide">
        <!-- <h2 class="heading">Services</h2> -->
        <ul class="grid">

            <li class="grid__item  grid__item--desk-one-third">
                <div class="media">
                    <!-- <img src="holder.js/100x200/text:&lt; \/ &gt;" alt="Icon" class="media__img"> -->
                    <div class="media__body">
                        <h2 class="heading">Web Development</h2>
                        <p>Whether front-end user experience, or back-end architecture, I focus on writing clear, maintainable code, and I am passionate about scalability and performance.</p>
                    </div>
                </div>
            </li
            
            ><li class="grid__item  grid__item--lap-and-up-one-half  grid__item--desk-one-third">
                <div class="media">
                    <!-- <img src="holder.js/100x200/text:..." alt="Icon" class="media__img"> -->
                    <div class="media__body">
                       <h2 class="heading">Training</h2>
                       <p>I can help you and your team work more efficiently together, and write more structured and maintainable code.</p>
                    </div>
                </div>
            </li

            ><li class="grid__item  grid__item--lap-and-up-one-half  grid__item--desk-one-third">
                <div class="media">
                    <!-- <img src="holder.js/100x200/text:SEO" alt="Icon" class="media__img"> -->
                    <div class="media__body">
                        <h2 class="heading">Search Engine Optimisation</h2>
                        <p>I can identify your Search Engine strengths, weaknesses, opportunities, and threats. Then work with you to optimise your site and implement an SEO and SEM strategy.</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</section>

<div class="divider  divider--tall  divider--desk"></div>

<div class="wrapper">
    <div class="grid  grid--large">
        <div class="[ grid__item  grid__item--lap-and-up-one-half  grid__item--desk-two-thirds ]  mb">

            <section class="post">
                <h2 class="heading">Recent Blog Entries</h2>

                <ul class="list-ui  post__list">  
                    {% for post in site.posts limit:3 %}  
                       <li class="list-ui__item">
                           <time class="post__date" datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%A, %B %d, %Y" }}</time>
                           <h3 class="post__title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
                           <p class="post__excerpt">{{ post.excerpt | remove: '<p>' | remove: '</p>' | truncatewords:35}}</p>
                        </li>
                    {% endfor %}  
                </ul>
            </section>
            <a href="/blog/" class="[ btn  btn--full  btn--secondary ] mt">Read more entries</a>
        </div

        ><div class="grid__item  grid__item--lap-and-up-one-half  grid__item--desk-one-third">

            <div class="[ box  box--highlight ]  mb">
                {% include social-links.html %}
            </div>

            <div class="[ box  box--highlight ]  mb">
                {% include job-listings.html %}
            </div>

            <div class="text-center">
                <!-- Page Rectangle -->
                <ins class="adsbygoogle"
                     style="display:inline-block;width:300px;height:250px"
                     data-ad-client="ca-pub-1949517550744410"
                     data-ad-slot="1418843683"></ins>
                <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>
    </div> <!-- close .grid -->
</div> <!-- close .wrapper -->
