<script>
  let currentIndex = 0;

  const screenshots = [
    {
      src: '/screenshots/menu.png',
      alt: 'Psaiduck Menu Bar',
      title: 'Quick Access Menu',
      description: 'Access all your actions from the menu bar with customizable hotkeys.'
    },
    {
      src: '/screenshots/explanation.png',
      alt: 'Explanation Popup',
      title: 'AI-Powered Explanations',
      description: 'Get detailed explanations with beautiful markdown rendering.'
    },
    {
      src: '/screenshots/actions.png',
      alt: 'Actions Settings',
      title: 'Manage Actions',
      description: 'Create and customize actions with your own prompts and hotkeys.'
    }
  ];

  function next() {
    currentIndex = (currentIndex + 1) % screenshots.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
  }
</script>

<section id="screenshots">
  <div class="section-container">
    <h2 class="section-title">See It In Action</h2>
    <p class="section-subtitle">
      A beautiful, intuitive interface designed for productivity.
    </p>

    <div class="relative max-w-4xl mx-auto">
      <!-- Screenshot Display -->
      <div class="relative bg-psaiduck-dark-lighter rounded-2xl p-4 md:p-8 glow">
        <div class="aspect-video relative overflow-hidden rounded-xl bg-black/50 flex items-center justify-center">
          <img
            src={screenshots[currentIndex].src}
            alt={screenshots[currentIndex].alt}
            class="max-w-full max-h-full object-contain"
            on:error={(e) => e.target.style.display = 'none'}
          />
          <div class="absolute inset-0 flex items-center justify-center text-gray-500" id="placeholder">
            <span class="text-lg">Screenshot: {screenshots[currentIndex].title}</span>
          </div>
        </div>

        <!-- Caption -->
        <div class="mt-6 text-center">
          <h3 class="text-xl font-semibold mb-2">{screenshots[currentIndex].title}</h3>
          <p class="text-gray-400">{screenshots[currentIndex].description}</p>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex justify-center items-center gap-4 mt-8">
        <button
          on:click={prev}
          class="p-2 rounded-full bg-psaiduck-dark-lighter hover:bg-psaiduck-purple transition-colors"
          aria-label="Previous screenshot"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Dots -->
        <div class="flex gap-2">
          {#each screenshots as _, i}
            <button
              on:click={() => currentIndex = i}
              class="w-2 h-2 rounded-full transition-colors {i === currentIndex ? 'bg-psaiduck-purple' : 'bg-gray-600'}"
              aria-label="Go to screenshot {i + 1}"
            />
          {/each}
        </div>

        <button
          on:click={next}
          class="p-2 rounded-full bg-psaiduck-dark-lighter hover:bg-psaiduck-purple transition-colors"
          aria-label="Next screenshot"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
