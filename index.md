---
layout: base/bar/bar
home: true
title: "HCI & Design at the University of Washington"
---
<section class="hero site-width" aria-labelledby="hero-title">
  <div class="hero-copy">
    <h1 id="hero-title">Design.<br>Use. <span>Build.</span></h1>
    <p class="hero-description">A community for human–computer interaction<br class="desktop-break"> and design at the University of Washington.</p>
    <div class="hero-actions"><a class="button button-purple" href="{{ site.baseurl }}/aboutdub.html">About DUB <span aria-hidden="true">↗</span></a><a class="text-link" href="{{ site.baseurl }}/seminar.html">View seminars <span aria-hidden="true">→</span></a></div>
  </div>
  {% include hero-slideshow.html %}
</section>
<section class="happening-section site-width" aria-labelledby="happening-title">
  <div class="section-heading"><div><h2 id="happening-title">News and events</h2></div><a class="text-link" href="{{ site.baseurl }}/seminar.html">Explore our seminars <span aria-hidden="true">↗</span></a></div>
  <div class="happening-grid">
    <a class="research-feature" href="{{ site.baseurl }}/posts/2026/chi2026papers.html">
      <div class="feature-image"><img src="{{ site.baseurl }}/posts/2026/chi2026_slide.png" alt="Colorful geometric artwork with a Barcelona skyline for CHI 2026" loading="lazy"></div>
      <div class="feature-copy"><div><h3>DUB at CHI 2026</h3><p>Browse papers from University of Washington researchers at CHI 2026.</p></div><span class="circle-arrow" aria-hidden="true">↗</span></div>
    </a>
    <div class="seminar-feature">
      <div class="seminar-feature-heading"><h3>Upcoming events</h3></div>
      {% assign upcoming = site.seminars | seminar_upcoming: site.time | sort: 'date' %}
      {% for item_seminar in upcoming limit: 2 %}
      <a class="event-item" href="{{ site.baseurl }}{% if item_seminar.no_seminar %}/seminar.html{% else %}{{ item_seminar.url }}{% endif %}">
        <div class="event-date"><span>{{ item_seminar.date | date: '%b' }}</span><strong>{{ item_seminar.date | date: '%d' }}</strong></div>
        <div class="event-copy"><span class="event-type">{% if item_seminar.no_seminar %}Community calendar{% else %}DUB seminar{% endif %}</span><h3>{% if item_seminar.no_seminar and item_seminar.tbd_title %}{{ item_seminar.no_seminar_text }}{% elsif item_seminar.tbd_title %}{% if item_seminar.speakers.size > 0 %}{% for speaker in item_seminar.speakers %}{% for name in speaker.name offset: 1 %}{{ name }} {% endfor %}{{ speaker.name[0] }}{% unless forloop.last %}, {% endunless %}{% endfor %}{% else %}DUB Seminar{% endif %}{% else %}{{ item_seminar.title }}{% endif %}</h3><p>{% unless item_seminar.no_seminar %}{{ item_seminar.time }}{% unless item_seminar.tbd_location %}<br>{{ item_seminar.location }}{% endunless %}{% endunless %}</p></div>
      </a>
      {% else %}
      <div class="event-empty"><h3>No upcoming seminars scheduled</h3><p>Join the mailing list for the next seminar announcement, or explore past talks.</p></div>
      {% endfor %}
      <a class="text-link" href="{{ site.baseurl }}/seminar.html">View the full schedule <span aria-hidden="true">→</span></a>
    </div>
  </div>
</section>
<section class="community-section" aria-labelledby="community-title">
  <div class="site-width community-grid">
    <div class="community-image"><img src="{{ site.baseurl }}/images/slide_design.jpg" alt="DUB community members sharing ideas around a table at a design workshop" loading="lazy"></div>
    <div class="community-copy"><h2 id="community-title">About DUB</h2><p>We’re a grassroots community of faculty, students, researchers, and industry partners exploring how technology can better serve people.</p><p>Across the University of Washington and beyond, we come together to share ideas, advance research, and learn from one another.</p><a class="text-link" href="{{ site.baseurl }}/aboutdub.html">More about DUB <span aria-hidden="true">↗</span></a></div>
  </div>
</section>
<section class="pathways-section site-width" aria-labelledby="pathways-title">
  <div class="section-heading"><div><h2 id="pathways-title">Programs and participation</h2></div></div>
  <div class="pathways-grid">
    <a class="pathway" href="{{ site.baseurl }}/seminar.html"><h3>Seminars</h3><p>Attend talks by researchers and practitioners in human–computer interaction and design.</p><span class="text-link">Explore the series <span aria-hidden="true">↗</span></span></a>
    <a class="pathway" href="{{ site.baseurl }}/reu.html"><h3>Undergraduate research</h3><p>Find undergraduate research opportunities in human–computer interaction and design.</p><span class="text-link">Discover the REU program <span aria-hidden="true">↗</span></span></a>
    <a class="pathway" href="{{ site.baseurl }}/gettinginvolved.html#tab_mailing_lists_and_slack"><h3>Mailing lists and Slack</h3><p>Connect with the community through our mailing lists and Slack conversations.</p><span class="text-link">Get connected <span aria-hidden="true">↗</span></span></a>
  </div>
</section>
<section class="join-section site-width"><div><h2>Connect with DUB</h2></div><a class="button button-purple" href="{{ site.baseurl }}/gettinginvolved.html">Get involved <span aria-hidden="true">↗</span></a></section>
