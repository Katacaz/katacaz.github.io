---
layout: default
---

<section class="section hero">
  <div class="container">
    <p class="kicker">Hi, I’m</p>
    <h1>Your Name</h1>
    <p class="lead">
      Short intro: what you do + what you make.
    </p>

    <div class="cta-row">
      <a class="button primary" href="#creator">See my work</a>
      <a class="button" href="#contact">Get in touch</a>
    </div>
  </div>
</section>

<section id="creator" class="section">
  <div class="container">
    <h2>Creator / Projects</h2>
    <p class="muted">Pick a category on the left to expand details on the right.</p>

    <div class="split">
      <aside class="sidebar" aria-label="Project categories">
        <button class="tab is-active" data-panel="panel-itch">Itch.io</button>
        <button class="tab" data-panel="panel-curseforge">CurseForge</button>
        <button class="tab" data-panel="panel-youtube">YouTube</button>
        <button class="tab" data-panel="panel-twitch">Twitch</button>
      </aside>

      <div class="panels">
        <article id="panel-itch" class="panel is-active">
          <h3>Itch.io</h3>
          <p>Games I’ve built and shared.</p>
          <a class="button" href="https://YOURNAME.itch.io/" target="_blank" rel="noreferrer">Open Itch.io</a>
        </article>

        <article id="panel-curseforge" class="panel">
          <h3>CurseForge</h3>
          <p>Addons / mods I maintain.</p>
          <a class="button" href="https://www.curseforge.com/members/YOURPROFILE" target="_blank" rel="noreferrer">Open CurseForge</a>
        </article>

        <article id="panel-youtube" class="panel">
          <h3>YouTube</h3>
          <p>Videos, devlogs, highlights.</p>
          <a class="button" href="https://www.youtube.com/@YOURHANDLE" target="_blank" rel="noreferrer">Open YouTube</a>
        </article>

        <article id="panel-twitch" class="panel">
          <h3>Twitch</h3>
          <p>Streams and live work.</p>
          <a class="button" href="https://www.twitch.tv/YOURHANDLE" target="_blank" rel="noreferrer">Open Twitch</a>
        </article>
      </div>
    </div>
  </div>
</section>

<section id="contact" class="section">
  <div class="container">
    <h2>Contact</h2>
    <p class="muted">Quickest way: email.</p>
    <p><a href="mailto:youremail@example.com">youremail@example.com</a></p>
  </div>
</section>

<footer class="site-footer">
  <div class="container">
    <p class="muted small">© <span id="year"></span> Your Name</p>
  </div>
</footer>
