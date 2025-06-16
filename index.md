---
layout: default
title: House Crossland – The Yeoman’s End
---

<div class="mobile-events sidebar-box">
  <h3>Upcoming Events</h3>
  <div class="event-date">E2 – June 13-15, 2025</div>
  <p>Opening of the new season at The Yeoman’s End.</p>
  <div class="event-date">E3 – July 25-27, 2025</div>
  <p>Summer games and festivities.</p>
  <div class="event-date">E4 – September 12-14, 2025</div>
  <p>Wassail Festival and year-end celebrations.</p>
  <div class="special-event">
    <div class="event-date">Grand Crossland Gala – January 2026</div>
    <p>Celebrating Marcus Crossland’s birthday.</p>
    <a href="/gala/">Learn More</a>
  </div>
</div>

<main>
  <div class="content">
    <section id="about">
      <h2>Who We Are</h2>
      <p class="quote">"A handshake can be worth more than gold if you know whose hand to shake." — Marcus Crossland</p>
      <h3>In-Game</h3>
      <p>House Crossland is well-connected, resourceful, and always has an opportunity for those who know where to look...</p>
      <h3>Out-of-Game</h3>
      <p>We’re a friendly and welcoming group at Empire LRP, always happy to help newcomers.</p>
      <button class="hidden-soup-trigger" title="There's nothing to see here." onclick="openSoupModal()">🍲</button>
    </section>

    {% include members.html %}
    {% include former_members.html %}
  </div>

  <aside>
    {% raw %}
    <!-- you can put an aside here or remove this block -->
    {% endraw %}
  </aside>
</main>

<a href="#" class="back-to-top">↑</a>

<div id="lightbox" class="lightbox" onclick="closeLightbox()">
  <span class="close-btn">&times;</span>
  <img id="lightbox-img" class="lightbox-img" alt="Expanded view">
  <button class="prev-btn" onclick="prevGalleryImage(event)">←</button>
  <button class="next-btn" onclick="nextGalleryImage(event)">→</button>
</div>

<div id="soupModal" class="lightbox" onclick="closeSoupModal(event)">
  <span class="close-btn" onclick="closeSoupModal(event)">&times;</span>
  <div style="background:#fff;padding:20px;border:5px solid #d4af37;border-radius:10px;max-width:90%;text-align:left;">
    <h4>Crossland's Soup Time</h4>
    <p>A hearty and warming broth perfect for a chilly evening in the Marches.</p>
    <!-- full recipe here -->
  </div>
</div>
