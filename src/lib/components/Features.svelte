<script>
  const features = [
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>`,
      title: 'Explain Selected Text',
      description: 'Select any text in any application and get instant AI-powered explanations with a simple hotkey.'
    },
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>`,
      title: 'Screen Capture & OCR',
      description: 'Capture any region of your screen and extract text using local OCR. Screenshots are processed on your Mac — only the extracted text is sent to the AI.'
    },
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>`,
      title: 'Custom Actions',
      description: 'Create your own actions with custom prompts and hotkeys tailored to your workflow.'
    },
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>`,
      title: 'Follow-up Questions',
      description: 'Ask follow-up questions to dive deeper into explanations and have natural conversations.'
    },
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>`,
      title: 'Beautiful Markdown',
      description: 'Responses are rendered with rich markdown formatting including code blocks and tables.'
    },
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`,
      title: 'Completely Free',
      description: 'The app is free to use — you only pay for OpenAI API usage. A typical day of use costs around 1-2 cents.'
    }
  ];
</script>

<section id="features" class="bg-psaiduck-dark-lighter/50">
  <div class="section-container">
    <h2 class="section-title">Powerful Features</h2>
    <p class="section-subtitle">
      Everything you need to understand and analyze text with AI, right from your menu bar.
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each features as feature}
        <div class="feature-card">
          <div class="text-psaiduck-purple mb-4">
            {@html feature.icon}
          </div>
          <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
          <p class="text-gray-400">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
