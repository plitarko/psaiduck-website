<script>
  export let version = '2.3';
  export let downloadUrl = '';
</script>

<section class="min-h-screen flex items-center justify-center relative overflow-hidden">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-b from-psaiduck-purple/20 via-transparent to-transparent"></div>

  <!-- Floating orbs -->
  <div class="absolute top-20 left-20 w-64 h-64 bg-psaiduck-purple/20 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute bottom-20 right-20 w-96 h-96 bg-psaiduck-purple/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

  <div class="section-container text-center relative z-10">
    <!-- App Icon -->
    <div class="mb-8 flex justify-center">
      <img
        src="/app-icon.png"
        alt="Psaiduck App Icon"
        class="w-40 h-40 md:w-52 md:h-52 glow rounded-3xl"
      />
    </div>

    <!-- App Name -->
    <h1 class="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-psaiduck-purple-light to-white bg-clip-text text-transparent">
      Psaiduck
    </h1>

    <!-- Tagline -->
    <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
      A lightweight macOS menu bar app that explains selected text or screen regions using AI
    </p>

    <!-- Version Badge -->
    <div class="flex justify-center gap-4 mb-8">
      <span class="bg-psaiduck-dark-lighter px-4 py-2 rounded-full text-sm">
        Version {version}
      </span>
      <span class="bg-psaiduck-dark-lighter px-4 py-2 rounded-full text-sm">
        macOS 13.0+
      </span>
    </div>

    <!-- Download Button -->
    <a
      href={downloadUrl}
      class="btn-primary inline-flex items-center gap-2 text-lg"
      download
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Download for macOS
    </a>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</section>
